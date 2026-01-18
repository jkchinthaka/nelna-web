import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  FadeInStagger,
  StaggerItem,
  FloatingBlob,
  ScaleOnHover,
  FloatingElement
} from "@/components/ui/Motion";
import { ScrollStory } from "@/components/ui/ScrollStory";
import { ArrowRight, CheckCircle2, Leaf, Globe2, Truck, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-mango-50 via-earth-50 to-leaf-100 min-h-[90vh] flex items-center">
        {/* Animated Background Blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <FloatingBlob
            color="bg-mango-200"
            className="-top-24 -right-30 size-105"
            delay={0}
          />
          <FloatingBlob
            color="bg-leaf-200"
            className="-bottom-24 -left-30 size-115"
            delay={2}
          />
          <FloatingBlob
            color="bg-earth-200"
            className="top-1/2 left-1/2 size-96 -translate-x-1/2 -translate-y-1/2 opacity-30"
            delay={1}
          />
        </div>

        <Container className="relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
          <FadeInStagger>
            <StaggerItem>
              <p className="inline-flex items-center gap-2 rounded-full bg-surface/70 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-leaf-600 ring-1 ring-border backdrop-blur">
                SRI LANKA • EXPORT-GRADE • PREMIUM
              </p>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]">
                Exquisite <span className="text-mango-600">Mangoes</span> for<br />
                the <span className="italic text-foreground/80">Global Market</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Nelna Mango cultivates the finest varieties in Sri Lanka, focusing on
                consistent quality, sustainable farming, and reliable cold-chain logistics
                for international buyers.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/contact#inquiry" variant="primary" size="lg" className="shadow-lg shadow-mango-500/20">
                  Start Export Inquiry
                </ButtonLink>
                <ButtonLink href="/contact" variant="ghost" size="lg" className="group">
                  Contact Us <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </ButtonLink>
              </div>
            </StaggerItem>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Quality Assurance", value: "Export Ready", icon: Award },
                { label: "Cold Chain", value: "Logistics", icon: Truck },
                { label: "Sustainability", value: "Farm-to-Port", icon: Leaf },
              ].map((kpi) => (
                <StaggerItem key={kpi.label}>
                  <ScaleOnHover>
                    <Card className="p-4 bg-surface/60 backdrop-blur border-none shadow-sm ring-1 ring-black/5">
                      <kpi.icon className="size-5 text-mango-600 mb-2 opacity-80" />
                      <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                        {kpi.label}
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold tracking-tight">
                        {kpi.value}
                      </p>
                    </Card>
                  </ScaleOnHover>
                </StaggerItem>
              ))}
            </div>
          </FadeInStagger>

          <FadeIn delay={0.3} className="relative z-10 lg:ml-auto">
            <div className="relative rounded-5xl bg-surface/40 p-3 ring-1 ring-white/50 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-4xl bg-white aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 lg:w-100">
                <Image
                  src="/home-hero.jpg"
                  alt="Nelna Farm Premium Mangoes"
                  fill
                  className="object-cover transition-transform duration-[20s] ease-linear hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe2 className="size-5 text-mango-400" />
                    <span className="text-sm font-semibold tracking-widest uppercase">Global Reach</span>
                  </div>
                  <p className="text-2xl font-display font-medium leading-tight">
                    Delivering the taste of Sri Lanka to the world.
                  </p>
                </div>
              </div>

              {/* Float Card */}
              <FloatingElement
                className="absolute -bottom-6 -left-6 max-w-60 rounded-2xl bg-surface p-5 shadow-xl ring-1 ring-black/5"
              >
                <p className="text-sm font-medium text-foreground mb-3">
                  Why choose Nelna?
                </p>
                <ul className="grid gap-2 text-xs text-muted">
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-4 text-leaf-500 shrink-0" />
                    Variety-specific packing
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-4 text-leaf-500 shrink-0" />
                    Full export compliance
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="size-4 text-leaf-500 shrink-0" />
                    Seamless communication
                  </li>
                </ul>
                <Link
                  href="/export"
                  className="mt-3 block text-xs font-semibold text-mango-600 hover:text-mango-700 hover:underline"
                >
                  View workflow →
                </Link>
              </FloatingElement>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Why Nelna Section */}
      <section className="py-24">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Why Nelna"
              title="Export-grade quality, done professionally"
              description="A premium, corporate-grade supply partner focused on consistency, safety, and long-term relationships."
            />
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Premium Quality",
                desc: "Careful harvesting, grading, and handling to protect freshness and shelf-life.",
                icon: Award,
              },
              {
                title: "Sustainable Farming",
                desc: "Responsible practices that protect soil health and orchard productivity.",
                icon: Leaf,
              },
              {
                title: "Export Standards",
                desc: "Compliance-minded processes and documentation readiness for global buyers.",
                icon: Globe2,
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <ScaleOnHover className="h-full">
                  <Card className="p-8 h-full bg-surface-50 hover:bg-surface border border-transparent hover:border-border transition-colors shadow-none hover:shadow-xl hover:shadow-black/5">
                    <div className="size-12 rounded-2xl bg-mango-50 text-mango-600 flex items-center justify-center mb-6 ring-1 ring-mango-100">
                      <item.icon className="size-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {item.desc}
                    </p>
                  </Card>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Varieties Section */}
      <section className="py-24 bg-earth-50/50">
        <Container>
          <FadeIn>
            <SectionHeading
              eyebrow="Varieties"
              title="Featured mango varieties"
              description="Informational product profiles designed for procurement and distribution conversations."
            />
          </FadeIn>

          <FadeInStagger className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {["Karthakolomban", "Willard", "Ambalavi"].map((name, idx) => (
              <StaggerItem key={name}>
                <ScaleOnHover>
                  <Link href="/products" className="group block h-full">
                    <Card className="overflow-hidden h-full border-0 shadow-lg shadow-black/5 ring-1 ring-black/5">
                      <div className="relative h-64 overflow-hidden bg-linear-to-br from-mango-100 via-earth-50 to-leaf-100">
                        <Image
                          src="/mango-card.svg"
                          alt="Mango variety illustration"
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <div className="p-8">
                        <h3 className="font-display text-xl font-semibold tracking-tight">
                          {name}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted">
                          Balanced sweetness with a clean aroma — suitable for premium
                          retail and distribution.
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm font-bold text-mango-600 group-hover:underline">
                            View details
                          </span>
                          <span className="text-xs font-semibold tracking-wide text-muted bg-surface-2 px-2 py-1 rounded-md">
                            Export Ready
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <FloatingBlob color="bg-mango-500" className="top-0 right-0 size-96" />
          <FloatingBlob color="bg-leaf-500" className="bottom-0 left-0 size-96" />
        </div>

        <Container className="relative z-10">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
            <FadeIn>
              <h2 className="text-leaf-400 font-bold tracking-widest uppercase text-xs mb-2">
                Gallery
              </h2>
              <p className="font-display text-4xl font-semibold tracking-tight text-white mb-4">
                From orchard to export
              </p>
              <p className="text-white/60 max-w-xl">
                A visual preview of farming, harvesting, packing, and export readiness.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ButtonLink
                href="/gallery"
                variant="secondary"
                className="bg-white/10 text-white hover:bg-white/20 border-white/10"
              >
                View full gallery
              </ButtonLink>
            </FadeIn>
          </div>

          <FadeInStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <StaggerItem key={idx}>
                <Link
                  href="/gallery"
                  className="group relative block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 aspect-4/5"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-20" />
                  <Image
                    src="/gallery-tile.svg"
                    alt="Gallery preview"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium text-white">Harvesting Process</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.4}>
            <div className="mt-16 rounded-3xl bg-mango-500 p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Globe2 className="size-64 text-black" />
              </div>

              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between text-black">
                <div className="max-w-xl">
                  <p className="font-display text-3xl font-bold tracking-tight">
                    Ready to discuss export supply?
                  </p>
                  <p className="mt-4 text-lg font-medium opacity-80">
                    Share your market, volume expectations, and preferred varieties. We’ll respond with availability and logistics details.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href="/contact#inquiry"
                    className="bg-black text-white hover:bg-black/80 border-transparent"
                  >
                    Send an inquiry
                  </ButtonLink>
                  <ButtonLink
                    href="/export"
                    className="bg-white/20 hover:bg-white/30 border-transparent text-black"
                  >
                    Export workflow
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
