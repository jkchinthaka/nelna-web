import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPayloadClient } from "@/lib/payload";

export const metadata = {
  title: "Blog & News",
  description:
    "News, export updates, and insights from Nelna Mango. SEO-friendly listing and article pages (CMS-managed).",
};

const posts = [
  {
    slug: "export-quality-standards",
    title: "Export quality standards: what global buyers expect",
    excerpt:
      "A clear checklist-style overview of the controls that support trust and repeat procurement.",
    category: "Export",
    date: "2026-01-14",
  },
  {
    slug: "mango-handling-cold-chain",
    title: "Cold-chain handling: protecting freshness end-to-end",
    excerpt:
      "How disciplined handling preserves shelf-life and reduces losses in distribution.",
    category: "Logistics",
    date: "2026-01-10",
  },
  {
    slug: "sustainable-orchard-practices",
    title: "Sustainable orchard practices for long-term consistency",
    excerpt:
      "A premium supply chain starts at the orchard: soil health, timing, and planning.",
    category: "Sustainability",
    date: "2026-01-02",
  },
] as const;

export const revalidate = 60;

export default async function BlogPage() {
  const payload = await getPayloadClient();
  const res = await payload.find({
    collection: "posts",
    where: { type: { equals: "blog" } },
    sort: "-publishedOn",
    limit: 50,
  });

  const cmsPosts = (res.docs ?? []).map((doc: any) => ({
    slug: doc.slug as string,
    title: doc.title as string,
    excerpt: (doc.excerpt as string) || "",
    category: (doc.tags?.[0]?.tag as string) || "Blog",
    date: doc.publishedOn
      ? new Date(doc.publishedOn as string).toISOString().slice(0, 10)
      : "",
  }));

  const list = cmsPosts.length ? cmsPosts : posts;

  return (
    <div>
      <section className="bg-linear-to-br from-earth-50 via-background to-leaf-100/40">
        <Container className="py-14 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Blog"
              title="News, export insights, and updates"
              description="SEO-ready articles designed to build trust with international buyers and partners."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p: any, idx: number) => (
              <Reveal key={p.slug} delayMs={idx * 70}>
                <Card className="p-6">
                  <p className="text-xs font-semibold tracking-[0.22em] text-leaf-600 uppercase">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
                    <Link className="hover:underline" href={`/blog/${p.slug}`}>
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{p.excerpt}</p>
                  {p.date ? <p className="mt-4 text-xs text-muted">{p.date}</p> : null}
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
