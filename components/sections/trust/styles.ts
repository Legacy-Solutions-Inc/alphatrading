export const trustStyles = {
  section: "py-20 lg:py-32 bg-white dark:bg-[#0a1628] relative overflow-hidden",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",

  // Left - Image
  leftColumn: "relative order-2 lg:order-1",
  imageWrapper: "relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none aspect-[4/3] group",
  image: "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
  imageOverlay: "absolute inset-0 bg-gradient-to-tr from-[#0a1628]/40 via-transparent to-transparent",

  // Right - Content
  rightColumn: "order-1 lg:order-2",
  title: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-5 tracking-tight leading-[1.15]",
  subtitle: "text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed",

  // Reasons list (as premium cards)
  reasonsList: "grid grid-cols-1 gap-4",
  reasonItem: "flex flex-col sm:flex-row items-start gap-4 sm:gap-5 group p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#111d32] border border-slate-100 dark:border-slate-800 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-none hover:bg-white dark:hover:bg-[#15233b]",

  reasonIconWrapper: "flex-shrink-0 mt-1",
  reasonIcon: "text-[#1a73e8] transition-colors",

  reasonContent: "flex-1 pt-0.5",
  reasonHeader: "flex items-center gap-2 mb-1.5",
  reasonTitle: "text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",
  reasonDescription: "text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
} as const;
