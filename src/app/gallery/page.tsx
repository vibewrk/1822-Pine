"use client";

import { useState } from "react";
import Image from "next/image";
import { Filter, ChevronDown } from "lucide-react";
import ImageLightbox, { GalleryImage } from "@/components/ImageLightbox";

// All property images with metadata
// Excluded: airbnb_00 (clipart), airbnb_06 (people), airbnb_15-22 (icons/portraits)
const allImages: GalleryImage[] = [
  // Airbnb Professional Photos
  { src: "/images/airbnb/airbnb_01.jpg", alt: "Master Bedroom with Four-Poster Bed", category: "Bedrooms", location: "Second Floor" },
  { src: "/images/airbnb/airbnb_02.jpg", alt: "Roof Deck with Panoramic City Views", category: "Outdoor", location: "Roof" },
  { src: "/images/airbnb/airbnb_03.jpg", alt: "Grand Parlor with Pool Table", category: "Living Spaces", location: "First Floor" },
  { src: "/images/airbnb/airbnb_04.jpg", alt: "Grand Parlor - Fireplace View", category: "Living Spaces", location: "First Floor" },
  { src: "/images/airbnb/airbnb_05.jpg", alt: "Library Lounge with Period Chairs", category: "Living Spaces", location: "First Floor" },
  { src: "/images/airbnb/airbnb_07.jpg", alt: "Master Bedroom - Alternative View", category: "Bedrooms", location: "Second Floor" },
  { src: "/images/airbnb/airbnb_08.jpg", alt: "Second Floor Guest Bedroom", category: "Bedrooms", location: "Second Floor" },
  { src: "/images/airbnb/airbnb_09.jpg", alt: "Third Floor Bedroom with Built-ins", category: "Bedrooms", location: "Third Floor" },
  { src: "/images/airbnb/airbnb_10.jpg", alt: "Simply furnished queen bedroom with upholstered gray headboard, seafoam carpet and bright double windows", category: "Bedrooms", location: "Fourth Floor" },
  { src: "/images/airbnb/airbnb_11.jpg", alt: "Attic-level queen bedroom with blue accents, mountain artwork and soft teal carpeting", category: "Bedrooms", location: "Fourth Floor" },
  { src: "/images/airbnb/airbnb_12.jpg", alt: "Spacious bedroom with coral quilt, twin armchairs and kilim-style rug at The Rittenhouse Residence", category: "Bedrooms", location: "Third Floor" },
  { src: "/images/airbnb/airbnb_13.jpg", alt: "Guest Bedroom with Original Floors", category: "Bedrooms", location: "Second Floor" },
  { src: "/images/airbnb/airbnb_14.jpg", alt: "Additional Bedroom Suite", category: "Bedrooms", location: "Third Floor" },

  // DSC Property Photos
  { src: "/images/property/DSC00064.jpg", alt: "Entry vestibule with green zebra-print wallpaper, black double doors and checkerboard marble floor at The Rittenhouse Residence", category: "Living Spaces", location: "Entry" },
  { src: "/images/property/DSC00066.jpg", alt: "Hallway view of the black entry door with ornate leaded-glass transom and original cast-iron radiator", category: "Details", location: "Entry" },
  { src: "/images/property/DSC00068.jpg", alt: "Entry hall with round brass mirror, console table and glass-paneled door crowned by a stained-glass transom", category: "Living Spaces", location: "Entry" },
  { src: "/images/property/DSC00070.jpg", alt: "Main staircase with red patterned runner and brass lantern pendant, framed by carved black corbels in the 1854 mansion", category: "Details", location: "Main Stair" },
  { src: "/images/property/DSC00072.jpg", alt: "Grand parlor with pool table opening through towering pocket doors beneath original carved plaster friezes", category: "Living Spaces", location: "First Floor" },
  { src: "/images/property/DSC00074.jpg", alt: "Powder room wrapped in black-and-white chinoiserie wallpaper with a sculpted white mirror and pedestal sink", category: "Bathrooms", location: "First Floor" },
  { src: "/images/property/DSC00078.jpg", alt: "Four-poster bedroom with crystal chandelier and striped bench, opening to a sunlit sitting room beyond", category: "Bedrooms", location: "Throughout" },
  { src: "/images/property/DSC00080.jpg", alt: "Bedroom corner with navy wingback reading chair beside a carved four-poster bed at The Rittenhouse Residence", category: "Bedrooms", location: "Throughout" },
  { src: "/images/property/DSC00082.jpg", alt: "Four-poster bedroom with deep window seat, crystal chandelier and built-in cabinets with fretwork glass doors", category: "Bedrooms", location: "Throughout" },
  { src: "/images/property/DSC00084.jpg", alt: "Carved four-poster bed beside an original built-in wardrobe with lattice-glass doors and antique dresser", category: "Bedrooms", location: "Throughout" },
  { src: "/images/property/DSC00086.jpg", alt: "Chinoiserie sitting room with black brick fireplace, mounted TV and leaded-glass bay window with coffee station", category: "Living Spaces", location: "Throughout" },
  { src: "/images/property/DSC00088.jpg", alt: "Sitting room with teal velvet sofa, leaded-glass bay window and hand-painted botanical wallpaper in the 1854 mansion", category: "Living Spaces", location: "Throughout" },
  { src: "/images/property/DSC00092.jpg", alt: "View from the wallpapered sitting room into the adjoining four-poster bedroom suite beneath a crystal chandelier", category: "Bedrooms", location: "Throughout" },
  { src: "/images/property/DSC00094.jpg", alt: "Bathroom with leafy woodland wallpaper, white tile wainscot, pedestal sink and ornate antique radiator", category: "Bathrooms", location: "Throughout" },
  { src: "/images/property/DSC00096.jpg", alt: "Pedestal sink with vintage cross-handle faucet beneath tree-print wallpaper in a white-tiled bathroom", category: "Bathrooms", location: "Throughout" },
  { src: "/images/property/DSC00102.jpg", alt: "Powder-blue bathroom with bird-silhouette wallpaper, scalloped mirror and polished-nickel fittings at The Rittenhouse Residence", category: "Bathrooms", location: "Throughout" },
  { src: "/images/property/DSC00106.jpg", alt: "Renovated bathroom with glass walk-in shower, cane-front wood vanity and pivoting chrome mirror", category: "Bathrooms", location: "Throughout" },
  { src: "/images/property/DSC00110.jpg", alt: "Arched center hallway with carved black corbels leading past the parlor to the stained-glass front entry", category: "Living Spaces", location: "First Floor" },
  { src: "/images/property/DSC00112.jpg", alt: "Gallery-hung hallway and cane bench beside the red-carpeted staircase, with the portrait-hung front parlor beyond", category: "Living Spaces", location: "First Floor" },
  { src: "/images/property/DSC00116.jpg", alt: "Marble front stoop at 1822 Pine Street with the door open to the zebra-papered vestibule of the 1854 mansion", category: "Exterior", location: "Street View" },
  { src: "/images/property/DSC00118.jpg", alt: "Red-brick Victorian facade with paneled shutters and blooming flower boxes, the front door open to the marble vestibule", category: "Exterior", location: "Street View" },
  { src: "/images/property/DSC00122.jpg", alt: "Looking through the double front doors into the zebra vestibule with leaded-glass transom and checkerboard marble floor", category: "Exterior", location: "Street View" },

  // Additional Property Photos
  { src: "/images/property/DSC08713.jpg", alt: "Bedroom with Period Furnishings", category: "Bedrooms", location: "Second Floor" },
  { src: "/images/property/DSC08715.jpg", alt: "Marble bathroom with jetted soaking tub beneath the window and a frameless glass walk-in shower", category: "Bathrooms", location: "Second Floor" },
  { src: "/images/property/DSC08723.jpg", alt: "Bedroom with Built-in Closets", category: "Bedrooms", location: "Third Floor" },
  { src: "/images/property/DSC08731.jpg", alt: "Cozy Bedroom with Hardwood Floors", category: "Bedrooms", location: "Third Floor" },
  { src: "/images/property/DSC08735.jpg", alt: "Bedroom with Antique Dresser", category: "Bedrooms", location: "Third Floor" },
  { src: "/images/property/DSC08741.jpg", alt: "Upper-floor lounge with gray sofa and breakfast bar seating beside the second full kitchen", category: "Living Spaces", location: "Fourth Floor" },
  { src: "/images/property/DSC08743.jpg", alt: "Bedroom with Original Woodwork", category: "Bedrooms", location: "Fourth Floor" },
  { src: "/images/property/DSC08749.jpg", alt: "Bedroom with Antique Furniture", category: "Bedrooms", location: "Fourth Floor" },
  { src: "/images/property/DSC08821.jpg", alt: "Dining Room with Crystal Chandelier", category: "Living Spaces", location: "First Floor" },
  { src: "/images/property/DSC08827.jpg", alt: "Chef's kitchen with granite island gas cooktop and double wall ovens, opening to the chandelier-lit dining room", category: "Kitchen", location: "First Floor" },
  { src: "/images/property/DSC08831.jpg", alt: "Modern Kitchen with Island", category: "Kitchen", location: "First Floor" },
  { src: "/images/property/DSC08837.jpg", alt: "Kitchen with Stainless Appliances", category: "Kitchen", location: "First Floor" },
  { src: "/images/property/DSC08839.jpg", alt: "Narrow brick courtyard with bistro seating, planted borders and white lattice between historic brick walls", category: "Outdoor", location: "Garden" },
  { src: "/images/property/DSC08841.jpg", alt: "Private Brick Courtyard Garden", category: "Outdoor", location: "Garden" },
  { src: "/images/property/DSC08855.jpg", alt: "Historic Brownstone Exterior", category: "Exterior", location: "Street View" },
];

