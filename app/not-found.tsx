import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-charcoal/80">
          <span className="font-mono text-xs uppercase tracking-widest text-silver-muted font-medium">
            Error 404
          </span>
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-silver-chrome">
          Page Not Located
        </h1>

        <p className="text-sm text-silver-muted leading-relaxed font-sans">
          The route you are attempting to access does not exist or has been restructured.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/"
            variant="chrome"
            size="md"
            icon={<Home className="w-4 h-4" />}
          >
            Return to Homepage
          </Button>

          <Button
            href="/services"
            variant="secondary"
            size="md"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
}
