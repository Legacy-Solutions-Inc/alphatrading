export const ctaStyles = {
  section: "py-20 lg:py-32 bg-slate-50 dark:bg-[#030b17] flex justify-center relative overflow-hidden",
  container: "container px-4 md:px-6 w-full max-w-5xl relative z-10",

  // Doppelrand shell wraps the entire form card
  shell: "rounded-[1.625rem] p-1.5 bg-slate-100/70 dark:bg-slate-800/30 ring-1 ring-slate-200/70 dark:ring-slate-700/50 shadow-xl shadow-slate-200/40 dark:shadow-none",

  // Inner wrapper — the actual form card
  wrapper: "flex flex-col md:flex-row bg-white dark:bg-[#0c182c] rounded-[1.25rem] overflow-hidden ring-1 ring-slate-200/40 dark:ring-slate-700/30",

  /* --- LEFT COLUMN (Contact Info) --- */
  leftColumn: "relative w-full md:w-5/12 bg-gradient-to-br from-blue-700 to-indigo-900 text-white p-8 md:p-10 flex flex-col justify-between overflow-hidden",

  leftHeaderWrapper: "relative z-10 mb-12",
  title: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-[-0.02em] leading-[1.05]",
  subtitle: "text-blue-100/90 text-[15px] leading-relaxed",

  leftContactWrapper: "relative z-10 space-y-6 mt-auto",
  contactItem: "flex items-center gap-3 group cursor-pointer py-2 -my-2",
  contactIcon: "text-blue-200 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 ease-[var(--ease-spring)] flex-shrink-0",
  contactText: "text-sm font-medium text-blue-50 group-hover:text-white transition-colors",

  /* --- RIGHT COLUMN (Form) --- */
  rightColumn: "w-full md:w-7/12 p-8 md:p-10 bg-white dark:bg-[#0c182c]",
  form: "space-y-5",

  // Form Fields
  fieldGroup: "space-y-1.5",
  fieldGroupRow: "grid grid-cols-1 md:grid-cols-2 gap-5",
  label: "text-sm font-bold text-slate-700 dark:text-slate-300",
  input: "bg-slate-50 dark:bg-[#111d32] border border-slate-200 dark:border-slate-800 h-12 px-4 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent rounded-md w-full text-slate-900 dark:text-white transition-all shadow-sm outline-none text-sm",
  textarea: "bg-slate-50 dark:bg-[#111d32] border border-slate-200 dark:border-slate-800 p-4 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent min-h-[120px] rounded-md resize-none w-full text-slate-900 dark:text-white transition-all shadow-sm outline-none text-sm",

  // Submit Button
  submitBtn: "w-full h-12 text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-[var(--ease-spring)] shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-[0.98] mt-5 rounded-md flex items-center justify-center",
} as const;
