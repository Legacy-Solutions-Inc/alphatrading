import { MapPin, Zap, TrendingDown } from "lucide-react";
import { whyChooseStyles } from "./styles";

const features = [
  {
    icon: MapPin,
    title: "Proudly Iloilo-Born",
    description:
      "Local presence means local accountability. Visit our office in Mandurriao anytime. We speak your language.",
  },
  {
    icon: Zap,
    title: "15 Days from Shenzhen",
    description:
      "Our direct shipping lanes bypass Manila congestion. Get your goods faster than standard freight forwarders.",
  },
  {
    icon: TrendingDown,
    title: "30% Cheaper than Manila",
    description:
      "Stop paying \"Manila Rate\" markups. Our direct consolidation allows us to offer significantly lower shipping rates.",
  },
];

export function WhyChoose() {
  return (
    <section className={whyChooseStyles.section}>
      <div className={whyChooseStyles.container}>
        <div className={whyChooseStyles.grid}>

          {/* ── LEFT: Image card ── */}
          <div className={whyChooseStyles.imageWrapper}>
            <img
              src="/images/manila-international-container-terminal-5.jpg"
              alt="Container ship connecting Visayas to the world's factory floor"
              className={whyChooseStyles.image}
            />
            <div className={whyChooseStyles.imageOverlay} />

            {/* FAST / RELIABLE badges */}
            <div className={whyChooseStyles.badgeRow}>
              <span className={whyChooseStyles.badgeFast}>Fast</span>
              <span className={whyChooseStyles.badgeReliable}>Reliable</span>
            </div>

            {/* Caption */}
            <p className={whyChooseStyles.caption}>
              &ldquo;Connecting Visayas to the world&rsquo;s factory floor.&rdquo;
            </p>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className={whyChooseStyles.content}>
            <h2 className={whyChooseStyles.heading}>
              Why Choose{" "}
              <span className={whyChooseStyles.headingAccent}>Alpha Trade?</span>
            </h2>
            <p className={whyChooseStyles.description}>
              We understand the unique challenges of Visayas businesses. Our
              logistics network is optimized specifically for Iloilo to cut costs
              and time.
            </p>

            <ul className={whyChooseStyles.featureList}>
              {features.map((feature, i) => (
                <li key={i} className={whyChooseStyles.featureItem}>
                  <div className={whyChooseStyles.featureIconWrapper}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className={whyChooseStyles.featureTitle}>
                      {feature.title}
                    </p>
                    <p className={whyChooseStyles.featureDesc}>
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
