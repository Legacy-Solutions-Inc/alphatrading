import { Ship, Anchor, Package, Truck, ArrowUpRight, Handshake, LocateIcon, PlayCircle, LocationEdit, MapPinned } from "lucide-react";
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
    icon: Handshake,
    accent: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Reliable door-to-door delivery service from our warehouses to your business location anywhere in Western Visayas.",
    icon: MapPinned,
    accent: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
];

export function Services() {
  return (
    <section id="services" className={servicesStyles.section}>
      <div className={servicesStyles.topBorder} />

      <div className={servicesStyles.container}>
        {/* Header */}
        <div className={servicesStyles.headerWrapper}>
          <h2 className={servicesStyles.headerTitle}>
            Our{" "}
            <span className="text-gradient-primary">Services</span>
          </h2>
          <p className={servicesStyles.headerSubtitle}>
            We source and consolidate, clear customs, deliver to your door.
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
