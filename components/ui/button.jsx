import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("inline-flex items-center justify-center gap-2 font-medium transition-opacity", {
  variants: {
    variant: {
      primary: "rounded-full bg-accent text-accent-fg hover:opacity-90",
      secondary: "rounded-full border border-accent text-accent hover:bg-accent-soft",
      accent: "rounded-full bg-accent text-accent-fg hover:opacity-90",
      dark: "rounded-full bg-accent text-accent-fg hover:opacity-90",
      soft: "rounded-full border border-accent text-accent hover:bg-accent-soft",
      green: "rounded-full bg-accent text-accent-fg hover:opacity-90",
    },
    size: {
      default: "h-10 px-5 text-sm",
      sm: "h-8 rounded-md px-3.5 text-[13px]",
    },
  },
  defaultVariants: { variant: "primary", size: "default" },
});

export default function Button({ href, variant, size, className, children }) {
  const external = href?.startsWith("http");
  return (
    <Link href={href} className={cn(styles({ variant, size }), className)} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {children}
      <span className="text-[14px] leading-none" aria-hidden="true">→</span>
    </Link>
  );
}
