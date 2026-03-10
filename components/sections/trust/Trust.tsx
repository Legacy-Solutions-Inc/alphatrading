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
    title: "Fully Compliant",
    description:
      "Licensed Importer/Exporter, registered with DTI and accredited by the Bureau of Customs.",
    icon: ShieldCheck,
  },
  {
    title: "Strategically Connected",
    description:
      "Logistics Network with office in Hong Kong for coordination and warehouse in Shenzhen for fast consolidation.",
    icon: TrendingUp,
  },
  {
    title: "Trusted by Locals",
    description:
      "Deeply rooted in Iloilo with a decade of experience. We understand the local business landscape and build lasting partnerships.",
    icon: Handshake,
  }
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
          </div>

          {/* Right - Content */}
          <div className={trustStyles.rightColumn}>

            <h2 className={trustStyles.title}>
              Partner with{" "}
              <span className="text-gradient-primary">Alpha Trade</span>
              <br />
              for Seamless Growth
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
