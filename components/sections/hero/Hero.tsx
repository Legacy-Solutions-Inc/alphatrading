import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroStyles } from "./styles";

export function Hero() {
  return (
    <section className={heroStyles.section}>
      {/* ── LEFT: Content ── */}
      <div className={heroStyles.leftPane}>

        {/* Badge */}
        <div className={heroStyles.badge}>
          <span className={heroStyles.badgeDot} />
          Serving Iloilo &amp; Western Visayas
        </div>

        {/* Heading */}
        <h1 className={heroStyles.heading}>
          Your Iloilo Partner for
          <br />
          <span className={heroStyles.headingBlue}>Fast, Reliable</span> China
          <br />
          Imports
        </h1>

        {/* Description */}
        <p className={heroStyles.description}>
          Alpha Trade is your local partner for fast, reliable China imports. We cut Manila middlemen, speed up delivery, and make group shipping affordable. Built in Iloilo, for Iloilo businesses.
        </p>

        {/* CTA Buttons */}
        <div className={heroStyles.ctaRow}>
          <a href="#contact" className={heroStyles.primaryBtn}>
            Start Importing Now
            <span className={heroStyles.primaryBtnIconWrap}>
              <ArrowRight className={heroStyles.primaryBtnIcon} />
            </span>
          </a>
        </div>

        {/* Trust indicators */}
        <div className={heroStyles.trustRow}>
          {["Fully Licensed", "Customs Cleared", "Door-to-Door", "Based in Iloilo"].map((item) => (
            <div key={item} className={heroStyles.trustItem}>
              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Full-bleed image ── */}
      <div className={heroStyles.rightPane}>
        <div className={heroStyles.imageWrapper}>
          <img
            src="/images/hero-shipping.png"
            alt="Aerial view of container ship at sea — Alpha Trade logistics"
            width={1600}
            height={1200}
            fetchPriority="high"
            className={heroStyles.image}
          />

          {/* Mobile badges per design request calculation */}
          <div className={heroStyles.badgeRowOverlay}>
            <span className={heroStyles.badgeFast}>Fast</span>
            <span className={heroStyles.badgeReliable}>Reliable</span>
          </div>

          {/* Soft fade on the left edge so it blends into the white content pane */}
          <div className={heroStyles.imageOverlayLeft} />
        </div>
      </div>
    </section>
  );
}
