import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
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
          Streamline your supply chain with seamless logistics solutions. We
          handle customs, compliance, and transport so you can focus on growing
          your business.
        </p>

        {/* CTA Buttons */}
        <div className={heroStyles.ctaRow}>
          <a href="#contact" className={heroStyles.primaryBtn}>
            Start Importing Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="mailto:inquire@alphatrade.ph" className={heroStyles.secondaryBtn}>
            <Mail className="h-4 w-4 text-[#1a73e8]" />
            inquire@alphatrade.ph
          </a>
        </div>

        {/* Trust indicators */}
        <div className={heroStyles.trustRow}>
          {["Fully Licensed", "Customs Cleared", "Door-to-Door"].map((item) => (
            <div key={item} className={heroStyles.trustItem}>
              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Full-bleed image ── */}
      <div className={heroStyles.rightPane}>
        <img
          src="/images/hero-shipping.png"
          alt="Aerial view of container ship at sea — Alpha Trade logistics"
          className={heroStyles.image}
        />
        {/* Soft fade on the left edge so it blends into the white content pane */}
        <div className={heroStyles.imageOverlayLeft} />
      </div>
    </section>
  );
}
