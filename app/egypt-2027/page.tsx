import Image from "next/image";
import Link from "next/link";
import { CinematicHero } from "@/components/cinematic-hero";
import { StickyDock } from "@/components/sticky-dock";
import { TextLink } from "@/components/text-link";
import { formatUsd } from "@/lib/capture";
import {
  addOns,
  buyout,
  days,
  exclusions,
  facts,
  inclusions,
  namedContact,
  openDecisions,
  payment,
  rates,
} from "@/lib/content";
import { images } from "@/lib/images";
import { inventory } from "@/lib/inventory";

export const metadata = {
  title: "Egypt 2027",
};

export default function EgyptPage() {
  return (
    <>
      <CinematicHero
        image={images.luxorColumns}
        imageAlt="Temple columns at Luxor"
        kicker="August 2, 2027 · 7 nights · 24 guests maximum"
        title="Cairo, the Nile, Luxor."
      >
        <p className="tracking-data text-sm text-paper/80">From $14,500</p>
        <p className="mt-4 max-w-xl font-body text-lg leading-[1.7] text-paper/85">
          Totality at Luxor runs about {facts.totality} — {facts.totalityLand}.
        </p>
        <div className="mt-10 flex flex-wrap gap-8">
          <TextLink href="/apply" light>
            Request an invitation
          </TextLink>
          <TextLink href="/who-travels" light className="decoration-paper/40">
            Who travels
          </TextLink>
        </div>
      </CinematicHero>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="tracking-data text-[11px] uppercase text-graphite">
              Honest scarcity
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              {inventory.remainingPlaces} places remaining.
            </h2>
          </div>
          <p className="tracking-data max-w-sm text-xs text-graphite">
            {inventory.confirmedDeposits} confirmed deposits · {inventory.maxGuests}{" "}
            maximum · verified {inventory.lastVerified}
          </p>
        </div>
        <p className="mt-4 max-w-xl font-body text-sm text-graphite">
          {inventory.note}
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {inventory.tiers.map((tier) => (
            <div key={tier.id} className="border border-stone p-6">
              <p className="text-sm">{tier.name}</p>
              <p className="tracking-data mt-4 text-3xl">
                {tier.remaining}
                <span className="text-sm text-graphite"> / {tier.capacity}</span>
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-graphite">
                remaining
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone bg-stone/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Seven days
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            The emotional arc.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {days.map((item) => (
              <article key={item.day} className="flex min-h-[22rem] flex-col border border-stone bg-paper p-8">
                <p className="tracking-data text-[11px] uppercase text-graphite">
                  Day {item.day}
                </p>
                <h3 className="mt-6 font-display text-3xl">{item.verb}</h3>
                <p className="mt-3 font-display text-xl italic text-ink/80">
                  “{item.line}”
                </p>
                <p className="mt-6 font-body text-sm leading-[1.75] text-graphite">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[3/4] overflow-hidden bg-stone">
            <Image
              src={images.cabin}
              alt="A quiet cabin interior"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        <div className="lg:py-8">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Where you sleep
          </p>
          <h2 className="mt-3 font-display text-4xl">A chartered dahabiya.</h2>
          <p className="mt-6 max-w-md font-body leading-[1.8] text-graphite">
            Twelve to fourteen cabins on a private Nile sailing vessel. Not a
            mass-market ship. Adjacent cabins for groups. Cabin quality is a
            first-order decision — especially for couples.
          </p>
          <p className="mt-4 max-w-md font-body leading-[1.8] text-graphite">
            Cairo is five-star, two nights at the edges of the river chapter.
            The boat is the house.
          </p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="bg-ink px-6 py-24 text-paper md:px-10 md:py-32 lg:px-16">
          <p className="tracking-data text-[11px] uppercase text-paper/50">
            The table
          </p>
          <h2 className="mt-3 font-display text-4xl">Gather is a pillar.</h2>
          <p className="mt-6 max-w-md font-body leading-[1.8] text-paper/75">
            Chef collaborations. Local culinary storytelling. Private dining
            that makes the table part of the journey — not a buffet between
            temples.
          </p>
        </div>
        <div className="relative min-h-[28rem]">
          <Image
            src={images.tableNight}
            alt="A long table at night"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[28rem] order-2 lg:order-1">
          <Image
            src={images.musicNight}
            alt="Intimate live music"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="order-1 bg-paper px-6 py-24 md:px-10 md:py-32 lg:order-2 lg:px-16">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Day 6
          </p>
          <h2 className="mt-3 font-display text-4xl">The Afterglow.</h2>
          <p className="mt-6 max-w-md font-body leading-[1.8] text-graphite">
            An intimate musical experience in partnership with FaceSoul. Music
            deepens the arc. It does not turn the trip into a retreat. Talent
            status is stated in the open decisions below until the contract is
            signed.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          Witness
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">
          Totality viewing protocols.
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              t: "Prime location",
              b: "The named site will be locked on this page once finalized. Until then: a prime viewing location, held for 24 people.",
            },
            {
              t: "Zero competing programming",
              b: "No speeches, no playlist, no itinerary. Witness is a pillar because nothing is allowed to compete with the sky.",
            },
            {
              t: "The sky does not refund",
              b: "Weather and cloud cover do not entitle a refund. We protect the hour. We cannot command the weather.",
            },
          ].map((item) => (
            <article key={item.t} className="border-t border-stone pt-6">
              <h3 className="font-display text-2xl">{item.t}</h3>
              <p className="mt-4 font-body text-sm leading-[1.75] text-graphite">
                {item.b}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-stone bg-stone/30">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="tracking-data text-[11px] uppercase text-graphite">
            Land and river only · airfare excluded
          </p>
          <h2 className="mt-3 font-display text-4xl">The rate card.</h2>
          <div className="mt-12 divide-y divide-stone border border-stone bg-paper">
            {rates.map((rate) => (
              <div
                key={`${rate.name}-${rate.occupancy}`}
                className="grid gap-2 px-6 py-6 md:grid-cols-12 md:items-baseline"
              >
                <div className="md:col-span-4">
                  <p className="font-display text-2xl">{rate.name}</p>
                  <p className="text-sm text-graphite">{rate.occupancy}</p>
                </div>
                <p className="tracking-data md:col-span-3">
                  {formatUsd(rate.price)}
                  <span className="text-graphite"> pp</span>
                </p>
                <p className="text-sm text-graphite md:col-span-5">{rate.note}</p>
              </div>
            ))}
            <div className="grid gap-2 px-6 py-6 md:grid-cols-12">
              <p className="font-display text-2xl md:col-span-4">{buyout.label}</p>
              <p className="tracking-data md:col-span-3">{buyout.range}</p>
              <p className="text-sm text-graphite md:col-span-5">{buyout.note}</p>
            </div>
          </div>

          <h3 className="mt-16 font-display text-3xl">Payment schedule</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {payment.map((item) => (
              <div key={item.when} className="border border-stone bg-paper p-6">
                <p className="tracking-data text-[11px] uppercase text-graphite">
                  {item.when}
                </p>
                <p className="mt-4 font-display text-3xl">{item.amount}</p>
                <p className="mt-2 text-sm text-graphite">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-graphite">
            Travel insurance is a condition of booking. No couple discounts —
            cabin upgrade at cost instead. Twelve paid guests earn a $3,000
            organizer credit.
          </p>

          <h3 className="mt-16 font-display text-3xl">Add-ons</h3>
          <ul className="mt-6 divide-y divide-stone border-y border-stone">
            {addOns.map((item) => (
              <li
                key={item.name}
                className="flex flex-wrap items-baseline justify-between gap-4 py-4"
              >
                <span>
                  {item.name}
                  <span className="text-graphite"> · {item.detail}</span>
                </span>
                <span className="tracking-data text-sm">
                  {item.price === 0 ? "Included" : `${formatUsd(item.price)} pp`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <h2 className="font-display text-4xl">Included. Not included.</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="tracking-data text-[11px] uppercase text-graphite">
              Inclusions
            </p>
            <ul className="mt-6 space-y-3">
              {inclusions.map((item) => (
                <li key={item} className="flex gap-3 font-body">
                  <span className="text-amber">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="tracking-data text-[11px] uppercase text-graphite">
              Exclusions
            </p>
            <ul className="mt-6 space-y-3">
              {exclusions.map((item) => (
                <li key={item} className="flex gap-3 font-body text-graphite">
                  <span>—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="tracking-data text-[11px] uppercase text-paper/50">
            Practical realities
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            Luxor in early August is {facts.heat}.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <p className="font-body leading-[1.8] text-paper/75">
              Moderate physical demand. Uneven ground at temple sites. Early
              mornings. We disclose the heat so the wrong buyer does not arrive
              surprised.
            </p>
            <p className="font-body leading-[1.8] text-paper/75">
              Egypt visa is yours. International air is yours. Travel insurance
              is mandatory and named as a condition of booking.
            </p>
            <p className="font-body leading-[1.8] text-paper/75">
              {namedContact.line}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <p className="tracking-data text-[11px] uppercase text-graphite">
          Still deciding
        </p>
        <h2 className="mt-3 font-display text-4xl">Open decisions, held in public.</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {openDecisions.map((item) => (
            <article key={item.title} className="border-t border-stone pt-6">
              <h3 className="font-display text-2xl">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-[1.75] text-graphite">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-8 pb-16 md:pb-0">
          <Link
            href="/apply"
            className="border border-ink bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-paper"
          >
            Request an invitation
          </Link>
          <TextLink href="/booking-terms">Booking conditions</TextLink>
        </div>
      </section>

      <StickyDock />
    </>
  );
}
