import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, FadeInStagger, StaggerItem, FloatingElement } from "@/components/ui/Motion";
import { TiltCard } from "@/components/ui/Interactive";
import { ArrowRight, Clock, Users, ChefHat, Sparkles } from "lucide-react";

export const metadata = {
  title: "Mango Magic",
  description:
    "Recipes, health benefits, and tips — SEO-focused content to increase time-on-site (CMS-managed).",
};

const posts = [
  {
    slug: "mango-lassi",
    title: "The Classic Sri Lankan Mango Lassi",
    excerpt:
      "A rich, creamy blend of Karthakolomban mango and buffalo curd. Perfect for cooling down on a tropical afternoon.",
    category: "Drink",
    time: "10 min",
    serves: "2",
    image: "/mango-card.svg",
    recommendedVariety: "Karthakolomban"
  },
  {
    slug: "mango-chutney",
    title: "Spicy & Sweet Mango Chutney",
    excerpt:
      "A traditional condiment that pairs perfectly with rice and curry. Tastes best when aged for at least two weeks.",
    category: "Preserve",
    time: "45 min",
    serves: "10+",
    image: "/gallery-tile.svg",
    recommendedVariety: "Ambalavi"
  },
  {
    slug: "mango-salad",
    title: "Green Mango Salad with Chili",
    excerpt:
      "Crunchy, sour, and spicy. This raw mango salad hits every taste bud with an explosion of island flavors.",
    category: "Salad",
    time: "15 min",
    serves: "4",
    image: "/hero-mango.svg",
    recommendedVariety: "Willard (Green)"
  },
] as const;

export default function RecipesPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-linear-to-b from-mango-50 via-background to-white pb-20">
        <FloatingElement className="absolute top-20 -right-25 opacity-20 pointer-events-none">
          <ChefHat className="size-96 text-mango-300 rotate-12" />
        </FloatingElement>

        <Container className="py-20 lg:py-24 relative z-10">
          <FadeIn>
            <SectionHeading
              eyebrow="Culinary Inspiration"
              title="Taste the Island Life"
              description="From traditional Sri Lankan curries to refreshing modern smoothies, discover how to use our premium mangoes in your kitchen."
            />
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <StaggerItem key={p.slug} className="h-full">
                <Link href={`/recipes/${p.slug}`} className="block h-full cursor-pointer group">
                  <TiltCard className="h-full flex flex-col bg-white hover:ring-mango-200 hover:shadow-mango-500/10 transition-all">
                    {/* Image Header */}
                    <div className="relative aspect-4/3 overflow-hidden bg-earth-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-mango-700 shadow-sm">
                          {p.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted mb-3">
                        <span className="flex items-center gap-1"><Clock className="size-3" /> {p.time}</span>
                        <span className="flex items-center gap-1"><Users className="size-3" /> {p.serves}</span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-mango-600 transition-colors">
                        {p.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-muted mb-6 line-clamp-3">
                        {p.excerpt}
                      </p>

                      <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-leaf-600 font-medium bg-leaf-50 px-2 py-1 rounded-md">
                          <Sparkles className="size-3" /> Best with {p.recommendedVariety}
                        </div>
                        <div className="size-8 rounded-full bg-earth-100 flex items-center justify-center text-foreground group-hover:bg-mango-500 group-hover:text-white transition-colors">
                          <ArrowRight className="size-4" />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 bg-earth-50">
        <Container>
          <FadeIn className="bg-mango-500 rounded-5xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/gallery-tile.svg')] opacity-10 bg-cover mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <ChefHat className="size-12 text-black/20 mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                Exporting to the Hospitality Industry?
              </h2>
              <p className="text-black/70 text-lg mb-8">
                We provide specialized bulk packaging and ripeness-staged delivery for hotels, restaurants, and catering services.
              </p>
              <Link
                href="/contact#inquiry"
                className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-black text-white font-medium hover:bg-black/80 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Request HORECA Catalog
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
