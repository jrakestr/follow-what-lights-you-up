import { BrandMarkLink } from "@/components/brand-logo";

const links = [
  { href: "/philosophy", label: "Philosophy" },
  { href: "/follow-the-light", label: "Follow the Light" },
  { href: "/egypt-2027", label: "Egypt 2027" },
  { href: "/who-travels", label: "Who travels" },
  { href: "/founders", label: "Founders" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-[200] border-b border-stone bg-paper text-ink">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-3 md:px-10">
        <BrandMarkLink />

        <nav
          aria-label="Primary"
          className="flex min-w-0 flex-1 flex-wrap items-center justify-end gap-x-5 gap-y-2"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] uppercase tracking-[0.16em] text-ink hover:text-amber"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/apply"
            className="border border-ink px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-paper"
          >
            Request an invitation
          </a>
        </nav>
      </div>
    </header>
  );
}
