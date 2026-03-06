export const servicesStyles = {
  section: "py-28 bg-white dark:bg-[#0a1628] relative overflow-hidden",
  topBorder:
    "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl",

  // Header
  headerWrapper: "text-center max-w-2xl mx-auto mb-20",
  headerBadge:
    "inline-flex items-center rounded-full border border-[#1a73e8]/20 bg-[#1a73e8]/5 px-4 py-1.5 text-xs font-semibold text-[#1a73e8] tracking-wide uppercase mb-6",
  headerTitle:
    "text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-5 tracking-tight",
  headerSubtitle: "text-lg text-muted-foreground leading-relaxed",

  // Cards grid
  grid: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",

  // Card
  card: "group relative rounded-3xl bg-gradient-to-br from-[#f8fafc] to-white dark:from-[#111d32] dark:to-[#0d1f3c] border border-border/50 dark:border-[#1e3351]/50 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.03] hover:-translate-y-1 hover:border-[#1a73e8]/20",
  cardOverlay: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  cardContent: "relative z-10",

  // Card header
  cardHeader: "flex items-start justify-between mb-6",
  cardIcon:
    "h-14 w-14 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110",
  cardArrow:
    "h-10 w-10 flex items-center justify-center rounded-full bg-transparent group-hover:bg-[#0c3b6a] text-transparent group-hover:text-white transition-all duration-300",

  // Card body
  cardTitle:
    "text-xl font-bold text-foreground mb-3 group-hover:text-[#0c3b6a] dark:group-hover:text-white transition-colors",
  cardDescription: "text-[15px] text-muted-foreground leading-relaxed",
} as const;
