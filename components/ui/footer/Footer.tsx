import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerStyles } from "./styles";

export function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.topBorder} />

      <div className={footerStyles.container}>
        <div className={footerStyles.mainGrid}>
          {/* Brand column */}
          <div className={footerStyles.brandColumn}>
            <Link href="/" className={footerStyles.logoLink}>
              <div className={footerStyles.logoIcon}>
                <img src="/images/alpha-icon.jpg" alt="Alpha Trade Logo" width={32} height={32} loading="lazy" decoding="async" className="h-8 w-8 object-cover rounded" />
              </div>
              <div className="flex flex-col justify-center">
                <span className={footerStyles.logoTitle}>Alpha Trade Corp.</span>
              </div>
            </Link>

            <p className={footerStyles.brandDescription}>
              Your trusted partner in Iloilo for fast, reliable,
              and fully compliant China imports.
            </p>
          </div>



          {/* Contact */}
          <div className={footerStyles.contactColumn}>
            <h3 className={footerStyles.linkHeading}>Get In Touch</h3>
            <div className="space-y-2">
              <a href="mailto:sales@alphatrade.ph" className={footerStyles.contactItem}>
                <span className={footerStyles.contactIcon}>
                  <Mail className="h-4 w-4" />
                </span>
                <span className={footerStyles.contactText}>
                  sales@alphatrade.ph
                </span>
              </a>
              <a href="tel:+639271422793" className={footerStyles.contactItem}>
                <span className={footerStyles.contactIcon}>
                  <Phone className="h-4 w-4" />
                </span>
                <span className={footerStyles.contactText}>
                  +63 927 142 2793
                </span>
              </a>
              <a
                href="https://facebook.com/alpha.trade.corp"
                target="_blank"
                rel="noopener noreferrer"
                className={footerStyles.contactItem}
              >
                <span className={footerStyles.contactIcon}>
                  <MapPin className="h-4 w-4" />
                </span>
                <span className={`${footerStyles.contactText} hover:underline`}>
                  facebook.com/alpha.trade.corp
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={footerStyles.bottomBar}>
          <p className={footerStyles.copyright}>
            &copy; {new Date().getFullYear()} Alpha Trade Corp. All rights reserved.
          </p>
          <div className={footerStyles.bottomLinks}>
            <Link href="#" className={footerStyles.bottomLink}>
              Privacy Policy
            </Link>
            <Link href="#" className={footerStyles.bottomLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
