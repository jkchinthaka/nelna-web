import Image from "next/image";

import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, FadeInStagger, StaggerItem, FloatingBlob, FloatingElement } from "@/components/ui/Motion";
import { WorldMap } from "@/components/ui/WorldMap"; // New Component
import { CheckCircle2, Globe2, Plane, Ship, PackageCheck, ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Export & Distribution",
  description:
    "Export workflow, packaging standards, and compliance overview for international buyers and partners.",
};

const steps = [
  {
    title: "Orchard Harvest",
    desc: "Planned harvest timing aligned to maturity and destination requirements.",
    icon: ClipboardCheck
  },
  {
    title: "Quality Sorting",
    desc: "Optical and manual grading to ensure consistent size and defect-free fruit.",
    icon: PackageCheck
  },
  {
    title: "Cold Chain",
    desc: "Rapid pre-cooling within 4 hours of harvest to lock in freshness.",
    icon: Globe2
  },
  {
    title: "Global Logistics",
    desc: "Air and sea freight coordination with temperature monitoring.",
    icon: Plane
  },
] as const;

export default function ExportPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-linear-to-b from-earth-50 to-white py-20 lg:py-24">
        <Container className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-leaf-50 text-leaf-700 text-xs font-bold uppercase tracking-wider mb-6 ring-1 ring-leaf-200">
              <Globe2 className="size-3" /> Global Logistics
            </div>
            <SectionHeading
              eyebrow="Export Operations"
              title="Seamless supply chain from Sri Lanka to the World"
              description="We manage the entire export lifecycle—from farm certification to port delivery—ensuring compliance, freshness, and traceability."
            />
            <div className="mt-8 flex gap-4">
              <ButtonLink href="/contact#inquiry" size="lg">Start Export Inquiry</ButtonLink>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            {/* Map Placeholder */}
            <div className="relative z-10 bg-white p-2 rounded-4xl shadow-2xl ring-1 ring-black/5">
              <WorldMap />
            </div>
            {/* Decorative */}
            <FloatingElement className="absolute -top-12 -right-12 z-0">
              <div className="bg-mango-500 rounded-full size-32 opacity-20 blur-3xl" />
            </FloatingElement>
          </FadeIn>
        </Container>
      </section>

      {/* Workflow Steps - Horizontal Scroll or Grid */}
      <section className="py-24 bg-white">
        <Container>
          <FadeIn className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-semibold mb-4">The Nelna Export Standard</h2>
            <p className="text-muted">Our rigorous 4-step process guarantees that every mango arriving at your port is as fresh as the day it was picked.</p>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-mango-200 to-transparent -z-10" />

            {steps.map((s, idx) => (
              <StaggerItem key={s.title}>
                <div className="relative bg-surface rounded-2xl p-6 ring-1 ring-border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="size-12 rounded-xl bg-earth-100 flex items-center justify-center text-foreground mb-4 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white">
                    <s.icon className="size-6 text-mango-600" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>

                  {/* Step Number Background */}
                  <span className="absolute top-4 right-4 text-6xl font-display font-bold text-black/3 select-none">
                    0{idx + 1}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </FadeInStagger>
        </Container>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-earth-50">
        <Container>
          <div className="bg-leaf-900 rounded-5xl p-8 md:p-12 lg:p-20 text-white relative overflow-hidden">
            <FloatingBlob color="bg-leaf-500" className="top-0 right-0 size-96 opacity-20" />
            <FloatingBlob color="bg-mango-500" className="bottom-0 left-0 size-96 opacity-10" delay={3} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
                  Certified for Global Markets
                </h2>
                <p className="text-leaf-100/80 text-lg leading-relaxed mb-8">
                  We strictly adhere to international phytosanitary and food safety standards.
                  All shipments include full traceability documentation and quality reports.
                </p>
                <ul className="grid gap-4">
                  {[
                    "Global G.A.P Certified Farms",
                    "HACCP Processing Standards",
                    "Phytosanitary Certification",
                    "Full Batch Traceability"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium">
                      <div className="size-6 rounded-full bg-leaf-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="size-3.5 text-mango-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 ring-1 ring-white/20">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Ship className="size-5 text-mango-400" /> Shipping Logistics
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2 opacity-80">
                      <span>Air Freight (Middle East/Asia)</span>
                      <span>24 - 48 Hours</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-mango-400 w-[20%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2 opacity-80">
                      <span>Sea Freight (Europe/Global)</span>
                      <span>14 - 21 Days</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[70%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <ButtonLink href="/contact" className="w-full bg-white text-leaf-900 border-none hover:bg-leaf-50 justify-center">
                    Request Logistics Schedule
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
