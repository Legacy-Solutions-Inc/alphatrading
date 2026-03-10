import { Ship, Anchor, Package, Truck, ArrowUpRight, Handshake, LocateIcon, PlayCircle, LocationEdit, MapPinned } from "lucide-react";
import { servicesStyles } from "./styles";

const services = [
  {
    title: "Sea Freight",
    description:
      "Full container load (FCL) and less than container load (LCL) shipping from major China ports with real-time tracking and competitive rates.",
    icon: Ship,
  },
  {
    title: "Customs Brokerage",
    description:
      "Licensed professionals handling all paperwork, tariff classifications, and regulatory requirements for smooth import clearance.",
    icon: Handshake,
  },
  {
    title: "Last-Mile Delivery",
    description:
      "Reliable door-to-door delivery service from our warehouses to your business location anywhere in Western Visayas.",
    icon: MapPinned,
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
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`${servicesStyles.card} ${servicesStyles.cardDefault}`}
              >
                <div className={servicesStyles.cardContent}>
                  <div className={servicesStyles.cardHeader}>
                    <div
                      className={`${servicesStyles.cardIcon} bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400`}
                    >
                      <service.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    <div className={servicesStyles.cardArrowDefault}>
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <h3
                    className={`${servicesStyles.cardTitle} text-slate-900 dark:text-white`}
                  >
                    {service.title}
                  </h3>
                  <p className={servicesStyles.cardDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
