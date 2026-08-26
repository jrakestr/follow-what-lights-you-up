import { PageIntro } from "@/components/page-intro";
import { TextLink } from "@/components/text-link";
import { brand, philosophy } from "@/lib/content";

export const metadata = {
  title: "Philosophy",
};

export default function PhilosophyPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="In pursuit of aliveness" title={philosophy.kicker}>
        <p>{brand.curate}</p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl space-y-8 font-body text-lg leading-[1.8]">
          {philosophy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-16">
          <TextLink href="/egypt-2027">Egypt 2027 — Request an invitation</TextLink>
        </div>
      </div>
    </article>
  );
}