const floorPlanImages = [
  { src: "/images/floor-plans/floor-1.jpg", alt: "First Floor Plan", label: "First Floor" },
  { src: "/images/floor-plans/floor-2.jpg", alt: "Second Floor Plan", label: "Second Floor" },
  { src: "/images/floor-plans/floor-3.jpg", alt: "Third Floor Plan", label: "Third Floor" },
  { src: "/images/floor-plans/floor-4.jpg", alt: "Fourth Floor Plan", label: "Fourth Floor" },
  { src: "/images/floor-plans/roof-deck.jpg", alt: "Roof Deck Plan", label: "Roof Deck" },
];

// Get unique categories
const categories = ["All", ...Array.from(new Set(allImages.map((img) => img.category)))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    selectedCategory === "All"
      ? allImages
      : allImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-medium text-amber-400 tracking-widest uppercase mb-4">
                Photo Tour
              </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Rittenhouse Residence Gallery
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Nearly 7,000 square feet of historic elegance—from grand parlors to
                intimate bedrooms, original details to modern comforts.
              </p>
              <p className="mt-4 text-amber-400">
                {allImages.length} photos · Click any image to view full size
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-700 font-medium"
                >
                  <Filter className="h-4 w-4" />
                  Filter by Room
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
                  />
                </button>
                {selectedCategory !== "All" && (
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="text-sm text-amber-700 hover:text-amber-800"
                  >
                    Clear filter
                  </button>
                )}
              </div>
              <p className="text-sm text-gray-500">
                Showing {filteredImages.length} of {allImages.length} photos
              </p>
            </div>

            {/* Category Filter Pills */}
            {showFilters && (
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === selectedCategory
                        ? "bg-amber-700 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-800"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Main Gallery */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index)}
                  className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                    index === 0 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <div className={`relative ${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-block px-2 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                          {image.category}
                        </span>
                        <p className="mt-1 text-white text-sm line-clamp-2">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Floor Plans */}
        <section className="py-12 md:py-16 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-amber-700 font-medium tracking-widest uppercase text-sm mb-3">
                Layout
              </p>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                Floor Plans
              </h2>
              <p className="mt-3 text-gray-600">
                Five floors of living space across nearly 7,000 square feet
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {floorPlanImages.map((plan) => (
                <div key={plan.label} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={plan.src}
                      alt={plan.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 20vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="p-3 md:p-4 border-t">
                    <p className="font-semibold text-gray-900 text-center text-sm md:text-base">
                      {plan.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Property Highlights */}
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-8 text-center">
              Property Highlights
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Living Spaces</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Grand Parlor with pool table</li>
                  <li>• Library Lounge with wet bar</li>
                  <li>• 70&quot; 4K TV entertainment center</li>
                  <li>• Three separate living areas</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Bedrooms & Baths</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• 8 bedrooms across 5 private suites</li>
                  <li>• 3 king · 4 queen · 1 double</li>
                  <li>• 5 full bathrooms and a powder room</li>
                  <li>• Master suite with private bath</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Outdoor & Kitchen</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Roof deck with panoramic views</li>
                  <li>• Private patio with BBQ</li>
                  <li>• Two full chef&apos;s kitchens</li>
                  <li>• Gas range, Nespresso, dishwasher</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={filteredImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
