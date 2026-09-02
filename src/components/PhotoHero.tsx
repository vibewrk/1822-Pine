import type { ReactNode } from "react";
import Image from "next/image";

type PhotoHeroProps = {
  src: string;
  alt: string;
  children: ReactNode;
};

/** A full-bleed photographic hero with a consistent readable text treatment. */
export function PhotoHero({ src, alt, children }: PhotoHeroProps) {
  return (
    <section className="relative min-h-[560px] overflow-hidden md:min-h-[620px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        preload
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20"
      />
      <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-end px-4 py-16 sm:px-6 md:min-h-[620px] md:py-20 lg:px-8">
        {children}
      </div>
    </section>
  );
}
