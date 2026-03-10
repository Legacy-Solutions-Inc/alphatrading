export const servicesStyles = {
  section: "py-16 lg:py-24 bg-slate-50 dark:bg-[#030b17] relative overflow-hidden",
  topBorder: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",

  // Header
  headerWrapper: "text-center max-w-2xl mx-auto mb-12 lg:mb-16",
  headerTitle: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4",
  headerSubtitle: "text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium",

  // Cards grid
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",

  // Card base
  card: "group relative rounded-[1.5rem] p-6 lg:p-8 transition-all duration-500 ease-out flex flex-col h-full",

  // Apply a beautiful frosted/premium styling to normal cards
  cardActive: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-900/10 -translate-y-1.5",
  cardDefault: "bg-white dark:bg-[#0c182c] border border-slate-200/60 dark:border-slate-800 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1.5",

  cardOverlay: "hidden", // using pure css capabilities instead
  cardContent: "relative z-10 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between mb-6",

  // Icons get inverse styling based on active/default state
  cardIcon: "h-12 w-12 flex items-center justify-center rounded-xl transition-transform duration-500 group-hover:scale-105",

  // Arrows - elegant floating interaction
  cardArrowActive: "h-8 w-8 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
  cardArrowDefault: "h-8 w-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shadow-sm",

  // Card body
  cardTitle: "text-xl font-bold mb-3 tracking-tight",
  cardDescription: "text-sm leading-relaxed flex-grow",
} as const;
