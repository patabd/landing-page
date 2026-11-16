import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyPata } from "@/components/site/WhyPata";
import { Pricing } from "@/components/site/Pricing";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <WhyPata />
        <Pricing />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
