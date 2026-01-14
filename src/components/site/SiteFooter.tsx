import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-earth-50">
      <Container className="grid gap-10 py-14 lg:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </p>
          <p className="max-w-sm text-sm leading-6 text-muted">
            Premium Sri Lankan mangoes for global buyers. Export-grade quality,
            sustainable farming, and reliable logistics.
          </p>
        </div>

        <div className="grid gap-2 text-sm">
          <p className="font-medium text-foreground">Company</p>
          <div className="grid gap-1 text-muted">
            <Link className="hover:text-foreground" href="/about">
              About
            </Link>
            <Link className="hover:text-foreground" href="/products">
              Products
            </Link>
            <Link className="hover:text-foreground" href="/export">
              Export & Distribution
            </Link>
          </div>
        </div>

        <div className="grid gap-2 text-sm">
          <p className="font-medium text-foreground">Contact</p>
          <div className="grid gap-1 text-muted">
            <a className="hover:text-foreground" href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
            <a className="hover:text-foreground" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
              {siteConfig.contact.phone}
            </a>
            <p className="text-muted">{siteConfig.contact.address}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-border/70">
        <Container className="flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <Link className="hover:text-foreground" href="/contact">
              Export Inquiry
            </Link>
            <Link className="hover:text-foreground" href="/blog">
              News
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
