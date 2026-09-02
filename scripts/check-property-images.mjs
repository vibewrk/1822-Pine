import { promises as fs } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, "..");
const dataPath = path.join(siteRoot, "src", "data", "property-images.json");
const roomsDataPath = path.join(siteRoot, "src", "data", "rooms.json");
const imageRoot = path.join(siteRoot, "public", "images", "property-tour");
const curationPath = path.join(scriptDir, "property-tour-curation.json");

const payload = JSON.parse(await fs.readFile(dataPath, "utf8"));
const { images, source } = payload;
const { rooms } = JSON.parse(await fs.readFile(roomsDataPath, "utf8"));
const curation = JSON.parse(await fs.readFile(curationPath, "utf8"));

function invariant(condition, message) {
  if (!condition) throw new Error(message);
}

const expectedSourceCount = curation.sourceImageIdsByOrder.length;
const expectedPublishedCount = expectedSourceCount - curation.expectedOmittedOrders.length;
invariant(source.listingId === curation.listingId, "Gallery source listing id is stale");
invariant(source.capturedOn === curation.capturedOn, "Gallery source capture date is stale");
invariant(source.sourcePhotoCount === expectedSourceCount, `Expected ${expectedSourceCount} source tour records`);
invariant(source.publishedPhotoCount === expectedPublishedCount, `Expected ${expectedPublishedCount} published photos`);
invariant(images.length === expectedPublishedCount, `Image manifest must contain ${expectedPublishedCount} photos`);
invariant(
  JSON.stringify([...source.omittedOrders].sort((a, b) => a - b)) ===
    JSON.stringify(curation.expectedOmittedOrders),
  "Only the explicitly curated photo orders may be omitted"
);
invariant(new Set(images.map((image) => image.id)).size === images.length, "Image ids must be unique");
invariant(new Set(images.map((image) => image.src)).size === images.length, "Image paths must be unique");
invariant(
  new Set(images.map((image) => image.sourceImageId)).size === images.length,
  "Airbnb source image ids must be unique"
);
const expectedOrders = Array.from({ length: expectedSourceCount }, (_, index) => index + 1).filter(
  (order) => !curation.expectedOmittedOrders.includes(order)
);
invariant(
  JSON.stringify(images.map((image) => image.order).sort((a, b) => a - b)) ===
    JSON.stringify(expectedOrders),
  "Image manifest must preserve every approved Airbnb source order"
);
invariant(!images.some((image) => image.order === 5), "Retired Grand Parlor order 5 must stay omitted");
invariant(!images.some((image) => image.order === 14), "Exact duplicate order 14 must stay omitted");
invariant(images.some((image) => image.order === 53), "User-approved exterior order 53 is missing");
invariant(images.some((image) => image.order === 59), "User-approved entry order 59 is missing");
invariant(
  images[0].order === curation.primaryLeadOrder,
  "The regular Grand Parlor configuration must lead the gallery"
);

const expectedImages = curation.groups.flatMap((group, groupIndex) =>
  group.sourceOrders.map((order, withinGroupIndex) => ({
    order,
    sourceImageId: curation.sourceImageIdsByOrder[order - 1],
    label: group.label,
    category: group.category,
    groupOrder: groupIndex + 1,
    withinGroupOrder: withinGroupIndex + 1,
  }))
);
const curatedMap = (image) => ({
  order: image.order,
  sourceImageId: image.sourceImageId,
  label: image.label,
  category: image.category,
  groupOrder: image.groupOrder,
  withinGroupOrder: image.withinGroupOrder,
});
invariant(
  JSON.stringify(images.map(curatedMap)) === JSON.stringify(expectedImages),
  "Every photo must follow the exact owner-curated identity, group, category, and display order"
);

const expectedGroupSequence = curation.groups.map((group) => group.label);
const actualGroupSequence = images.reduce((groups, image) => {
  if (groups.at(-1) !== image.label) groups.push(image.label);
  return groups;
}, []);
invariant(
  JSON.stringify(actualGroupSequence) === JSON.stringify(expectedGroupSequence),
  "Gallery groups must follow the owner-curated sales sequence"
);

for (const [sourceOrder, caption] of Object.entries(curation.captionOverrides)) {
  const image = images.find((candidate) => candidate.order === Number(sourceOrder));
  invariant(
    image?.caption === caption,
    `Order ${sourceOrder} must retain its owner-curated caption`
  );
}

