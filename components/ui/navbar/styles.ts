export const navbarStyles = {
  header: (scrolled: boolean) =>
    `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
      ? "bg-white dark:bg-[#0a1628] border-b border-border/60"
      : "bg-transparent"
    }`,

  container:
    "container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8",

  // Logo
  logoLink: "flex items-center gap-3 group",
  logoIcon:
    "relative flex h-11 w-11 items-center justify-center transition-transform duration-300 ease-[var(--ease-spring)] group-hover:scale-105",
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

  // Mobile button
  mobileBtn:
    "lg:hidden flex h-11 w-11 items-center justify-center rounded-md border border-border/50 bg-background transition-colors hover:bg-muted",

  // Mobile drawer
  drawer:
    "lg:hidden border-t border-border/50 bg-white dark:bg-[#0a1628] animate-in slide-in-from-top-2 fade-in duration-300 ease-out",
  drawerContainer:
    "container mx-auto max-w-7xl px-6 py-6 flex flex-col gap-2",
  drawerLink:
    "px-4 py-3 text-base font-medium text-foreground rounded-md transition-colors hover:bg-muted/50",
  drawerDivider: "border-t border-border/50 pt-4 mt-2 flex flex-col gap-2",
  drawerPrimaryBtn:
    "w-full h-12 rounded-md font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] transition-all duration-300 ease-[var(--ease-spring)] active:scale-[0.98]",
} as const;
