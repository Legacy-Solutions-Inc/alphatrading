export const heroStyles = {
  // Section: flex column on mobile (stacked), row on desktop (side by side)
  section:
    "relative flex flex-col lg:flex-row lg:items-stretch lg:min-h-screen overflow-hidden bg-white dark:bg-[#0a1628]",

  // LEFT content pane — full width on mobile, half on desktop
  leftPane:
    "flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-10 lg:pt-40 lg:pb-24 relative z-10",

  // Badge pill
  badge:
    "inline-flex items-center self-start gap-2 rounded-full border border-[#1a73e8]/25 bg-[#eef4ff] px-4 py-1.5 text-[13px] font-semibold text-[#1a73e8] tracking-wide mb-6 lg:mb-8",
  badgeDot:
    "h-1.5 w-1.5 rounded-full bg-[#1a73e8] animate-pulse",

  // Heading
  heading:
    "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#0a1628] dark:text-white mb-5 lg:mb-6",
  headingBlue:
    "text-[#1a73e8]",

  // Sub-text
  description:
    "text-[15px] lg:text-[17px] text-[#5a6f87] dark:text-[#8fa3bf] max-w-md mb-8 lg:mb-10 leading-relaxed",

  // CTA row — stack on mobile, row on sm+
  ctaRow:
    "flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 lg:mb-10",

  primaryBtn:
    "inline-flex items-center justify-center gap-2 rounded-lg h-12 sm:h-13 px-7 py-3 text-[15px] font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] text-white shadow-lg shadow-[#0c3b6a]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group",

  secondaryBtn:
    "inline-flex items-center justify-center gap-2 rounded-lg h-12 sm:h-13 px-7 py-3 text-[15px] font-semibold border-2 border-[#d0dae8] dark:border-[#1e3351] text-[#0a1628] dark:text-white bg-transparent hover:bg-[#f4f7fc] dark:hover:bg-[#111d32] transition-all duration-200",

  // Trust strip
  trustRow: "flex flex-wrap items-center gap-x-5 gap-y-2",
  trustItem:
    "flex items-center gap-1.5 text-[13px] font-medium text-[#5a6f87] dark:text-[#8fa3bf]",

  // RIGHT image pane — shown as block on mobile (aspect 16/9), full-height absolute on desktop
  rightPane:
    "relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto",
  image:
    "absolute inset-0 w-full h-full object-cover object-center",
  imageOverlayLeft:
    "hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#0a1628] to-transparent pointer-events-none",
} as const;
