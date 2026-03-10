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
                <img src="/images/alpha-icon.jpg" alt="Alpha Trade Logo" className="h-8 w-8 object-cover rounded" />
              </div>
              <div className="flex flex-col">
                <span className={footerStyles.logoTitle}>Alpha Trade</span>
              </div>
            </Link>

            <p className={footerStyles.brandDescription}>
              Your trusted partner in Iloilo for fast, reliable,
              and fully compliant China imports.
            </p>
          </div>



          {/* Contact */}
          <div className={footerStyles.contactColumn}>
            <h3 className={`${footerStyles.linkHeading} ml-12`}>Get In Touch</h3>
            <div className="space-y-4">
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIcon}>
                  <Mail className="h-4 w-4" />
                </div>
                <span className={footerStyles.contactText}>
                  sales@alphatrade.ph
                </span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIcon}>
                  <Phone className="h-4 w-4" />
                </div>
                <span className={footerStyles.contactText}>
                  +63 927 142 2793
                </span>
              </div>
              <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIcon}>
                  <MapPin className="h-4 w-4" />
                </div>
                <a
                  href="https://facebook.com/alpha.trade.corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerStyles.contactText} hover:text-white hover:underline transition-colors`}
                >
                  facebook.com/alpha.trade.corp
                </a>
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
