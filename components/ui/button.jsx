import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Button({ href, variant = "primary", size = "default", className, children, ...props }) {
  const external = href?.startsWith("http");
  return (
    <Link href={href} className={cn("vx-button", `vx-button--${variant}`, `vx-button--${size}`, className)} {...(external && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
      <span className="vx-button-label">{children}</span>
      <span className="vx-button-arrow" aria-hidden="true"><ArrowUpRight size={16} strokeWidth={2} /></span>
    </Link>
  );
}
