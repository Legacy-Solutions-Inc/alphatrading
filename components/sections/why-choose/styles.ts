export const whyChooseStyles = {
  section: "py-14 lg:py-24 bg-white dark:bg-[#0a1628] overflow-hidden",
  container:
    "container mx-auto px-6 lg:px-8 max-w-7xl",
  grid:
    "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center",

  /* ── LEFT: Image card ── */
  imageWrapper:
    "relative rounded-2xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] group bg-[#0c3b6a]",
  image:
    "absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105",
  imageOverlay:
    "absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/20 to-transparent",

  // Badge row (FAST · RELIABLE)
  badgeRow:
    "absolute top-4 left-4 flex gap-2",
  badgeFast:
    "rounded-md px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-white bg-emerald-500 shadow",
  badgeReliable:
    "rounded-md px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-white bg-[#1a73e8] shadow",

  // Caption
  caption:
    "absolute bottom-4 left-4 right-4 text-white/90 text-[13px] font-medium italic",

  /* ── RIGHT: Content ── */
  content: "flex flex-col",
  heading:
    "text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a1628] dark:text-white mb-4 leading-tight",
  headingAccent: "text-[#1a73e8]",
  description:
    "text-[15px] text-[#5a6f87] dark:text-[#8fa3bf] leading-relaxed mb-10 max-w-lg",

  // Feature list
  featureList: "space-y-8",
  featureItem: "flex items-start gap-4 group",
  featureIconWrapper:
    "flex-shrink-0 mt-0.5 h-10 w-10 rounded-xl bg-[#1a73e8]/10 dark:bg-[#1a73e8]/15 flex items-center justify-center text-[#1a73e8] group-hover:bg-[#1a73e8] group-hover:text-white transition-colors duration-300",
  featureTitle:
    "font-bold text-[16px] text-[#0a1628] dark:text-white mb-1",
  featureDesc:
    "text-[14px] text-[#5a6f87] dark:text-[#8fa3bf] leading-relaxed",
} as const;
