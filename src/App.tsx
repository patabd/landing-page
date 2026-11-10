import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { PublicationPreview } from "@/components/site/PublicationPreview";
import { WhyPata } from "@/components/site/WhyPata";
import { Pricing } from "@/components/site/Pricing";
import { Footer } from "@/components/site/Footer";

export default function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <PublicationPreview />
        <WhyPata />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
