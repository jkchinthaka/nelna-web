import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, FadeInStagger, StaggerItem, FloatingBlob } from "@/components/ui/Motion";
import { TiltCard, FlavorProfile } from "@/components/ui/Interactive";
import { CheckCircle2, Package, ThermometerSun } from "lucide-react";

export const metadata = {
  title: "Products",
  description:
    "Explore Nelna Mango varieties, nutritional benefits, and packaging formats. Informational only (no pricing, no ordering).",
};

const varieties = [
  {
    name: "Karthakolomban",
    tagline: "The King of Sri Lankan Mangoes",
    description:
      "A premium Sri Lankan variety known for its distinctive aroma, smooth melting texture, and perfectly balanced sweetness. Ideal for fresh consumption.",
    specs: {
      sweetness: 9,
      fiber: 3,
      shelfLife: 7,
      acidity: 4,
    },
    packaging: ["5kg Carton", "Wooden Crate"],
  },
  {
    name: "Willard",
    tagline: "Vibrant Color & Flavor",
    description:
      "Recognized by its reddish blush when ripe. Willard offers a unique tangy-sweet flavor profile with strong shelf appeal for retail displays.",
    specs: {
      sweetness: 8,
      fiber: 4,
      shelfLife: 9,
      acidity: 6,
    },
    packaging: ["Corrugated Box", "Bulk Pack"],
  },
  {
    name: "Ambalavi",
    tagline: "Exotic & Distinctive",
    description:
      "A large, robust mango with a unique taste and high pulp content. Perfect for processing and specialty markets seeking something different.",
    specs: {
      sweetness: 7,
      fiber: 6,
      shelfLife: 10,
      acidity: 5,
    },
    packaging: ["Export Carton", "Food Service"],
  },
] as const;

export default function ProductsPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-earth-50 via-background to-mango-50/60 py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingBlob color="bg-mango-300" className="top-0 right-0 opacity-20 size-125" delay={0} />
          <FloatingBlob color="bg-leaf-300" className="bottom-0 left-0 opacity-20 size-100" delay={2} />
        </div>

        <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Collection"
              title="Exquisite varieties, tailored for export"
              description="Discover the unique profiles of Sri Lanka's finest mangoes. Each variety is harvested at optimal maturity to ensure peak flavor upon arrival."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/contact#inquiry" size="lg" className="shadow-lg shadow-mango-500/20">
                Check Availability
              </ButtonLink>
              <ButtonLink href="/export" variant="secondary" size="lg">
                View Export Specs
              </ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden bg-white/40 ring-1 ring-black/5 shadow-2xl backdrop-blur-xl p-2">
              <div className="absolute inset-0 bg-linear-to-br from-mango-100/50 to-transparent" />
              <Image
                src="/mango-card.svg"
                alt="Mango illustration"
                fill
                className="object-contain p-8 drop-shadow-2xl"
                priority
              />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-leaf-700 shadow-sm ring-1 ring-leaf-100">
                Export Grade A
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Varieties Grid */}
      <section className="py-24">
        <Container>
          <FadeInStagger className="grid gap-12 lg:grid-cols-3">
            {varieties.map((v, idx) => (
              <StaggerItem key={v.name} className="h-full">
                <TiltCard className="h-full flex flex-col">
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden bg-linear-to-b from-mango-50 to-white/0 p-6 flex items-center justify-center">
                    <div className="absolute top-4 left-4 z-10">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                        {v.name}
                      </h3>
                      <p className="text-xs font-medium text-mango-600 uppercase tracking-widest mt-1">
                        {v.tagline}
                      </p>
                    </div>
                    <Image
                      src="/mango-card.svg"
                      alt={v.name}
                      width={200}
                      height={200}
                      className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col bg-white/50 backdrop-blur-sm">
                    <p className="text-sm leading-relaxed text-muted mb-6">
                      {v.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <FlavorProfile label="Sweetness" value={v.specs.sweetness} />
                      <FlavorProfile label="Fiber Content" value={v.specs.fiber} color="bg-leaf-500" />
                      <FlavorProfile label="Shelf Life" value={v.specs.shelfLife} color="bg-orange-400" />
                    </div>

                    <div className="mt-auto pt-6 border-t border-border/50">
                      <p className="text-xs font-semibold text-muted mb-3 flex items-center gap-2">
                        <Package className="size-3" /> Packaging Options
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {v.packaging.map((p) => (
                          <span key={p} className="text-[10px] uppercase font-bold px-2 py-1 bg-surface-2 rounded-md text-foreground/70 ring-1 ring-black/5">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Specs / Call to Action */}
      <section className="py-24 bg-foreground text-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="font-display text-4xl font-semibold tracking-tight text-white mb-6">
                Need specific packaging or ripeness levels?
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                We understand that different markets require different specs.
                From supermarket-ready clam shells to bulk food-service crates,
                we customize our packing to fit your logistics chain.
              </p>
              <ButtonLink href="/contact#inquiry" className="bg-mango-500 text-black border-none hover:bg-mango-400">
                Start a Custom Inquiry
              </ButtonLink>
            </FadeIn>

            <FadeInStagger className="grid gap-6">
              {[
                { title: "Brix Levels", desc: "Harvested at >= 10° Brix for optimal ripening.", icon: ThermometerSun },
                { title: "Size Grading", desc: "Automated weight sizing (250g - 600g).", icon: Package },
                { title: "Defect Free", desc: "Strict manual sorting for visible skin defects.", icon: CheckCircle2 },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <div className="p-2 bg-white/10 rounded-lg text-mango-400">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{item.title}</h4>
                      <p className="text-sm text-white/50 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </Container>
      </section>
    </div>
  );
}
