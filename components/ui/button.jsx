import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const styles = cva("inline-flex items-center gap-3 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5", {
  variants: {
    variant: {
      dark: "bg-black text-white shadow-lg shadow-blue-950/40 ring-1 ring-white/10",
      soft: "border border-white/10 bg-white/5 text-slate-100 hover:border-blue-400/40 hover:bg-white/10",
      green: "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500",
    },
    size: { default: "py-2 pl-6 pr-2 text-[15px]", sm: "py-2 pl-[18px] pr-2 text-sm" },
  },
  defaultVariants: { variant: "dark", size: "default" },
});

export default function Button({ href, variant, size, className, children }) {
  const small = size === "sm";
  return (
    <Link href={href} className={cn(styles({ variant, size }), className)}>
      {children}
      <span className={cn("grid place-items-center rounded-full", small ? "h-6 w-6 bg-white/20" : "h-[30px] w-[30px] bg-blue-500 text-white", variant === "dark" && !small && "text-white")}>
        <ArrowUpRight className={small ? "h-3 w-3" : "h-3.5 w-3.5"} strokeWidth={3} />
      </span>
    </Link>
  );
}
