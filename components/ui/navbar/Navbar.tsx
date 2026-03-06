"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ship, Menu, X } from "lucide-react";
import { navbarStyles } from "./styles";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#trust", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={navbarStyles.header(scrolled)}>
      <div className={navbarStyles.container}>
        {/* Logo */}
        <Link href="/" className={navbarStyles.logoLink}>
          <div className={navbarStyles.logoIcon}>
            <Ship className="h-6 w-6" />
            <div className={navbarStyles.logoGradient} />
          </div>
          <div className="flex flex-col">
            <span className={navbarStyles.logoTitle}>Alpha Trade</span>
            <span className={navbarStyles.logoSubtitle}>Logistics</span>
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
          {/* <Button variant="ghost" className={navbarStyles.signInBtn}>
            Sign In
          </Button> */}
          <Link href="#contact">
            <Button className={navbarStyles.quoteBtn}>Get A Quote</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={navbarStyles.mobileBtn}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className={navbarStyles.drawer}>
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
              <Button
                variant="outline"
                className={navbarStyles.drawerOutlineBtn}
              >
                Sign In
              </Button>
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
