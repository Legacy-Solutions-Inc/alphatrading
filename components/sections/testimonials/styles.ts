export const testimonialsStyles = {
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

  // Cards
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  card: "group relative rounded-3xl bg-gradient-to-br from-[#f8fafc] to-white dark:from-[#111d32] dark:to-[#0d1f3c] border border-border/50 dark:border-[#1e3351]/50 p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.03] hover:-translate-y-1",

  quoteWrapper: "mb-6",
  starsRow: "flex items-center gap-1 mb-5",
  content: "text-[15px] text-muted-foreground leading-relaxed mb-8",

  // Author
  authorWrapper:
    "flex items-center gap-3 pt-6 border-t border-border/50 dark:border-[#1e3351]/50",
  authorAvatar:
    "h-11 w-11 rounded-full bg-gradient-to-br from-[#0c3b6a] to-[#1a73e8] flex items-center justify-center text-white font-bold text-sm",
  authorName: "font-semibold text-sm text-foreground",
  authorRole: "text-xs text-muted-foreground",
} as const;
