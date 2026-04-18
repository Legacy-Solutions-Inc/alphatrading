export const whyChooseStyles = {
  section: "py-20 lg:py-32 bg-slate-50 dark:bg-[#030b17] overflow-hidden",
  container: "container mx-auto px-6 lg:px-8 max-w-7xl",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",

  /* ── LEFT: Image card ── */
  imageWrapper: "hidden lg:block relative rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none aspect-[4/3] group bg-[#0c3b6a]",
  image: "absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105",
  imageOverlay: "absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent",

  // Badge row (FAST · RELIABLE)
  badgeRow: "absolute top-5 left-5 flex gap-2.5 z-10",
  badgeFast: "rounded-md px-3 py-1.5 text-[11px] font-extrabold tracking-widest uppercase text-white bg-emerald-500 shadow-sm",
  badgeReliable: "rounded-md px-3 py-1.5 text-[11px] font-extrabold tracking-widest uppercase text-white bg-blue-600 shadow-sm",

  // Caption
  caption: "absolute bottom-5 left-5 right-5 text-white/95 text-sm font-medium italic z-10 text-shadow-sm",

  /* ── RIGHT: Content ── */
  content: "flex flex-col",
  heading: "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 leading-tight",
  description: "text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-xl",

  // Feature list
  featureList: "grid grid-cols-1 gap-4",
  featureItem: "flex items-start gap-4 group p-5 rounded-2xl bg-white dark:bg-[#111d32] border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/40 dark:hover:shadow-none hover:border-blue-100",

  featureIconWrapper: "flex-shrink-0 mt-1 text-[#1a73e8] transition-colors",

  featureTitle: "font-bold text-lg text-slate-900 dark:text-white mb-1.5 tracking-tight group-hover:text-blue-600 transition-colors",
  featureDesc: "text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
} as const;
