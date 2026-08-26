import Link from "next/link";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  className,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center text-[11px] uppercase tracking-[0.2em] underline-offset-[6px] transition-opacity hover:opacity-70",
        light
          ? "text-paper decoration-amber/80 underline"
          : "text-ink decoration-amber underline",
        className,
      )}
    >
      {children}
    </Link>
  );
}
