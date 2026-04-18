"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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

  return (
    <header className={navbarStyles.header(scrolled)}>
      <div className={navbarStyles.container}>
        {/* Logo */}
        <Link href="/" className={navbarStyles.logoLink}>
          <div className={navbarStyles.logoIcon}>
            <img src="/images/alpha-icon.jpg" alt="Alpha Trade Logo" width={44} height={44} className="h-11 w-11 object-cover rounded-md" />
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

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={navbarStyles.mobileBtn}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div id="mobile-nav-drawer" className={navbarStyles.drawer}>
          <div className={navbarStyles.drawerContainer}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={navbarStyles.drawerLink}
              >
                {link.label}
              </Link>
            ))}
            <div className={navbarStyles.drawerDivider}>
              <Link href="#contact" className="w-full">
                <Button className={navbarStyles.drawerPrimaryBtn}>
                  Get A Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
