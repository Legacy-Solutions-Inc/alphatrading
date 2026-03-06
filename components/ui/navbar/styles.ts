export const navbarStyles = {
  header: (scrolled: boolean) =>
    `fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
      ? "bg-white/80 dark:bg-[#0a1628]/80 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-b border-border/50"
      : "bg-transparent"
    }`,

  container:
    "container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8",

  // Logo
  logoLink: "flex items-center gap-3 group",
  logoIcon:
    "relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#0c3b6a] text-white shadow-lg shadow-[#0c3b6a]/30 transition-transform group-hover:scale-105",
  logoGradient:
    "absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent",
  logoTitle:
    "font-bold text-lg tracking-tight text-[#0c3b6a] dark:text-white leading-none",
  logoSubtitle:
    "text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground leading-none mt-0.5",

  // Desktop nav
  desktopNav: "hidden lg:flex items-center gap-1",
  navLink:
    "px-4 py-2 text-sm font-medium text-muted-foreground rounded-lg transition-all hover:text-foreground hover:bg-muted/50",

  // Desktop CTA
  desktopCta: "hidden lg:flex items-center gap-3",
  signInBtn:
    "text-sm font-medium text-muted-foreground hover:text-foreground",
  quoteBtn:
    "rounded-full px-6 h-11 text-sm font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] shadow-lg shadow-[#0c3b6a]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0c3b6a]/30",

  // Mobile button
  mobileBtn:
    "lg:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur transition-colors hover:bg-muted",

  // Mobile drawer
  drawer:
    "lg:hidden border-t border-border/50 bg-white/95 dark:bg-[#0a1628]/95 backdrop-blur-xl",
  drawerContainer:
    "container mx-auto max-w-7xl px-6 py-6 flex flex-col gap-2",
  drawerLink:
    "px-4 py-3 text-base font-medium text-foreground rounded-xl transition-colors hover:bg-muted/50",
  drawerDivider: "border-t border-border/50 pt-4 mt-2 flex flex-col gap-2",
  drawerOutlineBtn: "w-full h-12 rounded-xl font-semibold",
  drawerPrimaryBtn:
    "w-full h-12 rounded-xl font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54]",
} as const;
