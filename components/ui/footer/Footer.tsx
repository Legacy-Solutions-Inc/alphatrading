import Link from "next/link";
import { Ship, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { footerStyles } from "./styles";

const footerLinks = {
  services: [
    // { label: "Sea Freight", href: "#" },
    { label: "Customs Brokerage", href: "#" },
    // { label: "Warehousing", href: "#" },
    // { label: "Last-Mile Delivery", href: "#" },
    // { label: "Consolidation", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    // { label: "Partner Network", href: "#" },
    // { label: "Compliance Updates", href: "#" },
    // { label: "Careers", href: "#" },
    // { label: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder} />
      <div className={footerStyles.glow} />

      <div className={footerStyles.container}>
        <div className={footerStyles.mainGrid}>
          {/* Brand column */}
          <div className={footerStyles.brandColumn}>
            <Link href="/" className={footerStyles.logoLink}>
              <div className={footerStyles.logoIcon}>
                <Ship className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className={footerStyles.logoTitle}>Alpha Trade</span>
                <span className={footerStyles.logoSubtitle}>Logistics</span>
              </div>
            </Link>

            <p className={footerStyles.brandDescription}>
              Your trusted partner in Iloilo for fast, reliable, and fully
              compliant China imports. Streamlining logistics for your seamless
              business growth since 2014.
            </p>

            {/* <div className={footerStyles.socialRow}>
              {["Facebook", "LinkedIn", "Twitter"].map((name) => (
                <Link
                  key={name}
                  href="#"
                  className={footerStyles.socialLink}
                >
                  {name[0]}
                </Link>
              ))}
            </div> */}
          </div>

          {/* Services */}
          <div className={footerStyles.linkColumn}>
            <h3 className={footerStyles.linkHeading}>Services</h3>
            <ul className={footerStyles.linkList}>
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerStyles.linkItem}>
                    {link.label}
                    <ArrowUpRight className={footerStyles.linkArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={footerStyles.linkColumn}>
            <h3 className={footerStyles.linkHeading}>Company</h3>
            <ul className={footerStyles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={footerStyles.linkItem}>
                    {link.label}
                    <ArrowUpRight className={footerStyles.linkArrow} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={footerStyles.contactColumn}>
            <h3 className={footerStyles.linkHeading}>Get In Touch</h3>
            <div className="space-y-4">
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIcon}>
                  <Mail className="h-4 w-4" />
                </div>
                <span className={footerStyles.contactText}>
                  info@alphatrade.ph
                </span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIcon}>
                  <Phone className="h-4 w-4" />
                </div>
                <span className={footerStyles.contactText}>
                  +63 (33) 123 4567
                </span>
              </div>
              <div className={footerStyles.contactItemStart}>
                <div className={`${footerStyles.contactIcon} mt-0.5`}>
                  <MapPin className="h-4 w-4" />
                </div>
                <span className={footerStyles.contactText}>
                  Iloilo Business Park,
                  <br />
                  Mandurriao, Iloilo City 5000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={footerStyles.bottomBar}>
          <p className={footerStyles.copyright}>
            &copy; {new Date().getFullYear()} Alpha Trade Logistics Corp. All
            rights reserved.
          </p>
          <div className={footerStyles.bottomLinks}>
            <Link href="#" className={footerStyles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="#" className={footerStyles.bottomLink}>
              Terms of Service
            </Link>
            {/* <Link href="#" className={footerStyles.bottomLink}>
              Sitemap
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
