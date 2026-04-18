import { Star, Quote } from "lucide-react";
import { testimonialsStyles } from "./styles";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO, Santos Trading Co.",
    content:
      "Alpha Trade has transformed our import operations. What used to take weeks of coordination now happens seamlessly. Their customs expertise alone has saved us thousands in avoided delays.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "Operations Manager, VisMin Distributors",
    content:
      "The real-time tracking and proactive communication sets them apart. We always know exactly where our shipments are and when they'll arrive. Truly world-class service.",
    rating: 5,
  },
  {
    name: "Angela Reyes",
    role: "Founder, Iloilo Home Essentials",
    content:
      "As a small business owner, I needed a logistics partner who could scale with me. Alpha Trade offered flexible warehousing and competitive rates that larger companies couldn't match.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className={testimonialsStyles.section}>
      <div className={testimonialsStyles.topBorder} />

      <div className={testimonialsStyles.container}>
        {/* Header */}
        <div className={testimonialsStyles.headerWrapper}>
          <div className={testimonialsStyles.headerBadge}>Client Stories</div>
          <h2 className={testimonialsStyles.headerTitle}>
            Trusted by Businesses
            <br />
            <span className="text-[#1a73e8]">Across Iloilo</span>
          </h2>
          <p className={testimonialsStyles.headerSubtitle}>
            Hear from the entrepreneurs and businesses who count on us for their
            supply chain needs.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className={testimonialsStyles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={testimonialsStyles.card}>
              <div className={testimonialsStyles.quoteWrapper}>
                <Quote className="h-8 w-8 text-[#1a73e8]/20" />
              </div>

              <div className={testimonialsStyles.starsRow}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className={testimonialsStyles.content}>
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className={testimonialsStyles.authorWrapper}>
                <div className={testimonialsStyles.authorAvatar}>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className={testimonialsStyles.authorName}>
                    {testimonial.name}
                  </p>
                  <p className={testimonialsStyles.authorRole}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
