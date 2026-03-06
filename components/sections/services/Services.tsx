import { Ship, Anchor, Package, Truck, ArrowUpRight } from "lucide-react";
import { servicesStyles } from "./styles";

const services = [
  {
    title: "Sea Freight",
    description:
      "Full container load (FCL) and less than container load (LCL) shipping from major China ports with real-time tracking and competitive rates.",
    icon: Ship,
    accent: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Customs Brokerage",
    description:
      "Licensed professionals handling all paperwork, tariff classifications, and regulatory requirements for smooth import clearance.",
    icon: Anchor,
    accent: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Warehousing",
    description:
      "Secure, climate-controlled storage facilities in Iloilo with inventory management systems and flexible storage terms.",
    icon: Package,
    accent: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Reliable door-to-door delivery service from our warehouses to your business location anywhere in Western Visayas.",
    icon: Truck,
    accent: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export function Services() {
  return (
    <section id="services" className={servicesStyles.section}>
      <div className={servicesStyles.topBorder} />

      <div className={servicesStyles.container}>
        {/* Header */}
        <div className={servicesStyles.headerWrapper}>
          <div className={servicesStyles.headerBadge}>What We Do</div>
          <h2 className={servicesStyles.headerTitle}>
            Comprehensive Logistics
            <br />
            <span className="text-gradient-primary">Solutions</span>
          </h2>
          <p className={servicesStyles.headerSubtitle}>
            From port to doorstep, every link in your supply chain is covered by
            our integrated service platform.
          </p>
        </div>

        {/* Service Cards */}
        <div className={servicesStyles.grid}>
          {services.map((service, index) => (
            <div key={index} className={servicesStyles.card}>
              <div
                className={`${servicesStyles.cardOverlay} bg-gradient-to-br ${service.accent}`}
              />

              <div className={servicesStyles.cardContent}>
                <div className={servicesStyles.cardHeader}>
                  <div
                    className={`${servicesStyles.cardIcon} ${service.iconBg} ${service.iconColor}`}
                  >
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className={servicesStyles.cardArrow}>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <h3 className={servicesStyles.cardTitle}>{service.title}</h3>
                <p className={servicesStyles.cardDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
