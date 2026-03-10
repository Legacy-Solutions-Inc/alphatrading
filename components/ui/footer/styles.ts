export const footerStyles = {
  footer: "w-full bg-[#0a1628] text-white relative overflow-hidden",
  topBorder:
    "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a73e8]/50 to-transparent",
  glow: "absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a73e8]/[0.03] rounded-full blur-[100px] pointer-events-none",

  container: "container mx-auto max-w-7xl px-6 lg:px-8 relative z-10",
  mainGrid:
    "py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 justify-between",

  // Brand column
  brandColumn: "flex flex-col gap-6",
  logoLink: "flex items-center gap-3 group",
  logoIcon:
    "relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/10 transition-all group-hover:bg-white/15",
  logoTitle:
    "font-bold text-lg tracking-tight text-white leading-none",
  logoSubtitle:
    "text-[10px] font-medium tracking-[0.2em] uppercase text-white/40 leading-none mt-0.5",
  brandDescription: "text-sm text-white/50 max-w-xs leading-relaxed",
  socialRow: "flex items-center gap-3 mt-2",
  socialLink:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 text-xs font-bold hover:bg-white/10 hover:text-white transition-colors",

  // Link columns
  linkColumn: "lg:col-span-2",
  linkHeading: "font-semibold text-white text-sm tracking-wide mb-5",
  linkList: "space-y-3",
  linkItem:
    "text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1 group",
  linkArrow:
    "h-3 w-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all",

  // Contact column
  contactColumn: "md:justify-self-end",
  contactItem: "flex items-center gap-3 group",
  contactItemStart: "flex items-start gap-3 group",
  contactIcon:
    "flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-colors flex-shrink-0",
  contactText:
    "text-sm text-white/50 group-hover:text-white/70 transition-colors",

  // Bottom bar
  bottomBar:
    "border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4",
  copyright: "text-xs text-white/30",
  bottomLinks: "flex items-center gap-6 text-xs text-white/30",
  bottomLink: "hover:text-white/60 transition-colors",
} as const;
