import Image from "next/image";
import { CinematicHero } from "@/components/cinematic-hero";
import { NotifyForm } from "@/components/notify-form";
import { TextLink } from "@/components/text-link";
import { brand, eclipses, pillars } from "@/lib/content";
import { images } from "@/lib/images";

export const metadata = {
  title: "Follow the Light",
};

export default function FollowTheLightPage() {
  return (
    <>
      <CinematicHero
        image={images.desertSun}
        imageAlt="Sun over desert ridgeline"
        kicker="The annual program"
        title="Follow the Light"
      >
        <p className="font-body text-lg leading-[1.7] text-paper/85">
          The celestial event chooses the destination; we create the
          extraordinary journey around it.
        </p>
        <p className="mt-4 font-body text-paper/70">{brand.sameSun}</p>
      </CinematicHero>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="max-w-2xl font-body text-xl leading-[1.75]">
          An annual, highly curated cohort — maximum 24 — chasing totality.
          Egypt 2027 is the active run. Later years are a notification list
          until we open them.
        </p>
        <div className="mt-20 grid gap-16 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article key={pillar.name} className="border-t border-stone pt-8">
              <h2 className="font-display text-3xl uppercase">{pillar.name}</h2>
              <p className="mt-4 max-w-md font-body text-graphite">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-stone bg-stone/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Follow the Light opportunities
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Five years of sky.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {eclipses.map((event) => (
              <article key={event.year} className="flex flex-col bg-paper">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.place}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 20vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                  <p className="tracking-data absolute bottom-4 left-4 text-[11px] uppercase text-paper">
                    {event.status === "active" ? "Active run" : "Notify list"}
                  </p>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="tracking-data text-xs text-graphite">
                    {event.date}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{event.place}</h3>
                  <p className="mt-2 text-sm text-graphite">{event.region}</p>
                  <p className="mt-3 text-sm">{event.motif}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="tracking-data text-[11px] uppercase text-graphite">
              Future eclipse notification
            </p>
            <h2 className="mt-4 font-display text-4xl">
              Tell us which years to hold.
            </h2>
            <p className="mt-6 max-w-md font-body text-graphite">
              2028 Australia, 2030 Southern Africa, 2033 Alaska, 2034 Egypt /
              North Africa. Select the years. We will write when those
              departures open.
            </p>
            <div className="mt-8">
              <TextLink href="/egypt-2027">Or begin with Egypt 2027</TextLink>
            </div>
          </div>
          <NotifyForm />
        </div>
      </section>
    </>
  );
}
