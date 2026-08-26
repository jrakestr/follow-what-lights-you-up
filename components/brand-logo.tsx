import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandMarkLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "relative z-10 block h-12 w-40 shrink-0 overflow-hidden lg:h-14 lg:w-48",
        className,
      )}
    >
      <Image
        src="/brand/logo.png"
        alt="Follow What Lights You Up"
        width={320}
        height={184}
        className="h-full w-full object-contain object-left"
        priority
      />
    </Link>
  );
}
