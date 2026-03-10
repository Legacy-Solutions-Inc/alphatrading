export const ctaStyles = {
  section: "py-16 lg:py-24 bg-slate-50 dark:bg-[#030b17] flex justify-center relative overflow-hidden",
  container: "container px-4 md:px-6 w-full max-w-5xl relative z-10",

  // Wrapper - adding a card-like floating effect
  wrapper: "flex flex-col md:flex-row bg-white dark:bg-[#0c182c] rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200/60 dark:border-slate-800",

  /* --- LEFT COLUMN (Contact Info) --- */
  leftColumn: "relative w-full md:w-5/12 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden",

  // The subtle overlay graphic/gradient
  leftGraphic: "absolute -right-20 -bottom-20 w-80 h-80 bg-blue-400/30 rounded-full blur-[80px] pointer-events-none",

  leftHeaderWrapper: "relative z-10 mb-12",
  title: "text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 tracking-tight leading-tight",
  subtitle: "text-blue-100/90 text-[15px] leading-relaxed",

  leftContactWrapper: "relative z-10 space-y-6 mt-auto",
  contactItem: "flex items-center gap-3 group cursor-pointer",
  contactIcon: "text-blue-200 group-hover:text-white transition-colors bg-white/10 p-2.5 rounded-xl backdrop-blur-sm group-hover:bg-white/20",
  contactText: "text-sm font-medium text-blue-50 group-hover:text-white transition-colors",

  /* --- RIGHT COLUMN (Form) --- */
  rightColumn: "w-full md:w-7/12 p-8 md:p-10 bg-white dark:bg-[#0c182c]",
  form: "space-y-5",

  // Form Fields
  fieldGroup: "space-y-1.5",
  fieldGroupRow: "grid grid-cols-1 md:grid-cols-2 gap-5",
  label: "text-sm font-bold text-slate-700 dark:text-slate-300",
  input: "bg-slate-50 dark:bg-[#111d32] border border-slate-200 dark:border-slate-800 h-12 px-4 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent rounded-xl w-full text-slate-900 dark:text-white transition-all shadow-sm outline-none text-sm",
  textarea: "bg-slate-50 dark:bg-[#111d32] border border-slate-200 dark:border-slate-800 p-4 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent min-h-[120px] rounded-xl resize-none w-full text-slate-900 dark:text-white transition-all shadow-sm outline-none text-sm",

  // Submit Button
  submitBtn: "w-full h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 mt-5 rounded-xl flex items-center justify-center",
} as const;
