import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { siteConfig } from "@/lib/site";
import { FadeIn, FadeInStagger, StaggerItem, FloatingElement } from "@/components/ui/Motion";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Contact Nelna Mango for export inquiries. Secure form with validation (spam protection and email notifications configured in the next step).",
};

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden">
      <section className="relative bg-linear-to-b from-earth-50 via-background to-mango-50/60 py-20 lg:py-24">
        {/* Background Decoration */}
        <FloatingElement className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <MessageSquare className="size-96 text-mango-300 -rotate-12" />
        </FloatingElement>

        <Container className="relative z-10">
          <FadeIn>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Start your export journey"
              description="Ready to bring premium Sri Lankan mangoes to your market? Our team is standing by to discuss volumes, logistics, and pricing."
            />
          </FadeIn>

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn delay={0.2}>
                <Card className="p-8 bg-surface/50 backdrop-blur border-none shadow-lg shadow-black/5 ring-1 ring-black/5">
                  <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="size-8 rounded-full bg-mango-100 flex items-center justify-center text-mango-600">
                      <Phone className="size-4" />
                    </span>
                    Contact Details
                  </h3>

                  <div className="space-y-6">
                    <ContactItem
                      icon={Mail}
                      label="Export Inquiries"
                      value={siteConfig.contact.email}
                      href={`mailto:${siteConfig.contact.email}`}
                    />
                    <ContactItem
                      icon={Phone}
                      label="Direct Line"
                      value={siteConfig.contact.phone}
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    />
                    <ContactItem
                      icon={MapPin}
                      label="Headquarters"
                      value={siteConfig.contact.address}
                    />
                    <ContactItem
                      icon={Clock}
                      label="Business Hours"
                      value="Mon - Fri: 8:00 AM - 5:00 PM (GMT+5:30)"
                    />
                  </div>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-md h-64 bg-earth-100 relative group">
                  {/* Placeholder Map Image/Iframe */}
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/4/41/Colombo_map.png')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                    <p className="text-sm font-medium text-foreground bg-white px-4 py-2 rounded-full shadow-sm">
                      View on Google Maps
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.3}>
                <Card className="p-8 md:p-10 bg-white shadow-2xl shadow-mango-500/10 ring-1 ring-black/5 border-none" id="inquiry">
                  <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight mb-2">
                      Export Inquiry Form
                    </h3>
                    <p className="text-muted">
                      Please provide details about your market and requirements. We typically respond with a quote and logistics plan within 24 hours.
                    </p>
                  </div>

                  <InquiryForm />

                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-2 text-xs text-muted">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Secure SSL Connection. Your data is protected.</span>
                  </div>
                </Card>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="mt-1 size-5 text-muted group-hover:text-mango-600 transition-colors">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted opacity-70 mb-0.5">{label}</p>
        <p className="text-base font-medium text-foreground group-hover:text-mango-700 transition-colors">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} className="block">{content}</a>;
  }
  return content;
}
