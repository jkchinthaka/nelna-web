import Link from "next/link";
import { notFound } from "next/navigation";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const posts = new Map([
  ["mango-lassi", { title: "Mango Lassi (export-grade sweetness)" }],
  ["mango-nutrition", { title: "Health benefits of mangoes" }],
  ["storage-tips", { title: "Storage tips for best freshness" }],
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
      "SEO-ready content (CMS-driven later). Recipes, benefits, and tips from Nelna Mango.",
  };
}

export default async function RecipePostPage({
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
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            {post.title}
          </h1>

          <Card className="mt-10 p-8">
            <div className="prose prose-zinc max-w-none">
              <p>
                Placeholder content for the recipe/tips layout. In the CMS step,
                this becomes structured rich content with images and SEO fields.
              </p>
              <h2>Ingredients</h2>
              <ul>
                <li>Fresh mango</li>
                <li>Yogurt</li>
                <li>Optional sweetener</li>
              </ul>
              <h2>Method</h2>
              <ol>
                <li>Prepare mango and blend</li>
                <li>Adjust texture and sweetness</li>
                <li>Serve chilled</li>
              </ol>
            </div>
          </Card>

          <div className="mt-8">
            <Link className="text-sm font-medium underline" href="/recipes">
              Back to Mango Magic
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
