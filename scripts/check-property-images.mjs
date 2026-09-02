import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");
const dataPath = path.join(siteRoot, "src", "data", "property-images.json");
const imageRoot = path.join(siteRoot, "public", "images", "property-tour");

const payload = JSON.parse(await fs.readFile(dataPath, "utf8"));
const { images, source } = payload;

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

invariant(source.sourcePhotoCount === 62, "Expected 62 source tour records");
invariant(source.publishedPhotoCount === 61, "Expected 61 published photos");
invariant(images.length === 61, "Image manifest must contain 61 photos");
invariant(new Set(images.map((image) => image.id)).size === images.length, "Image ids must be unique");
invariant(new Set(images.map((image) => image.src)).size === images.length, "Image paths must be unique");
const expectedOrders = Array.from({ length: 62 }, (_, index) => index + 1).filter(
  (order) => order !== 14
);
invariant(
  images.every((image, index) => image.order === expectedOrders[index]),
  "Image manifest must preserve Airbnb tour order with only duplicate order 14 omitted"
);
invariant(!images.some((image) => image.order === 14), "Exact duplicate order 14 must stay omitted");
invariant(images.some((image) => image.order === 53), "User-approved exterior order 53 is missing");
invariant(images.some((image) => image.order === 59), "User-approved entry order 59 is missing");

let previousGroupOrder = 0;
const groupPositions = new Map();
for (const image of images) {
  invariant(
    image.groupOrder >= previousGroupOrder,
    `Group order moves backward at ${image.id}`
  );
  const expectedWithinGroup = (groupPositions.get(image.groupOrder) ?? 0) + 1;
  invariant(
    image.withinGroupOrder === expectedWithinGroup,
    `Within-group order is not contiguous at ${image.id}`
  );
  groupPositions.set(image.groupOrder, expectedWithinGroup);
  previousGroupOrder = image.groupOrder;
}

const bedrooms = images.filter(
  (image) => image.label.startsWith("Bedroom") && image.withinGroupOrder === 1
);
const bedCounts = bedrooms.reduce((counts, image) => {
  counts[image.bed] = (counts[image.bed] ?? 0) + 1;
  return counts;
}, {});
invariant(bedrooms.length === 8, "Expected eight labeled bedrooms");
invariant(
  bedCounts["King bed"] === 3 && bedCounts["Queen bed"] === 4 && bedCounts["Double bed"] === 1,
  "Expected the Airbnb bed mix: three kings, four queens, one double"
);

const deployedFiles = (await fs.readdir(imageRoot)).filter((name) => name.endsWith(".webp"));
invariant(deployedFiles.length === 61, "Property-tour directory must contain exactly 61 WebP files");

const contentHashes = new Set();
for (const image of images) {
  invariant(image.alt && image.caption && image.label, `Missing image text for ${image.id}`);
  invariant(Math.max(image.width, image.height) <= 2100, `${image.id} exceeds 2100px`);
  const filePath = path.join(siteRoot, "public", image.src);
  const buffer = await fs.readFile(filePath);
  const contentHash = createHash("sha256").update(buffer).digest("hex");
  invariant(!contentHashes.has(contentHash), `${image.id} duplicates another published image`);
  contentHashes.add(contentHash);
  invariant(buffer.subarray(0, 4).toString("ascii") === "RIFF", `${image.id} is not a WebP RIFF file`);
  invariant(buffer.subarray(8, 12).toString("ascii") === "WEBP", `${image.id} is not WebP`);

  for (let offset = 12; offset + 8 <= buffer.length; ) {
    const chunk = buffer.subarray(offset, offset + 4).toString("ascii");
    const length = buffer.readUInt32LE(offset + 4);
    invariant(chunk !== "EXIF" && chunk !== "XMP ", `${image.id} still contains ${chunk} metadata`);
    offset += 8 + length + (length % 2);
  }
}

for (const legacyPath of [
  path.join(siteRoot, "public", "images", "airbnb"),
  path.join(siteRoot, "public", "images", "property"),
  path.join(siteRoot, "public", "archive", "images", "web", "airbnb"),
]) {
  try {
    await fs.access(legacyPath);
    invariant(false, `Legacy image directory must not be published: ${legacyPath}`);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

console.log("Property image manifest, files, room labels, and metadata verified");
