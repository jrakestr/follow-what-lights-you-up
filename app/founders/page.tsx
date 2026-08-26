import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { founders } from "@/lib/content";

export const metadata = {
  title: "Founders",
};

export default function FoundersPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="The four of us" title="Four founders. Four questions.">
        <p>
          Spain was the origin. Egypt is year one. Follow the Light is the
          company. Each of us owns one question, and none of us own the guest.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-2">
          {founders.map((founder) => (
            <article key={founder.name} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <p className="tracking-data mt-6 text-[11px] uppercase text-graphite">
                {founder.role}
              </p>
              <h2 className="mt-2 font-display text-4xl">{founder.name}</h2>
              <p className="mt-2 text-sm text-graphite">{founder.discipline}</p>
              <p className="mt-6 font-display text-2xl italic">
                “{founder.question}”
              </p>
              <p className="mt-4 max-w-md font-body leading-[1.75] text-graphite">
                {founder.bio}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-20">
          <TextLink href="/apply">Speak with us about Egypt 2027</TextLink>
        </div>
      </div>
    </article>
  );
}
