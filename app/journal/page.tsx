import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { journalPosts } from "@/lib/content";

export const metadata = {
  title: "Journal",
};

export default function JournalPage() {
  return (
    <article className="pb-32">
      <PageIntro kicker="Field notes" title="Three notes to begin with.">
        <p>
          An editorial engine, not a blog. Spain. Totality. Heat. The rest of
          the journal will be written on the water.
        </p>
      </PageIntro>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {journalPosts.map((post) => (
            <Link key={post.slug} href={`/journal/${post.slug}`} className="group">
              <article>
                <div className="relative aspect-[3/4] overflow-hidden bg-stone">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <p className="tracking-data mt-5 text-[11px] uppercase text-graphite">
                  {post.date} · {post.place}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-tight group-hover:opacity-70">
                  {post.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-[1.75] text-graphite">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
