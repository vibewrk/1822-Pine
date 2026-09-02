#!/usr/bin/env python3
"""Build a privacy-reviewed, web-ready property tour from an Airbnb export.

The input manifest is JSONL and the source directory contains files named by
two-digit Airbnb tour order (01.jpg, 02.jpg, ...). This is an import-time tool;
the website never fetches Airbnb at runtime.
"""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from PIL import Image, ImageOps


OMIT_FLAG_TYPES = {"exact_duplicate"}
CURATION_PATH = Path(__file__).with_name("property-tour-curation.json")
CURATION = json.loads(CURATION_PATH.read_text())
OWNER_OMIT_ORDERS = set(CURATION["ownerOmittedOrders"])
EXPECTED_OMITTED_ORDERS = set(CURATION["expectedOmittedOrders"])
EXPECTED_IMAGE_ID_BY_ORDER = {
    order: image_id
    for order, image_id in enumerate(
        CURATION["sourceImageIdsByOrder"], start=1
    )
}
VERIFIED_BED_BY_BEDROOM = {
    "Bedroom 1": "King bed",
    "Bedroom 2": "Queen bed",
    "Bedroom 3": "King bed",
    "Bedroom 4": "Queen bed",
    "Bedroom 5": "Queen bed",
    "Bedroom 6": "Queen bed",
    "Bedroom 7": "Queen bed",
    "Bedroom 8": "Queen bed",
}

# Keep Airbnb's source order on every image as provenance, while
# publishing the tour in the order that best explains and sells the house.
# The curation file also pins each source position to Airbnb's stable image ID;
# if Airbnb later reorders the listing, this importer stops instead of silently
# putting a room's label or omission on the wrong photo.
CURATED_GROUPS = tuple(
    (group["label"], group["category"], tuple(group["sourceOrders"]))
    for group in CURATION["groups"]
)

CURATION_BY_ORDER = {
    source_order: {
        "label": label,
        "category": category,
        "group_order": group_order,
        "within_group_order": within_group_order,
    }
    for group_order, (label, category, source_orders) in enumerate(
        CURATED_GROUPS, start=1
    )
    for within_group_order, source_order in enumerate(source_orders, start=1)
}

CAPTION_OVERRIDES = {
    int(source_order): caption
    for source_order, caption in CURATION["captionOverrides"].items()
}


def bed_for(record: dict) -> str | None:
    """Prefer the owner-verified bed map over stale OTA photo highlights."""
    return VERIFIED_BED_BY_BEDROOM.get(
        record["group"],
        (record.get("bed_highlights") or [None])[0],
    )


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def display_caption(record: dict) -> str:
    order = record["order"]
    group = record["group"]
    bed = bed_for(record)
    mismatch = any(
        flag.get("type") == "caption_group_mismatch"
        for flag in record.get("flags", [])
    )

    if order in CAPTION_OVERRIDES:
        return CAPTION_OVERRIDES[order]
    if group.startswith("Bedroom"):
        return f"{group} · {bed}" if bed else group
    if record.get("caption") and not mismatch:
        return record["caption"]
    return group


