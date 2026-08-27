"""Create address-free guest derivatives of the archived floor plans."""

from __future__ import annotations

import io
import subprocess
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib.colors import black, white
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / "images" / "floor-plans"
OUTPUT_DIR = ROOT / "output" / "pdf"
RENDER_DIR = ROOT / "tmp" / "pdfs"
PUBLIC_IMAGE_DIR = ROOT / "public" / "images" / "floor-plans"

PLANS = [
    ("1822 1 Floor.pdf", "rittenhouse-residence-first-floor", "floor-1.jpg"),
    ("1822 2 Floor.pdf", "rittenhouse-residence-second-floor", "floor-2.jpg"),
    ("1822 3 Floor.pdf", "rittenhouse-residence-third-floor", "floor-3.jpg"),
    ("1822 4 Floor.pdf", "rittenhouse-residence-fourth-floor", "floor-4.jpg"),
    ("1822 Roof Deck.pdf", "rittenhouse-residence-roof-deck", "roof-deck.jpg"),
]


def neutral_label_overlay(width: float, height: float) -> PdfReader:
    packet = io.BytesIO()
    overlay = canvas.Canvas(packet, pagesize=(width, height))
    overlay.setFillColor(white)
    overlay.rect(505, 17, 86, 21, stroke=0, fill=1)
    overlay.setFillColor(black)
    overlay.setFont("Helvetica", 5)
    overlay.drawRightString(580, 24, "GUEST FLOOR PLAN")
    overlay.save()
    packet.seek(0)
    return PdfReader(packet)


def add_visual_redaction(source: Path, destination: Path) -> tuple[float, float]:
    reader = PdfReader(source)
    if len(reader.pages) != 1:
        raise ValueError(f"Expected one-page floor plan: {source}")

    page = reader.pages[0]
    width = float(page.mediabox.width)
    height = float(page.mediabox.height)
    page.merge_page(neutral_label_overlay(width, height).pages[0])

    writer = PdfWriter()
    writer.add_page(page)
    writer.add_metadata(
        {
            "/Title": destination.stem.replace("-", " ").title(),
            "/Subject": "Guest floor plan for The Rittenhouse Residence",
        }
    )
    with destination.open("wb") as output:
        writer.write(output)
    return width, height


def flatten_pdf(source: Path, destination: Path, width: float, height: float) -> None:
    raster_base = RENDER_DIR / f"{destination.stem}-flattened"
    raster_path = raster_base.with_suffix(".jpg")
    subprocess.run(
        [
            "pdftoppm",
            "-jpeg",
            "-jpegopt",
            "quality=95",
            "-r",
            "240",
            "-singlefile",
            str(source),
            str(raster_base),
        ],
        check=True,
    )

    flattened = canvas.Canvas(str(destination), pagesize=(width, height), pageCompression=1)
    flattened.setTitle(destination.stem.replace("-", " ").title())
    flattened.setSubject("Guest floor plan for The Rittenhouse Residence")
    flattened.drawImage(
        ImageReader(raster_path),
        0,
        0,
        width=width,
        height=height,
        preserveAspectRatio=False,
    )
    flattened.showPage()
    flattened.save()
    raster_path.unlink()


def render(source: Path, png_prefix: Path, public_jpg: Path) -> None:
    subprocess.run(
        ["pdftoppm", "-png", "-r", "150", "-singlefile", str(source), str(png_prefix)],
        check=True,
    )
    subprocess.run(
        ["pdftoppm", "-jpeg", "-r", "144", "-singlefile", str(source), str(public_jpg.with_suffix(""))],
        check=True,
    )


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    RENDER_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_IMAGE_DIR.mkdir(parents=True, exist_ok=True)

    for source_name, output_stem, public_image_name in PLANS:
        source = SOURCE_DIR / source_name
        destination = OUTPUT_DIR / f"{output_stem}.pdf"
        overlay_pdf = RENDER_DIR / f"{output_stem}-overlay.pdf"
        width, height = add_visual_redaction(source, overlay_pdf)
        flatten_pdf(overlay_pdf, destination, width, height)
        overlay_pdf.unlink()
        render(
            destination,
            RENDER_DIR / output_stem,
            PUBLIC_IMAGE_DIR / public_image_name,
        )


if __name__ == "__main__":
    main()
