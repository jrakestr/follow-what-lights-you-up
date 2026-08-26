import Link from "next/link";
import { inventory } from "@/lib/inventory";

export function StickyDock({
  remaining = inventory.remainingPlaces,
}: {
  remaining?: number;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone bg-paper/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="tracking-data text-[10px] uppercase text-graphite">
            Egypt 2027 · from $14,500
          </p>
          <p className="text-sm">
            {remaining} places remaining · 24 maximum
          </p>
        </div>
        <Link
          href="/apply"
          className="border border-ink bg-ink px-4 py-2 text-[10px] uppercase tracking-[0.18em] text-paper"
        >
          Request
        </Link>
      </div>
    </div>
  );
}
