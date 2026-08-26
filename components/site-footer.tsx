import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist-form";
import { brand } from "@/lib/content";

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
    <footer className="border-t border-stone bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl leading-[1.1] tracking-[-0.035em] md:text-4xl">
            {brand.sameSun}
          </p>
          <p className="mt-6 max-w-md text-sm leading-[1.75] text-paper/70">
            Invite-only journeys around extraordinary celestial events. Adults
            21 and over. Maximum 24 guests.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
            Journey
          </p>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-paper/80 transition-opacity hover:opacity-70"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50">
            Waitlist
          </p>
          <p className="mt-5 text-sm leading-[1.75] text-paper/70">
            Egypt 2027 is the active run. Leave your name. We will tell you when
            invitations open.
          </p>
          <div className="mt-6">
            <WaitlistForm tone="dark" />
          </div>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.14em] text-paper/45 md:flex-row md:flex-wrap md:items-center md:justify-between md:px-10">
          <p>CST No. X · Fla. Seller of Travel Reg. No. X</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/terms" className="hover:text-paper">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/booking-terms" className="hover:text-paper">
              Booking conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
