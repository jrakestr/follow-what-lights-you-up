import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-10 md:pt-24">
      {kicker ? (
        <p className="tracking-data text-[11px] uppercase text-graphite">
          {kicker}
        </p>
      ) : null}
      <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-8 max-w-2xl font-body text-lg text-graphite">
          {children}
        </div>
      ) : null}
    </div>
  );
}
