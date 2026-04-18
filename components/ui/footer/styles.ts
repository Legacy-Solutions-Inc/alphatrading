export const footerStyles = {
  footer: "w-full bg-[#0a1628] text-white relative overflow-hidden",
  topBorder:
    "absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a73e8]/50 to-transparent",

  container: "container mx-auto max-w-7xl px-6 lg:px-8 relative z-10",
  mainGrid:
    "py-16 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 justify-between",

  // Brand column
  brandColumn: "flex flex-col gap-6",
  logoLink: "flex items-center gap-3 group",
  logoIcon:
    "relative flex h-11 w-11 items-center justify-center rounded-md bg-white/10 border border-white/10 transition-all group-hover:bg-white/15",
  logoTitle:
    "font-bold text-lg tracking-tight text-white leading-none",
  brandDescription: "text-sm text-white/50 max-w-xs leading-relaxed",

  // Contact column
  linkHeading: "font-semibold text-white text-sm tracking-wide mb-5",
  contactColumn: "md:justify-self-end",
  contactItem: "flex items-center gap-3 group py-2",
  contactIcon:
    "text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 ease-[var(--ease-spring)] flex-shrink-0",
  contactText:
    "text-sm text-white/50 group-hover:text-white/70 transition-colors",

  // Bottom bar
  bottomBar:
    "border-t border-white/[0.06] py-6 flex flex-col md:flex-row items-center justify-between gap-4",
  copyright: "text-xs text-white/55",
  bottomLinks: "flex items-center gap-6 text-xs text-white/55",
  bottomLink: "hover:text-white/80 transition-colors",
} as const;
