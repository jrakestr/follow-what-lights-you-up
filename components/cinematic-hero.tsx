import Image from "next/image";
import type { ReactNode } from "react";

export function CinematicHero({
  image,
  imageAlt,
  kicker,
  title,
  children,
  minHeight = "min-h-[92vh]",
}: {
  image: string;
  imageAlt: string;
  kicker?: string;
  title: ReactNode;
  children?: ReactNode;
  minHeight?: string;
}) {
  return (
    <section className={`relative flex ${minHeight} items-end overflow-hidden bg-ink text-paper`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="ken-burns object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-16 md:px-10 md:pb-24">
        {kicker ? (
          <p className="tracking-data text-[11px] uppercase text-paper/70">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-5xl text-paper md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {children ? <div className="mt-8 max-w-2xl">{children}</div> : null}
      </div>
    </section>
  );
}
