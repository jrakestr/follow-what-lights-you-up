import { notFound } from "next/navigation";
import { CinematicHero } from "@/components/cinematic-hero";
import { TextLink } from "@/components/text-link";
import { journalPosts } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  return { title: post?.title ?? "Journal" };
}

export default async function JournalPostPage({ params }: Props) {
  const { slug } = await params;
  const post = journalPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="pb-32">
      <CinematicHero
        image={post.image}
        imageAlt={post.title}
        kicker={`${post.date} · ${post.place}`}
        title={post.title}
        minHeight="min-h-[70vh]"
      />
      <div className="mx-auto max-w-7xl px-6 pt-16 md:px-10">
        <div className="max-w-2xl space-y-8 font-body text-lg leading-[1.8]">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-8">
          <TextLink href="/journal">All field notes</TextLink>
          <TextLink href="/egypt-2027">Egypt 2027</TextLink>
        </div>
      </div>
    </article>
  );
}
