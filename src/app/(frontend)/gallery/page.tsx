import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CinematicGallery } from "@/components/gallery/CinematicGallery";

export const metadata = {
  title: "Gallery",
  description:
    "Explore orchard, harvesting, packaging, and export preparation photos from Nelna Mango (CMS-managed gallery).",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-linear-to-br from-earth-50 via-background to-mango-50/60 pb-20">
        <Container className="py-14 lg:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Visual Journey"
              title="Orchard to export preparation"
              description="A curated look at farming, harvesting, packing, and export readiness. Experience the premium quality of Nelna Mango."
            />
          </Reveal>
        </Container>

        <Container>
          <CinematicGallery />
        </Container>
      </section>
    </div>
  );
}
