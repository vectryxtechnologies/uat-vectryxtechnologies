"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNavLinks } from "@/lib/data/navigation";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy active section detection on homepage
      if (isHome) {
        const sections = ["services", "solutions", "projects", "technologies", "about", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              return;
            }
          }
        }

        if (window.scrollY < 300) {
          setActiveSection("home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Determine if a link is active (combining scrollspy on home and pathname on inner routes)
  const isLinkActive = (href: string) => {
    if (isHome) {
      if (href === "/") return activeSection === "home" || activeSection === "";
      const sectionName = href.replace("/", "");
      return activeSection === sectionName;
    }
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  };

  const getLinkHref = (href: string) => {
    if (isHome && href !== "/") {
      return `#${href.replace("/", "")}`;
    }
    return href;
  };

  return (
    <>
      {/* Gradient Scroll Progress Bar at the top of the viewport */}
      <ScrollProgress />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-surface-deep/80 backdrop-blur-xl border-b border-white/10 shadow-chrome-subtle py-3.5"
            : "bg-transparent border-b border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum rounded-md"
              aria-label="Vectryx Technologies Home"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.svg"
                  alt="Vectryx Technologies Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-silver-chrome group-hover:text-white transition-colors">
                  Vectryx
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-silver-muted -mt-1">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links with Scrollspy Highlighting */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {mainNavLinks.map((link) => {
                const active = isLinkActive(link.href);
                const targetHref = getLinkHref(link.href);

                return (
                  <Link
                    key={link.href}
                    href={targetHref}
                    className={cn(
                      "relative px-3.5 py-2 text-sm font-medium font-sans tracking-wide transition-all duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum",
                      active
                        ? "text-silver-chrome font-semibold bg-white/[0.04]"
                        : "text-silver-muted hover:text-silver-platinum hover:bg-white/[0.02]"
                    )}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-silver-platinum to-silver-metallic rounded-full shadow-[0_0_8px_rgba(217,217,217,0.6)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <Button
                href="/start-project"
                size="sm"
                variant="chrome"
                className="hidden sm:inline-flex"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Start Your Project
              </Button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-silver-muted hover:text-silver-chrome hover:bg-surface-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-silver-platinum"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[65px] bg-surface-deep/98 backdrop-blur-2xl z-40 border-t border-white/10 flex flex-col justify-between px-6 py-8 overflow-y-auto">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {mainNavLinks.map((link) => {
                const active = isLinkActive(link.href);
                const targetHref = getLinkHref(link.href);

                return (
                  <Link
                    key={link.href}
                    href={targetHref}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center justify-between py-3.5 px-4 rounded-lg text-lg font-heading tracking-wide transition-colors",
                      active
                        ? "bg-surface-graphite text-silver-chrome font-semibold border-l-2 border-silver-platinum"
                        : "text-silver-muted hover:text-silver-chrome hover:bg-surface-graphite/50"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-60" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-border/80 space-y-3">
              <Button
                href="/start-project"
                size="lg"
                variant="chrome"
                className="w-full justify-center"
                icon={<ArrowUpRight className="w-4 h-4" />}
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Your Project
              </Button>
              <p className="text-center text-xs text-silver-muted/80 font-mono">
                Build Smarter. Automate Better. Scale Faster.
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