const expectedParlorOrders = [7, 8, 3, 1, 2, 4, 6];
const parlorImages = images.filter((image) => image.label === "Grand Parlor (Living Room 1)");
invariant(
  JSON.stringify(parlorImages.map((image) => image.order)) === JSON.stringify(expectedParlorOrders),
  "Grand Parlor must lead with the regular setup, followed by the optional pool-table setup"
);
for (const order of [1, 2, 4, 6]) {
  const image = images.find((candidate) => candidate.order === order);
  invariant(
    image?.caption === "Pool-table configuration · available by special request" &&
      image.alt.includes("Pool-table configuration"),
    `Order ${order} must identify the special-request pool-table configuration`
  );
}
for (const order of [7, 8]) {
  const image = images.find((candidate) => candidate.order === order);
  invariant(
    image?.caption === "Grand Parlor · regular daily configuration",
    `Order ${order} must identify the regular Grand Parlor configuration`
  );
}
for (const order of [12, 13]) {
  const image = images.find((candidate) => candidate.order === order);
  invariant(
    image?.label === "Bedroom 1 · Principal Suite" &&
      image.category === "Bedrooms" &&
      image.caption.toLowerCase().includes("sitting room") &&
      image.bed === null,
    `Order ${order} must be presented as the principal-suite sitting room`
  );
}

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
const expectedBedByBedroom = new Map([
  ["Bedroom 1 · Principal Suite", ["Bedroom 1", "King bed"]],
  ["Bedroom 2", ["Bedroom 2", "Queen bed"]],
  ["Bedroom 3", ["Bedroom 3", "King bed"]],
  ["Bedroom 4", ["Bedroom 4", "Queen bed"]],
  ["Bedroom 5", ["Bedroom 5", "Queen bed"]],
  ["Bedroom 6", ["Bedroom 6", "Queen bed"]],
  ["Bedroom 7", ["Bedroom 7", "Queen bed"]],
  ["Bedroom 8", ["Bedroom 8", "Queen bed"]],
]);
const bedCounts = bedrooms.reduce((counts, image) => {
  counts[image.bed] = (counts[image.bed] ?? 0) + 1;
  return counts;
}, {});
invariant(bedrooms.length === 8, "Expected eight labeled bedrooms");
invariant(
  bedCounts["King bed"] === 2 &&
    bedCounts["Queen bed"] === 6 &&
    !bedCounts["Double bed"],
  "Expected the verified bed mix: two kings and six queens"
);
for (const [galleryLabel, [roomName, expectedBed]] of expectedBedByBedroom) {
  const bedroomImages = images.filter((image) => image.label === galleryLabel);
  invariant(bedroomImages.length > 0, `Missing gallery images for ${galleryLabel}`);
  invariant(
    bedroomImages.filter((image) => image.bed !== null).every((image) => image.bed === expectedBed),
    `${galleryLabel} bed-photo data must identify a ${expectedBed.toLowerCase()}`
  );
  invariant(
    bedroomImages.some(
      (image) => image.caption.includes(expectedBed) && image.alt.includes(expectedBed)
    ),
    `${galleryLabel} must include a bed photo labeled ${expectedBed.toLowerCase()}`
  );
  invariant(
    rooms.find((room) => room.name === roomName)?.bed === expectedBed,
    `${roomName} room data must identify a ${expectedBed.toLowerCase()}`
  );
}

const deployedFiles = (await fs.readdir(imageRoot)).filter((name) => name.endsWith(".webp"));
invariant(
  deployedFiles.length === expectedPublishedCount,
  `Property-tour directory must contain exactly ${expectedPublishedCount} WebP files`
);
invariant(
  !deployedFiles.includes("05-living-room-1-05.webp"),
  "Retired Grand Parlor order 5 must not be deployed"
);

const primaryLeadImage = images.find((image) => image.order === curation.primaryLeadOrder);
invariant(primaryLeadImage, "Approved primary lead image is missing");
const specialRequestImage = images.find((image) => image.order === 1);
invariant(specialRequestImage, "Special-request pool-table image is missing");
const factsContents = await fs.readFile(path.join(siteRoot, "src/lib/facts.ts"), "utf8");
invariant(
  factsContents.includes(`"${primaryLeadImage.src}"`),
  "Shared property facts must identify the approved primary image"
);
invariant(
  factsContents.includes(`width: ${primaryLeadImage.width}`) &&
    factsContents.includes(`height: ${primaryLeadImage.height}`),
  "Shared primary-image dimensions must match the generated asset"
);
for (const consumer of [
  "src/app/page.tsx",
  "src/app/book/page.tsx",
  "src/app/gallery/layout.tsx",
  "src/app/groups/page.tsx",
  "src/app/hotel-alternative/page.tsx",
  "src/app/house-rules/page.tsx",
  "src/app/layout.tsx",
  "src/app/rates/page.tsx",
  "src/app/reviews/page.tsx",
  "src/app/stay/page.tsx",
  "src/components/StructuredData.tsx",
]) {
  const contents = await fs.readFile(path.join(siteRoot, consumer), "utf8");
  invariant(
    contents.includes("PRIMARY_PROPERTY_IMAGE"),
    `${consumer} must use the shared regular-configuration lead image`
  );
  invariant(
    !contents.includes(specialRequestImage.src),
    `${consumer} must not use a special-request room configuration without its gallery caption`
  );
}
const storyContents = await fs.readFile(
  path.join(siteRoot, "src/data/story-chapters.json"),
  "utf8"
);
invariant(
  storyContents.includes(primaryLeadImage.src) &&
    !storyContents.includes(specialRequestImage.src),
  "Story chapters must use the regular Grand Parlor configuration as their lead"
);

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
