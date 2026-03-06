export const heroStyles = {
  // Full-viewport section split into two halves
  section:
    "relative min-h-screen flex items-stretch overflow-hidden bg-white dark:bg-[#0a1628]",

  // LEFT content pane
  leftPane:
    "flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-12 lg:px-16 xl:px-24 pt-32 pb-16 lg:pt-40 lg:pb-24 relative z-10",

  // Badge pill
  badge:
    "inline-flex items-center self-start gap-2 rounded-full border border-[#1a73e8]/25 bg-[#eef4ff] px-4 py-1.5 text-[13px] font-semibold text-[#1a73e8] tracking-wide mb-8",
  badgeDot:
    "h-1.5 w-1.5 rounded-full bg-[#1a73e8] animate-pulse",

  // Heading
  heading:
    "text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#0a1628] dark:text-white mb-6",
  headingBlue:
    "text-[#1a73e8]",

  // Sub-text
  description:
    "text-[17px] text-[#5a6f87] dark:text-[#8fa3bf] max-w-md mb-10 leading-relaxed",

  // CTA row
  ctaRow: "flex flex-col sm:flex-row flex-wrap items-center gap-4 mb-10",

  primaryBtn:
    "inline-flex items-center gap-2 rounded-lg h-13 px-7 py-3.5 text-[15px] font-semibold bg-[#0c3b6a] hover:bg-[#0a2f54] text-white shadow-lg shadow-[#0c3b6a]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group",

  secondaryBtn:
    "inline-flex items-center gap-2 rounded-lg h-13 px-7 py-3.5 text-[15px] font-semibold border-2 border-[#d0dae8] dark:border-[#1e3351] text-[#0a1628] dark:text-white bg-transparent hover:bg-[#f4f7fc] dark:hover:bg-[#111d32] transition-all duration-200",

  // Trust strip
  trustRow: "flex flex-wrap items-center gap-x-6 gap-y-2",
  trustItem:
    "flex items-center gap-1.5 text-[13px] font-medium text-[#5a6f87] dark:text-[#8fa3bf]",

  // RIGHT image pane — full height, no padding, edge-to-edge
  rightPane:
    "hidden lg:block lg:w-1/2 relative",
  image:
    "absolute inset-0 w-full h-full object-cover object-center",
  imageOverlayLeft:
    "absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-[#0a1628] to-transparent pointer-events-none",
} as const;
