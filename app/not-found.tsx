import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <p className="tracking-data text-[11px] uppercase text-graphite">404</p>
      <h1 className="mt-4 font-display text-5xl">This page is not on the path.</h1>
      <p className="mt-6 max-w-md font-body text-graphite">
        Return home, or go directly to Egypt 2027.
      </p>
      <div className="mt-10 flex gap-8">
        <TextLink href="/">Home</TextLink>
        <TextLink href="/egypt-2027">Egypt 2027</TextLink>
      </div>
    </div>
  );
}
