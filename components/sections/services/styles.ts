export const servicesStyles = {
  section: "py-24 lg:py-40 bg-slate-50 dark:bg-[#030b17] relative overflow-hidden",
  topBorder: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",

  // Header
  headerWrapper: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
  headerTitle: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-[-0.02em] leading-[1.05] mb-5",
  headerSubtitle: "text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium",

  // Cards grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",

  // Outer shell (Doppelrand "tray")
  cardShell: "group relative rounded-[1.375rem] p-1.5 bg-slate-100/70 dark:bg-slate-800/30 ring-1 ring-slate-200/70 dark:ring-slate-700/50 flex transition-all duration-500 ease-[var(--ease-spring)]",

  // Inner core ("glass plate" sitting in the tray)
  card: "relative rounded-2xl p-6 lg:p-8 flex flex-col h-full w-full transition-all duration-500 ease-[var(--ease-spring)]",

  cardDefault: "bg-white dark:bg-[#0c182c] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(15,23,42,0.04)] dark:shadow-none ring-1 ring-slate-200/50 dark:ring-slate-700/30 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_24px_-8px_rgba(15,23,42,0.12)]",

  cardContent: "relative z-10 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between mb-6",

  // Icon container inside card (the one place icon-box earns its role — distinguishing service types)
  cardIcon: "h-12 w-12 flex items-center justify-center rounded-md transition-transform duration-500 ease-[var(--ease-spring)] group-hover:scale-105",

  // Trailing arrow — fills with accent on card hover
  cardArrowDefault: "h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shadow-sm",

  // Card body
  cardTitle: "text-xl font-bold mb-3 tracking-tight",
  cardDescription: "text-sm leading-relaxed flex-grow",
} as const;
