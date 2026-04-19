export const trustStyles = {
  section: "py-24 lg:py-40 bg-white dark:bg-[#0a1628] relative overflow-hidden",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",

  // Left - Image
  leftColumn: "relative order-2 lg:order-1",
  imageWrapper: "relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none aspect-[4/3] group",
  image: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
  imageOverlay: "absolute inset-0 bg-gradient-to-tr from-[#0a1628]/40 via-transparent to-transparent",

  // Right - Content
  rightColumn: "order-1 lg:order-2",
  title: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-[-0.02em] leading-[1.05]",
  subtitle: "text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed",

  // Reasons list — Doppelrand nested architecture
  reasonsList: "grid grid-cols-1 gap-4",
  reasonShell: "group rounded-[1.375rem] p-1.5 bg-slate-100/60 dark:bg-slate-800/30 ring-1 ring-slate-200/70 dark:ring-slate-700/50 transition-all duration-500 ease-[var(--ease-spring)] hover:ring-blue-200",
  reasonItem: "flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111d32] ring-1 ring-slate-200/40 dark:ring-slate-700/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_1px_2px_rgba(15,23,42,0.04)] dark:shadow-none transition-all duration-500 ease-[var(--ease-spring)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_24px_-8px_rgba(15,23,42,0.12)]",

  reasonIconWrapper: "flex-shrink-0 mt-1",
  reasonIcon: "text-[#1a73e8] transition-colors",

  reasonContent: "flex-1 pt-0.5",
  reasonHeader: "flex items-center gap-2 mb-1.5",
  reasonTitle: "text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
  reasonDescription: "text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
} as const;
