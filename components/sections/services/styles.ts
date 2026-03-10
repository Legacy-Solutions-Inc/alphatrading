export const servicesStyles = {
  section: "py-20 lg:py-32 bg-slate-50 dark:bg-[#030b17] relative overflow-hidden",
  topBorder: "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent",

  container: "container mx-auto px-6 lg:px-8 max-w-7xl relative z-10",

  // Header
  headerWrapper: "text-center max-w-3xl mx-auto mb-16 lg:mb-24",
  headerTitle: "text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6",
  headerSubtitle: "text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium",

  // Cards grid (Using CSS grid for elegant masonry-like flow or robust layout)
  grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",

  // Card base
  card: "group relative rounded-3xl p-8 lg:p-10 transition-all duration-500 ease-out flex flex-col h-full",

  // Apply a beautiful frosted/premium styling to normal cards, with a distinct pop for the Primary
  cardActive: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-2xl shadow-blue-900/20 -translate-y-2",
  cardDefault: "bg-white dark:bg-[#0c182c] border border-slate-200/60 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-2",

  cardOverlay: "hidden", // using pure css capabilities instead
  cardContent: "relative z-10 flex flex-col h-full",

  // Card header
  cardHeader: "flex items-start justify-between mb-8",

  // Icons get inverse styling based on active/default state
  cardIcon: "h-14 w-14 flex items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110",
  // We'll control icon colors inline or via these generic base classes for the container

  // Arrows - elegant floating interaction
  cardArrowActive: "h-10 w-10 flex items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1",
  cardArrowDefault: "h-10 w-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 shadow-sm",

  // Card body
  cardTitle: "text-2xl font-bold mb-4 tracking-tight",
  // Handled dynamically in TSX for active vs default colors

  cardDescription: "text-base leading-relaxed flex-grow",
} as const;
