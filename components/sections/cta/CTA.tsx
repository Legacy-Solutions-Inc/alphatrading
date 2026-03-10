"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { ctaStyles } from "./styles";

export function CTA() {
  return (
    <section id="contact" className={ctaStyles.section}>
      <div className={ctaStyles.container}>
        <div className={ctaStyles.wrapper}>
          {/* LEFT COLUMN - Contact Info */}
          <div className={ctaStyles.leftColumn}>
            <div className={ctaStyles.leftGraphic} />

            <div className={ctaStyles.leftHeaderWrapper}>
              <h2 className={ctaStyles.title}>Get a Quote</h2>
              <p className={ctaStyles.subtitle}>
                Ready to start importing? Fill out the form and our team will
                get back to you within 24 hours.
              </p>
            </div>

            <div className={ctaStyles.leftContactWrapper}>
              <div className={ctaStyles.contactItem}>
                <Phone className={`h-5 w-5 ${ctaStyles.contactIcon}`} />
                <span className={ctaStyles.contactText}>
                  +63 927 142 2793
                </span>
              </div>
              <div className={ctaStyles.contactItem}>
                <Mail className={`h-5 w-5 ${ctaStyles.contactIcon}`} />
                <span className={ctaStyles.contactText}>
                  sales@alphatrade.ph
                </span>
              </div>
              <div className={ctaStyles.contactItem}>
                <MapPin className={`h-5 w-5 ${ctaStyles.contactIcon}`} />
                <a
                  href="https://facebook.com/alpha.trade.corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaStyles.contactText} hover:underline decoration-white/30 hover:text-white transition-colors cursor-pointer`}
                >
                  facebook.com/alpha.trade.corp
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className={ctaStyles.rightColumn}>
            <form className={ctaStyles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={ctaStyles.fieldGroup}>
                <Label htmlFor="fullName" className={ctaStyles.label}>
                  Full Name
                </Label>
                <Input
                  id="fullName"
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
                  type="email"
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
                  placeholder="Describe the goods, estimated weight, and volume..."
                  className={ctaStyles.textarea}
                />
              </div>

              <Button type="submit" className={ctaStyles.submitBtn}>
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
