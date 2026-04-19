export const navbarStyles = {
  // Outer shell — always fixed, just controls top spacing
  header: (scrolled: boolean) =>
    `fixed top-0 inset-x-0 z-50 w-full transition-all duration-500 ease-[var(--ease-spring)] ${scrolled ? "pt-4" : "pt-0"}`,

  // Unscrolled: full-width bar
  container:
    "mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8 transition-all duration-500 ease-[var(--ease-spring)]",

  // Scrolled: floating pill island
  containerPill:
    "mx-auto flex items-center justify-between transition-all duration-500 ease-[var(--ease-spring)] w-[min(92vw,980px)] h-14 sm:h-16 pl-3 pr-3 sm:pl-4 sm:pr-2 rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/60",

  // Logo
  logoLink: "flex items-center gap-3 group",
  logoIcon:
    "relative flex items-center justify-center transition-transform duration-300 ease-[var(--ease-spring)] group-hover:scale-105",
  logoTitle:
    "font-bold text-lg tracking-tight text-[#0c3b6a] dark:text-white leading-none",

  // Desktop nav
  desktopNav: "hidden lg:flex items-center gap-1",
  navLink:
    "px-4 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-muted/50",

  // Desktop CTA
  desktopCta: "hidden lg:flex items-center gap-3",
  quoteBtn:
    "rounded-full px-6 h-11 text-sm font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] shadow-lg shadow-[#0c3b6a]/25 transition-all duration-300 ease-[var(--ease-spring)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0c3b6a]/30 active:scale-[0.98]",

  // Mobile menu button (always 44px tap target)
  mobileBtn:
    "lg:hidden relative flex h-11 w-11 items-center justify-center rounded-full text-[#0c3b6a] dark:text-white transition-colors hover:bg-muted/60",

  // Morphing hamburger lines — two bars rotate-translate to form X
  hamburgerLine:
    "absolute left-1/2 top-1/2 -translate-x-1/2 block h-[2px] w-5 bg-current rounded-full transition-transform duration-500 ease-[var(--ease-spring)]",

  // Full-screen glass mobile menu overlay
  mobileOverlay:
    "lg:hidden fixed inset-0 z-40 bg-white/90 backdrop-blur-3xl animate-in fade-in duration-300 ease-[var(--ease-out-expo)]",
  mobileOverlayNav:
    "flex flex-col items-center justify-center h-full gap-6 px-6",
  mobileOverlayLink:
    "text-3xl sm:text-4xl font-bold tracking-tight text-[#0a1628] transition-colors hover:text-[#1a73e8] opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-[var(--ease-spring)] fill-mode-forwards",

  // Drawer primary button (used inside overlay)
  drawerPrimaryBtn:
    "h-12 px-8 rounded-full font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] text-white shadow-lg shadow-[#0c3b6a]/20 transition-all duration-300 ease-[var(--ease-spring)] active:scale-[0.98]",
} as const;
