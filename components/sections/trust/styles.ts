export const trustStyles = {
  section: "py-16 lg:py-28 bg-[#f8fafc] dark:bg-[#0d1f3c] relative overflow-hidden",
  orbRight:
    "absolute -right-80 -top-80 w-[700px] h-[700px] rounded-full bg-[#1a73e8]/[0.03] blur-[80px] pointer-events-none",
  orbLeft:
    "absolute -left-40 -bottom-40 w-[400px] h-[400px] rounded-full bg-[#0c3b6a]/[0.04] blur-[60px] pointer-events-none",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",

  // Left - Image
  leftColumn: "relative order-2 lg:order-1",
  imageWrapper:
    "relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 aspect-[4/3] group",
  image:
    "absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
  imageOverlay:
    "absolute inset-0 bg-gradient-to-tr from-[#0a1628]/60 via-transparent to-transparent",

  // Floating badge
  floatingBadge:
    "absolute -bottom-6 -right-4 lg:-right-8 bg-white dark:bg-[#111d32] rounded-2xl px-5 py-4 shadow-xl shadow-black/10 border border-border/50 dark:border-[#1e3351] animate-float",
  floatingBadgeIcon:
    "h-12 w-12 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center",
  floatingBadgeTitle: "font-bold text-foreground leading-none",
  floatingBadgeLabel: "text-xs text-muted-foreground mt-0.5",

  // Stats row
  statsGrid: "mt-12 grid grid-cols-3 gap-4",
  statCard:
    "text-center p-4 rounded-2xl bg-white dark:bg-[#111d32] border border-border/50 dark:border-[#1e3351] shadow-sm",
  statValue: "font-extrabold text-xl text-foreground leading-none",
  statLabel: "text-[11px] text-muted-foreground mt-1 font-medium",

  // Right - Content
  rightColumn: "order-1 lg:order-2",
  badge:
    "inline-flex items-center rounded-full border border-[#1a73e8]/20 bg-[#1a73e8]/5 px-4 py-1.5 text-xs font-semibold text-[#1a73e8] tracking-wide uppercase mb-6",
  title:
    "text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-5 tracking-tight leading-[1.15]",
  subtitle: "text-lg text-muted-foreground mb-12 leading-relaxed",

  // Reasons list
  reasonsList: "space-y-8",
  reasonItem: "flex gap-5 group",
  reasonIconWrapper: "flex-shrink-0",
  reasonIcon:
    "h-12 w-12 flex items-center justify-center rounded-2xl bg-[#0c3b6a]/10 dark:bg-[#1a73e8]/10 text-[#0c3b6a] dark:text-[#3b9cff] group-hover:bg-[#0c3b6a] group-hover:text-white transition-colors duration-300",
  reasonContent: "flex-1",
  reasonHeader: "flex items-center gap-3 mb-1.5",
  reasonTitle: "text-lg font-bold text-foreground",
  reasonMetric:
    "text-xs font-semibold text-[#1a73e8] bg-[#1a73e8]/10 px-2 py-0.5 rounded-full",
  reasonDescription: "text-[15px] text-muted-foreground leading-relaxed",
} as const;
