"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navbarStyles } from "./styles";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#trust", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

  // Close on ESC
  React.useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      <header className={navbarStyles.header(scrolled)}>
        <div className={scrolled ? navbarStyles.containerPill : navbarStyles.container}>
          {/* Logo */}
          <Link href="/" className={navbarStyles.logoLink}>
            <div className={navbarStyles.logoIcon}>
              <img
                src="/images/alpha-icon.jpg"
                alt="Alpha Trade Logo"
                width={44}
                height={44}
                className={scrolled ? "h-9 w-9 object-cover rounded-md transition-all duration-500 ease-[var(--ease-spring)]" : "h-11 w-11 object-cover rounded-md transition-all duration-500 ease-[var(--ease-spring)]"}
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={navbarStyles.logoTitle}>Alpha Trade Corp.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={navbarStyles.desktopNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={navbarStyles.navLink}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={navbarStyles.desktopCta}>
            <Link href="#contact">
              <Button className={navbarStyles.quoteBtn}>Get A Quote</Button>
            </Link>
          </div>

          {/* Mobile menu button — morphing hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={navbarStyles.mobileBtn}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span className="relative block h-5 w-5" aria-hidden="true">
              <span
                className={`${navbarStyles.hamburgerLine} ${mobileOpen ? "rotate-45 translate-y-0" : "-translate-y-[4px]"}`}
              />
              <span
                className={`${navbarStyles.hamburgerLine} ${mobileOpen ? "-rotate-45 translate-y-0" : "translate-y-[4px]"}`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen glass mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className={navbarStyles.mobileOverlay}
          role="dialog"
          aria-modal="true"
        >
          <nav className={navbarStyles.mobileOverlayNav}>
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={navbarStyles.mobileOverlayLink}
                style={{ animationDelay: `${80 + i * 60}ms` }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-forwards"
              style={{ animationDelay: `${80 + navLinks.length * 60}ms` }}
            >
              <Button className={navbarStyles.drawerPrimaryBtn}>
                Get A Quote
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
