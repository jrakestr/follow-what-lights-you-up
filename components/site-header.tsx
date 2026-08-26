"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BrandMarkLink } from "@/components/brand-logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <header className="sticky top-0 z-[200] border-b border-stone bg-paper text-ink">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        <BrandMarkLink />

        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            className="hidden border border-ink px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-paper sm:inline-flex"
          >
            Request an invitation
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="border border-ink px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-ink hover:bg-ink hover:text-paper"
              aria-label="Open menu"
            >
              Menu
            </SheetTrigger>
            <SheetContent
              side="right"
              className="z-[300] rounded-none border-stone bg-paper p-0 shadow-none"
            >
              <SheetHeader className="border-b border-stone px-6 py-5">
                <SheetTitle className="font-display text-2xl tracking-[-0.035em] text-ink">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Primary" className="flex flex-col px-6 py-6">
                {links.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => go(link.href)}
                    className="border-b border-stone py-4 text-left text-[13px] uppercase tracking-[0.16em] text-ink hover:text-amber"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => go("/apply")}
                  className="mt-8 inline-flex justify-center border border-ink bg-ink px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-paper hover:bg-ink/90"
                >
                  Request an invitation
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
