import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mango-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-mango-500 text-black hover:bg-mango-600 shadow-[0_10px_30px_rgba(243,164,0,0.25)]",
  secondary:
    "bg-surface text-foreground ring-1 ring-border hover:bg-earth-50",
  ghost: "text-foreground hover:bg-earth-100",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
} as const;

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ComponentPropsWithoutRef<"button"> & BaseProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, "href"> &
  BaseProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
