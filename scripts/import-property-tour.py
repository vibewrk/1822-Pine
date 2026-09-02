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
CAPTION_OVERRIDES = {
    17: "Chef's kitchen with two convection ovens and a microwave",
    18: "Tea and coffee station with two Nespresso machines and a kettle",
    19: "Second kitchen",
    20: "Nespresso coffee station",
    21: "Tea and coffee station",
    22: "Tea and coffee service",
    36: "Principal suite bathroom with a shower and jetted tub",
    37: "Principal suite bathroom",
    40: "Full bathroom 3",
    57: "Main staircase to the bedrooms and roof deck",
    58: "Gallery hall and front parlor",
    59: "Front entry",
}


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def category_for(group: str) -> str:
    if group.startswith("Bedroom"):
        return "Bedrooms"
    if "bathroom" in group.lower():
        return "Bathrooms"
    if group.startswith("Full kitchen"):
        return "Kitchens"
    if group in {"Patio", "Rooftop"}:
        return "Outdoor"
    if group == "Laundry area":
        return "Amenities"
    if group == "Additional photos":
        return "Details"
    if group == "Exterior":
        return "Exterior"
    return "Living Spaces"


def display_caption(record: dict) -> str:
    order = record["order"]
    group = record["group"]
    bed = (record.get("bed_highlights") or [None])[0]
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
    approved = [
        record
        for record in records
        if not {
            flag.get("type") for flag in record.get("flags", [])
        }.intersection(OMIT_FLAG_TYPES)
    ]

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for stale in args.output_dir.glob("*.webp"):
        stale.unlink()
    images = []
    for record in approved:
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
        images.append(
            {
                "id": f"tour-{order:02d}",
                "src": f"/images/property-tour/{filename}",
                "order": order,
                "groupOrder": record["group_order"],
                "withinGroupOrder": record["within_group_order"],
                "label": group,
                "caption": caption,
                "alt": alt_text(record, caption),
                "category": category_for(group),
                "bed": (record.get("bed_highlights") or [None])[0],
                "orientation": (
                    "portrait" if height > width else "landscape"
                ),
                "width": width,
                "height": height,
            }
        )

    payload = {
        "source": {
            "platform": "Airbnb",
            "listingId": "6000930",
            "capturedOn": "2026-09-02",
            "sourcePhotoCount": len(records),
            "publishedPhotoCount": len(images),
            "omittedOrders": [14],
            "omissionReasons": [
                "one exact duplicate",
            ],
        },
        "images": images,
    }
    args.data_output.parent.mkdir(parents=True, exist_ok=True)
    args.data_output.write_text(json.dumps(payload, indent=2) + "\n")

    if len(records) != 62 or len(images) != 61:
        raise SystemExit(
            f"Unexpected counts: {len(records)} source, {len(images)} approved"
        )
    print(f"Imported {len(images)} approved photos to {args.output_dir}")


if __name__ == "__main__":
    main()
