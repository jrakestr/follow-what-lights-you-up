import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { namedContact, travelers } from "@/lib/content";

export const metadata = {
  title: "Who travels",
};

export default function WhoTravelsPage() {
  return (
    <article className="pb-32">
      <PageIntro
        kicker="Who travels with us"
        title="Arrive on your own, as a pair, or as a group."
      >
        <p>
          A curated cohort of 24. Solos, couples, and self-formed groups share
          the boat. Adults 21 and over. We look for people who are interesting,
          interested, open, and present.
        </p>
      </PageIntro>

      <div className="mx-auto max-w-7xl space-y-28 px-6 md:px-10">
        {travelers.map((unit, index) => (
          <section
            key={unit.slug}
            className="grid items-start gap-12 lg:grid-cols-2"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <Image
                  src={unit.image}
                  alt={unit.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
            <div>
              <p className="tracking-data text-[11px] uppercase text-graphite">
                {unit.mix}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {unit.title}
              </h2>
              <ul className="mt-8 space-y-4 font-body text-lg leading-[1.75]">
                {unit.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="border-t border-stone pt-16">
          <h2 className="font-display text-4xl">How vetting works</h2>
          <div className="mt-8 max-w-2xl space-y-6 font-body text-lg leading-[1.8] text-graphite">
            <p>
              This is not an open booking engine. You apply. A founder reads
              it. If the mix is right, we schedule a 20-minute call within 48
              hours. Then an invitation. Then a $3,000 deposit.
            </p>
            <p>
              We look for people who are interesting, interested, open, and
              present. Couples and self-formed groups are part of the mix —
              alongside people who arrive alone.
            </p>
            <p>
              Roommate matching is an opt-in at the double rate. It closes the
              $3,400 gap without cutting the published price. We introduce
              matches before cabins are locked.
            </p>
            <p>{namedContact.line}</p>
          </div>
          <div className="mt-10">
            <TextLink href="/apply">Request an invitation</TextLink>
          </div>
        </section>
      </div>
    </article>
  );
}
