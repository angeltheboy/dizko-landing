import { EarlyAccess } from "@/components/EarlyAccess";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Problem } from "@/components/Problem";
import { Quote } from "@/components/Quote";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Quote />
      <Testimonials />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
