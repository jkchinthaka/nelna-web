import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const posts = new Map([
  [
    "export-quality-standards",
    {
      title: "Export quality standards: what global buyers expect",
      category: "Export",
      date: "2026-01-14",
      readingTime: "5 min",
    },
  ],
  [
    "mango-handling-cold-chain",
    {
      title: "Cold-chain handling: protecting freshness end-to-end",
      category: "Logistics",
      date: "2026-01-10",
      readingTime: "4 min",
    },
  ],
  [
    "sustainable-orchard-practices",
    {
      title: "Sustainable orchard practices for long-term consistency",
      category: "Sustainability",
      date: "2026-01-02",
      readingTime: "6 min",
    },
  ],
]);

export function generateStaticParams() {
  return Array.from(posts.keys()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.get(slug);
  if (!post) return {};

  return {
    title: post.title,
    description:
      "SEO-ready article content (CMS-driven later). Nelna Mango export and quality insights.",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.get(slug);
  if (!post) notFound();

  return (
    <div>
      <Container className="py-14 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] text-leaf-600 uppercase">
            {post.category}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {post.date} • {post.readingTime}
          </p>

          <Card className="mt-10 p-8">
            <div className="prose prose-zinc max-w-none">
              <p>
                This is placeholder copy to establish the article layout. In the
                CMS step, this becomes a rich-text field with headings,
                structured sections, and internal links.
              </p>
              <h2>What buyers look for</h2>
              <ul>
                <li>Consistent grading and packing specs</li>
                <li>Clear compliance documentation</li>
                <li>Reliable communication and lead times</li>
              </ul>
              <h2>How Nelna Mango supports consistency</h2>
              <p>
                We align orchard planning, post-harvest handling, and logistics
                coordination to reduce variance and protect quality.
              </p>
            </div>
          </Card>

          <div className="mt-8">
            <Link className="text-sm font-medium underline" href="/blog">
              Back to Blog
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
