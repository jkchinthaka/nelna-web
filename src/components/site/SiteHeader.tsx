"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/site/Logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items = useMemo(() => siteConfig.nav, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur"
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
        </div>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm transition-colors hover:text-foreground",
                  active ? "text-foreground" : "text-muted"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-earth-100 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
          <ButtonLink href="/contact#inquiry" variant="primary">
            Export Inquiry
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full px-3 py-2 text-sm ring-1 ring-border lg:hidden transition-transform active:scale-95"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border/70 bg-background lg:hidden"
          >
            <Container className="py-6">
              <nav className="grid gap-2" aria-label="Mobile">
                {items.map((item, i) => {
                  const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-sm transition-colors",
                          active ? "bg-earth-100 text-foreground font-medium" : "text-muted hover:bg-earth-50 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 grid gap-3"
                >
                  <ButtonLink href="/contact" variant="secondary" className="justify-center w-full">
                    Contact
                  </ButtonLink>
                  <ButtonLink href="/contact#inquiry" variant="primary" className="justify-center w-full shadow-none">
                    Export Inquiry
                  </ButtonLink>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
