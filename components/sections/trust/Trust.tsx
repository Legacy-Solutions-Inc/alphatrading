import {
  ShieldCheck,
  TrendingUp,
  Handshake,
  Award,
  BarChart3,
  Users,
} from "lucide-react";
import { trustStyles } from "./styles";

const reasons = [
  {
    title: "Trusted by Locals",
    description:
      "Deeply rooted in Iloilo with a decade of experience. We understand the local business landscape and build lasting partnerships.",
    icon: Handshake,
    metric: "10+",
    metricLabel: "Years in Iloilo",
  },
  {
    title: "Fully Compliant",
    description:
      "Licensed customs brokerage with strict adherence to BOC and DENR import regulations. Your cargo is never delayed by compliance issues.",
    icon: ShieldCheck,
    metric: "100%",
    metricLabel: "Compliance Rate",
  },
  {
    title: "Strategically Connected",
    description:
      "Direct partnerships with top-tier shipping lines and verified China suppliers, unlocking preferential rates and priority loading.",
    icon: TrendingUp,
    metric: "30+",
    metricLabel: "Shipping Partners",
  },
];

const stats = [
  { icon: Award, value: "A+", label: "BOC Rating" },
  { icon: BarChart3, value: "50K+", label: "TEUs Handled" },
  { icon: Users, value: "500+", label: "Active Clients" },
];

export function Trust() {
  return (
    <section id="trust" className={trustStyles.section}>
      <div className={trustStyles.orbRight} />
      <div className={trustStyles.orbLeft} />

      <div className={trustStyles.container}>
        <div className={trustStyles.grid}>
          {/* Left - Image Composition */}
          <div className={trustStyles.leftColumn}>
            <div className={trustStyles.imageWrapper}>
              <img
                src="/images/trust-port.png"
                alt="Container ship operations at port"
                className={trustStyles.image}
              />
              <div className={trustStyles.imageOverlay} />
            </div>

            {/* Floating certification badge */}
            <div className={trustStyles.floatingBadge}>
              <div className="flex items-center gap-3">
                <div className={trustStyles.floatingBadgeIcon}>
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className={trustStyles.floatingBadgeTitle}>Certified</p>
                  <p className={trustStyles.floatingBadgeLabel}>
                    Licensed Customs Broker
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row below image */}
            <div className={trustStyles.statsGrid}>
              {stats.map((stat, i) => (
                <div key={i} className={trustStyles.statCard}>
                  <stat.icon className="h-5 w-5 text-[#1a73e8] mx-auto mb-2" />
                  <p className={trustStyles.statValue}>{stat.value}</p>
                  <p className={trustStyles.statLabel}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className={trustStyles.rightColumn}>

            <h2 className={trustStyles.title}>
              Your Strategic Partner for{" "}
              <span className="text-gradient-primary">Seamless Growth</span>
            </h2>

            <p className={trustStyles.subtitle}>
              We go beyond logistics — we become an extension of your supply
              chain team, proactively solving challenges before they impact your
              business.
            </p>

            <div className={trustStyles.reasonsList}>
              {reasons.map((reason, index) => (
                <div key={index} className={trustStyles.reasonItem}>
                  <div className={trustStyles.reasonIconWrapper}>
                    <div className={trustStyles.reasonIcon}>
                      <reason.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className={trustStyles.reasonContent}>
                    <div className={trustStyles.reasonHeader}>
                      <h4 className={trustStyles.reasonTitle}>
                        {reason.title}
                      </h4>
                      <span className={trustStyles.reasonMetric}>
                        {reason.metric} {reason.metricLabel}
                      </span>
                    </div>
                    <p className={trustStyles.reasonDescription}>
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
