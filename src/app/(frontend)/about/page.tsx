import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata = {
  title: "About",
  description:
    "Learn about Nelna Mango — a Sri Lankan mango producer and exporter focused on premium quality, sustainability, and export compliance.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-earth-50 via-background to-leaf-100/40">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="A professional export partner, rooted in Sri Lanka"
              description="We combine orchard expertise with quality assurance and logistics planning — so international buyers can source with confidence."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#inquiry" size="lg">
                Export Inquiry
              </ButtonLink>
              <ButtonLink href="/export" variant="secondary" size="lg">
                Export workflow
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <Card className="overflow-hidden">
              <div className="relative h-72 bg-linear-to-br from-mango-50 via-earth-50 to-leaf-100">
                <Image
                  src="/about-wandama.jpg"
                  alt="Wandama Plantation entrance at Nelna"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-black/35 px-4 py-2 text-xs font-medium tracking-wide text-white ring-1 ring-white/20 backdrop-blur">
                  Wandama Plantation
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted">
                  A glimpse of our orchard roots — where disciplined farming and
                  export-ready handling begin.
                </p>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Vision",
                desc: "To be a trusted Sri Lankan mango export brand recognized for consistency and long-term partnerships.",
              },
              {
                title: "Mission",
                desc: "Deliver export-grade mangoes through disciplined QA, sustainable farming, and reliable supply communication.",
              },
              {
                title: "Core Values",
                desc: "Integrity, traceability, quality mindset, and respect for nature and partners.",
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delayMs={idx * 70}>
                <Card className="p-6">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-earth-50">
        <Container>
          <SectionHeading
            eyebrow="Quality"
            title="Quality assurance and certifications"
            description="Add certifications, audits, and QA controls here — structured as CMS blocks."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Our QA approach
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted">
                <li>Harvest maturity checks</li>
                <li>Sorting & grading</li>
                <li>Packaging integrity</li>
                <li>Cold-chain readiness</li>
                <li>Documentation & traceability</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="font-display text-lg font-semibold tracking-tight">
                Certifications (placeholders)
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                Add the exact certification names/logos once confirmed (CMS-driven
                later).
              </p>
              <div className="mt-4 grid gap-2 text-sm text-muted">
                <div className="rounded-xl bg-surface p-3 ring-1 ring-border">
                  Export compliance
                </div>
                <div className="rounded-xl bg-surface p-3 ring-1 ring-border">
                  Food safety
                </div>
                <div className="rounded-xl bg-surface p-3 ring-1 ring-border">
                  Sustainable practices
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Timeline"
            title="How we’ve grown"
            description="A simple, story-based timeline layout (CMS-editable later)."
          />

          <div className="mt-10 grid gap-4">
            {[
              {
                year: "2018",
                text: "Strengthened orchard practices and post-harvest handling.",
              },
              {
                year: "2021",
                text: "Standardized grading and packaging to support export operations.",
              },
              {
                year: "2024",
                text: "Expanded export readiness with logistics-focused workflows.",
              },
            ].map((item, idx) => (
              <Reveal key={item.year} delayMs={idx * 70}>
                <Card className="p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display text-xl font-semibold tracking-tight">
                      {item.year}
                    </p>
                    <p className="text-sm text-muted">Milestone</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