def alt_text(record: dict, caption: str) -> str:
    group = record["group"]
    within = record["within_group_order"]
    generic = caption == group
    if generic and within > 1:
        caption = f"{group}, view {within}"
    if "Rittenhouse Residence" in caption:
        return caption
    return f"{caption} at The Rittenhouse Residence"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--manifest", type=Path, required=True)
    parser.add_argument("--source-dir", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--data-output", type=Path, required=True)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    records = [
        json.loads(line)
        for line in args.manifest.read_text().splitlines()
        if line.strip()
    ]
    records_by_order = {record["order"]: record for record in records}
    if len(records_by_order) != len(records):
        raise SystemExit("Source manifest contains duplicate tour orders")
    if set(records_by_order) != set(EXPECTED_IMAGE_ID_BY_ORDER):
        raise SystemExit(
            "Source manifest orders do not match the captured Airbnb tour"
        )
    for order, expected_image_id in EXPECTED_IMAGE_ID_BY_ORDER.items():
        actual_image_id = int(records_by_order[order]["image_id"])
        if actual_image_id != expected_image_id:
            raise SystemExit(
                "Airbnb source order changed; review the curation before "
                f"importing (order {order}: expected image {expected_image_id}, "
                f"found {actual_image_id})"
            )

    approved = [
        record
        for record in records
        if record["order"] not in OWNER_OMIT_ORDERS
        and not {
            flag.get("type") for flag in record.get("flags", [])
        }.intersection(OMIT_FLAG_TYPES)
    ]
    omitted_orders = {record["order"] for record in records} - {
        record["order"] for record in approved
    }
    if omitted_orders != EXPECTED_OMITTED_ORDERS:
        raise SystemExit(
            "Source omissions do not match the owner-approved curation: "
            f"expected={sorted(EXPECTED_OMITTED_ORDERS)}, "
            f"found={sorted(omitted_orders)}"
        )

    approved_by_order = {record["order"]: record for record in approved}
    curated_orders = set(CURATION_BY_ORDER)
    approved_orders = set(approved_by_order)
    if approved_orders != curated_orders:
        missing = sorted(approved_orders - curated_orders)
        unexpected = sorted(curated_orders - approved_orders)
        raise SystemExit(
            "Owner curation does not match the approved source photos: "
            f"uncurated={missing}, unavailable={unexpected}"
        )

    expected_source_count = len(EXPECTED_IMAGE_ID_BY_ORDER)
    expected_published_count = (
        expected_source_count - len(EXPECTED_OMITTED_ORDERS)
    )
    if (
        len(records) != expected_source_count
        or len(approved) != expected_published_count
    ):
        raise SystemExit(
            f"Unexpected counts: {len(records)} source, "
            f"{len(approved)} approved"
        )

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for stale in args.output_dir.glob("*.webp"):
        stale.unlink()
    images = []
    for label, category, source_orders in CURATED_GROUPS:
        for source_order in source_orders:
            record = approved_by_order[source_order]
            curation = CURATION_BY_ORDER[source_order]
            order = record["order"]
            group = record["group"]
            source = args.source_dir / f"{order:02d}.jpg"
            filename = (
                f"{order:02d}-{slugify(group)}-"
                f"{record['within_group_order']:02d}.webp"
            )
            destination = args.output_dir / filename

            with Image.open(source) as original:
                image = ImageOps.exif_transpose(original).convert("RGB")
                image.thumbnail((2100, 2100), Image.Resampling.LANCZOS)
                image.save(
                    destination,
                    "WEBP",
                    quality=84,
                    method=6,
                    optimize=True,
                )
                width, height = image.size

            caption = display_caption(record)
            image_bed = bed_for(record)
            images.append(
                {
                    "id": f"tour-{order:02d}",
                    "src": f"/images/property-tour/{filename}",
                    "order": order,
                    "sourceImageId": int(record["image_id"]),
                    "groupOrder": curation["group_order"],
                    "withinGroupOrder": curation["within_group_order"],
                    "label": label,
                    "caption": caption,
                    "alt": alt_text(record, caption),
                    "category": category,
                    "bed": image_bed,
                    "orientation": (
                        "portrait" if height > width else "landscape"
                    ),
                    "width": width,
                    "height": height,
                }
            )

    if len(images) != expected_published_count:
        raise SystemExit(
            f"Generated {len(images)} images; expected "
            f"{expected_published_count}"
        )

    payload = {
        "source": {
            "platform": "Airbnb",
            "listingId": CURATION["listingId"],
            "capturedOn": CURATION["capturedOn"],
            "sourcePhotoCount": len(records),
            "publishedPhotoCount": len(images),
            "omittedOrders": sorted(EXPECTED_OMITTED_ORDERS),
            "omissionReasons": CURATION["omissionReasons"],
        },
        "images": images,
    }
    args.data_output.parent.mkdir(parents=True, exist_ok=True)
    args.data_output.write_text(json.dumps(payload, indent=2) + "\n")
    print(f"Imported {len(images)} approved photos to {args.output_dir}")


if __name__ == "__main__":
    main()
