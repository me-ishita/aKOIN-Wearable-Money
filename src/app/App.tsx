import { ThemeProvider } from "./providers/ThemeProvider";
import { ScrollProgress } from "./components/ScrollProgress";
import { SmoothScroll } from "./components/SmoothScroll";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { HowItWorksVisual } from "./components/HowItWorksVisual";
import { Products } from "./components/Products";
import { RealWorldUsage } from "./components/RealWorldUsage";
import { Features } from "./components/Features";
import { WhyDifferent } from "./components/WhyDifferent";
import { UseCases } from "./components/UseCases";
import { Comparison } from "./components/Comparison";
import { TechStack } from "./components/TechStack";
import { Mission } from "./components/Mission";
import { B2B } from "./components/B2B";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (

    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <SmoothScroll />
        <Navigation />
        <main>
          <Hero />
          <HowItWorks />
          <UseCases />
          <HowItWorksVisual />
          <Products />
          <Features />
          <WhyDifferent />
          <RealWorldUsage />
          <TechStack />
          <Comparison />
          <Mission />
          <B2B />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}