import Image from "next/image";
import { CinematicHero } from "@/components/cinematic-hero";
import { TextLink } from "@/components/text-link";
import { WaitlistForm } from "@/components/waitlist-form";
import {
  brand,
  facts,
  founders,
  pillars,
  spainTeaser,
  travelers,
} from "@/lib/content";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <CinematicHero
        image={images.eclipseHero}
        imageAlt="The sun in total solar eclipse with glowing corona"
        kicker="August 2, 2027 · Luxor"
        title={
          <>
            Follow what
            <br />
            lights you up.
          </>
        }
      >
        <p className="font-body text-lg leading-[1.7] text-paper/85">
          {brand.alive}
        </p>
        <p className="mt-3 font-body text-lg leading-[1.7] text-paper/75">
          {brand.conditions}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <TextLink href="/apply" light>
            Egypt 2027 — Request an invitation
          </TextLink>
          <TextLink href="/philosophy" light className="decoration-paper/40">
            How this started
          </TextLink>
        </div>
      </CinematicHero>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          The company
        </p>
        <p className="mt-8 max-w-3xl font-body text-xl leading-[1.75] md:text-2xl">
          {brand.statement}
        </p>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-paper">
        <Image
          src={images.eclipseSky}
          alt="The sun during eclipse"
          fill
          className="object-cover opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="tracking-data text-[11px] uppercase text-paper/70">
            Egypt 2027
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl">
            {facts.totality} of totality at Luxor.
          </h2>
          <p className="mt-8 max-w-2xl font-body text-lg leading-[1.75] text-paper/80">
            {facts.totalityLand}.
          </p>
          <div className="mt-10">
            <TextLink href="/egypt-2027" light>
              The Egypt 2027 journey
            </TextLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          The six pillars
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
          Curate everything. Script nothing.
        </h2>
        <div className="mt-16 grid gap-px bg-stone md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.name} className="bg-paper p-8 md:p-10">
              <p className="tracking-data text-[11px] text-graphite">
                0{index + 1}
              </p>
              <h3 className="mt-6 font-display text-3xl uppercase">
                {pillar.name}
              </h3>
              <p className="mt-4 max-w-sm font-body text-graphite">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Who travels with us
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            Twenty-four seats. Three ways to arrive.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {travelers.map((unit) => (
              <article key={unit.slug} className="flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 font-display text-3xl">{unit.title}</h3>
                <p className="tracking-data mt-2 text-[11px] uppercase text-graphite">
                  {unit.mix}
                </p>
                <p className="mt-4 font-body text-sm leading-[1.75] text-graphite">
                  {unit.points[0]}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <TextLink href="/who-travels">How we hold the room</TextLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          Four founders
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl">
          Four questions. One journey.
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder) => (
            <article key={founder.name}>
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl">{founder.name}</h3>
              <p className="tracking-data mt-1 text-[11px] uppercase text-graphite">
                {founder.role} · {founder.discipline.split(" + ")[0]}
              </p>
              <p className="mt-3 font-display text-lg italic text-ink/80">
                “{founder.question}”
              </p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <TextLink href="/founders">Meet the founders</TextLink>
        </div>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden bg-ink text-paper">
        <Image
          src={images.mallorca}
          alt="Mallorca coastline at dusk"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 md:px-10">
          <p className="tracking-data text-[11px] uppercase text-paper/70">
            {spainTeaser.date} · {spainTeaser.place}
          </p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl">
            {spainTeaser.line}
          </h2>
          <div className="mt-10">
            <TextLink href="/journal/the-feeling-didnt" light>
              The Spain origin
            </TextLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="tracking-data text-[11px] uppercase text-graphite">
              Waitlist
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Egypt 2027 is the active run.
            </h2>
            <p className="mt-6 max-w-md font-body text-graphite">
              Leave your first name and email. If you already wrote to us, we
              will tell you. Next step: a 20-minute call, then an invitation.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
