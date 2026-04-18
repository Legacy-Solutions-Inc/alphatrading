"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { ctaStyles } from "./styles";

export function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate_limited">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const storedSubmissions = localStorage.getItem("cta_submissions");
    let submissions: number[] = storedSubmissions ? JSON.parse(storedSubmissions) : [];
    submissions = submissions.filter((timestamp: number) => now - timestamp < oneHour);

    if (submissions.length >= 2) {
      setSubmitStatus("rate_limited");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Formspree endpoint missing");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        submissions.push(now);
        localStorage.setItem("cta_submissions", JSON.stringify(submissions));
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={ctaStyles.section}>
      <div className={ctaStyles.container}>
        <div className={ctaStyles.wrapper}>
          {/* LEFT COLUMN - Contact Info */}
          <div className={ctaStyles.leftColumn}>
            <div className={ctaStyles.leftHeaderWrapper}>
              <h2 className={ctaStyles.title}>Get a Quote</h2>
              <p className={ctaStyles.subtitle}>
                Ready to start importing? Fill out the form and our team will
                get back to you within 24 hours.
              </p>
            </div>

            <div className={ctaStyles.leftContactWrapper}>
              <a href="tel:+639271422793" className={ctaStyles.contactItem}>
                <span className={ctaStyles.contactIcon}>
                  <Phone className="h-5 w-5" />
                </span>
                <span className={ctaStyles.contactText}>
                  +63 927 142 2793
                </span>
              </a>
              <a href="mailto:sales@alphatrade.ph" className={ctaStyles.contactItem}>
                <span className={ctaStyles.contactIcon}>
                  <Mail className="h-5 w-5" />
                </span>
                <span className={ctaStyles.contactText}>
                  sales@alphatrade.ph
                </span>
              </a>
              <a
                href="https://facebook.com/alpha.trade.corp"
                target="_blank"
                rel="noopener noreferrer"
                className={ctaStyles.contactItem}
              >
                <span className={ctaStyles.contactIcon}>
                  <MapPin className="h-5 w-5" />
                </span>
                <span className={`${ctaStyles.contactText} hover:underline decoration-white/30`}>
                  facebook.com/alpha.trade.corp
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className={ctaStyles.rightColumn}>
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-[#FCA311]/20 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-10 w-10 text-[#FCA311]" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-sm">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  className={ctaStyles.submitBtn}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form className={ctaStyles.form} onSubmit={handleSubmit}>
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/50 rounded-md text-red-600 dark:text-red-400 text-sm mb-6 animate-in fade-in">
                    Failed to send message. Please try again or contact us directly via email.
                  </div>
                )}
                {submitStatus === "rate_limited" && (
                  <div className="p-4 bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/50 rounded-md text-orange-600 dark:text-orange-400 text-sm mb-6 animate-in fade-in">
                    You have reached the limit of 2 messages per hour. Please try again later or contact us directly.
                  </div>
                )}
                <div className={ctaStyles.fieldGroup}>
                  <Label htmlFor="fullName" className={ctaStyles.label}>
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Juan dela Cruz"
                    className={ctaStyles.input}
                  />
                </div>

                <div className={ctaStyles.fieldGroup}>
                  <Label htmlFor="companyName" className={ctaStyles.label}>
                    Company Name (Optional)
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    placeholder="JDC Enterprises"
                    className={ctaStyles.input}
                  />
                </div>

                <div className={ctaStyles.fieldGroup}>
                  <Label htmlFor="email" className={ctaStyles.label}>
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="juan@example.com"
                    className={ctaStyles.input}
                  />
                </div>

                <div className={ctaStyles.fieldGroup}>
                  <Label htmlFor="message" className={ctaStyles.label}>
                    What are you planning to import?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Describe the goods, estimated weight, and volume..."
                    className={ctaStyles.textarea}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className={ctaStyles.submitBtn}>
                  {isSubmitting ? "Sending..." : "Contact Us"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
