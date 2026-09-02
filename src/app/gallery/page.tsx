"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Filter, ChevronDown } from "lucide-react";
import { BookingCTA } from "@/components/BookingCTA";
import ImageLightbox, { GalleryImage } from "@/components/ImageLightbox";
import propertyImageData from "@/data/property-images.json";

const allImages: GalleryImage[] = propertyImageData.images;

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

  const groupedImages = filteredImages.reduce<
    Array<{ label: string; bed?: string | null; images: GalleryImage[] }>
  >((groups, image) => {
    const current = groups.at(-1);
    if (current?.label === image.label) {
      current.images.push(image);
    } else {
      groups.push({ label: image.label, bed: image.bed, images: [image] });
    }
    return groups;
  }, []);

  const openLightbox = (imageId: string) => {
    setLightboxIndex(filteredImages.findIndex((image) => image.id === imageId));
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
                Walk through the parlors and kitchens, all eight labeled bedrooms,
                every bath, the courtyard, and the roof deck—in the same order you
                would encounter them on our booking tour.
              </p>
              <p className="mt-4 text-amber-400">
                {allImages.length} current photos · Click any image to view full size
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
                  Filter the tour
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
            <div className="space-y-14 md:space-y-16">
              {groupedImages.map((group) => (
                <section key={group.label} aria-labelledby={`gallery-${group.label.replaceAll(" ", "-").toLowerCase()}`}>
                  <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-stone-200 pb-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                        {group.images[0].category}
                      </p>
                      <h2
                        id={`gallery-${group.label.replaceAll(" ", "-").toLowerCase()}`}
                        className="mt-1 font-serif text-3xl font-semibold capitalize text-stone-950"
                      >
                        {group.label}
                      </h2>
                    </div>
                    <p className="text-sm font-medium text-stone-600">
                      {group.bed ? `${group.bed} · ` : ""}
                      {group.images.length} {group.images.length === 1 ? "photo" : "photos"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
                    {group.images.map((image, imageIndex) => {
                      const isLead = imageIndex === 0 && group.images.length >= 4;
                      return (
                        <button
                          key={image.id}
                          onClick={() => openLightbox(image.id)}
                          aria-label={`Open ${group.label}, photo ${imageIndex + 1} of ${group.images.length}: ${image.caption}`}
                          className={`group relative overflow-hidden rounded-xl bg-stone-100 text-left ${
                            isLead ? "col-span-2 row-span-2" : ""
                          }`}
                        >
                          <div className={`relative ${isLead ? "aspect-square" : "aspect-[4/3]"}`}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes={isLead ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <p className="absolute inset-x-3 bottom-3 line-clamp-2 text-sm font-medium text-white md:text-base">
                              {image.caption}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </section>
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
                Four stories of living space across nearly 7,000 square feet
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
                  <li>• 8 bedrooms across floors 2–4</li>
                  <li>• 3 king · 4 queen · 1 double</li>
                  <li>• 5 full bathrooms and a powder room</li>
                  <li>• Principal suite with private bath</li>
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

        <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold text-amber-800">
              <Link href="/stay/rooms" className="underline underline-offset-4 hover:text-amber-950">
                Plan the bedrooms
              </Link>
              <Link href="/stay/floor-plans" className="underline underline-offset-4 hover:text-amber-950">
                Explore the floor plans
              </Link>
              <Link href="/reviews" className="underline underline-offset-4 hover:text-amber-950">
                Read guest reviews
              </Link>
            </div>
            <BookingCTA />
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
