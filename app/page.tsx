import { Hero } from "@/components/sections/hero";
import { WhyChoose } from "@/components/sections/why-choose";
import { Services } from "@/components/sections/services";
import { Trust } from "@/components/sections/trust";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Services />
      <Trust />
      <CTA />
    </>
  );
}
