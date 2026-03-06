export const ctaStyles = {
  section: "py-16 lg:py-28 bg-[#f8fafc] dark:bg-[#0a1628] flex justify-center",
  container: "container px-4 md:px-6 w-full max-w-5xl",

  // Wrapper - adding a card-like floating effect
  wrapper:
    "flex flex-col md:flex-row bg-white dark:bg-[#111d32] rounded-2xl overflow-hidden shadow-2xl shadow-black/5 border border-border/50",

  /* --- LEFT COLUMN (Contact Info) --- */
  leftColumn:
    "relative w-full md:w-5/12 bg-[#254f7a] text-white p-10 md:p-12 flex flex-col justify-between overflow-hidden",
  // The subtle overlay graphic/gradient
  leftGraphic:
    "absolute -right-20 -bottom-20 w-80 h-80 bg-[#1a73e8]/20 rounded-full blur-[80px] pointer-events-none",

  leftHeaderWrapper: "relative z-10 mb-16",
  title: "text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight",
  subtitle: "text-white/80 text-[15px] leading-relaxed",

  leftContactWrapper: "relative z-10 space-y-6 mt-auto",
  contactItem: "flex items-center gap-4 group",
  contactIcon: "text-white/70 group-hover:text-white transition-colors",
  contactText:
    "text-sm font-medium text-white/90 group-hover:text-white transition-colors",

  /* --- RIGHT COLUMN (Form) --- */
  rightColumn: "w-full md:w-7/12 p-10 md:p-12",
  form: "space-y-6",

  // Form Fields
  fieldGroup: "space-y-2",
  fieldGroupRow: "grid grid-cols-1 md:grid-cols-2 gap-6",
  label: "text-sm font-medium text-foreground",
  input:
    "bg-transparent border-input h-11 focus-visible:ring-1 focus-visible:ring-[#254f7a] rounded-lg",
  textarea:
    "bg-transparent border-input focus-visible:ring-1 focus-visible:ring-[#254f7a] min-h-[120px] rounded-lg resize-none",

  // Submit Button
  submitBtn:
    "w-full h-12 text-base font-semibold bg-[#254f7a] hover:bg-[#1a3c61] text-white transition-all shadow-md hover:shadow-lg mt-4",
} as const;
