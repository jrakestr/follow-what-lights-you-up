import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { brand } from "@/lib/content";
import { images } from "@/lib/images";

const footerLinks = [
  { href: "/egypt-2027", label: "Egypt 2027" },
  { href: "/follow-the-light", label: "Follow the Light" },
  { href: "/who-travels", label: "Who travels" },
  { href: "/apply", label: "Apply" },
  { href: "/faq", label: "FAQ" },
  { href: "/journal", label: "Journal" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/10 bg-ink text-paper">
      {/* Cinematic Horizon Backdrop */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Image
          src={images.footerHorizon}
          alt="Nile river horizon at twilight"
          fill
          className="object-cover object-bottom opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
        {/* Brand Manifesto & Eyebrow */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3.5 py-1 text-[10px] uppercase tracking-[0.2em] text-paper/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              Flagship Totality
            </div>
            <p className="mt-8 font-display text-4xl leading-[1.08] tracking-[-0.035em] text-paper md:text-5xl">
              {brand.sameSun}
            </p>
            <p className="mt-6 max-w-md font-body text-base leading-[1.75] text-paper/70">
              Invite-only journeys around extraordinary celestial events. Adults 21
              and over. Maximum 24 guests.
            </p>
          </div>

          <div className="mt-12 hidden md:block">
            <p className="tracking-data text-[11px] uppercase text-paper/40">
              Inaugural Departure: August 2, 2027 · Luxor, Egypt
            </p>
          </div>
        </div>

        {/* Staggered Navigation Array */}
        <div className="md:col-span-3">
          <p className="tracking-data text-[11px] uppercase text-paper/50">
            Journey
          </p>
          <ul className="mt-6 space-y-4">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-2 text-sm text-paper/80 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-amber"
                >
                  <span className="h-px w-0 bg-amber transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-3" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Double-Bezel Waitlist Chamber */}
        <div className="md:col-span-4">
          <div className="rounded-[1.75rem] bg-paper/[0.04] p-2 ring-1 ring-paper/15 backdrop-blur-md">
            <div className="rounded-[calc(1.75rem-0.5rem)] bg-ink/90 p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)] md:p-8">
              <div className="flex items-center justify-between">
                <p className="tracking-data text-[11px] uppercase text-paper/60">
                  Priority Waitlist
                </p>
                <span className="tracking-data text-[10px] uppercase text-amber">
                  Egypt 2027
                </span>
              </div>
              <p className="mt-3 font-body text-sm leading-[1.7] text-paper/75">
                Egypt 2027 is the active run. Leave your name. We will tell you when
                invitations open.
              </p>
              <div className="mt-6">
                <WaitlistForm tone="dark" compact />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Legal / Meta Bar */}
      <div className="relative z-10 border-t border-paper/10 bg-ink/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-[11px] uppercase tracking-[0.14em] text-paper/50 md:flex-row md:flex-wrap md:items-center md:justify-between md:px-10">
          <p className="tracking-data">
            CST No. 2149823-50 · Fla. Seller of Travel Reg. No. ST42918
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-paper"
            >
              Terms
            </Link>
            <span className="text-paper/20">/</span>
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-paper"
            >
              Privacy
            </Link>
            <span className="text-paper/20">/</span>
            <Link
              href="/booking-terms"
              className="transition-colors duration-200 hover:text-paper"
            >
              Booking conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
