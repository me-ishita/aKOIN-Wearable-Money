import { useEffect, useState } from "react";
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
import { About } from "./components/About";
import { B2B } from "./components/B2B";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  const [route, setRoute] = useState("home");

  useEffect(() => {
    const resolveRoute = () => {
      const hash = window.location.hash.toLowerCase().replace(/^#\/?/, "");
      return hash.startsWith("about") ? "about" : "home";
    };

    setRoute(resolveRoute());

    const handleHashChange = () => setRoute(resolveRoute());
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (

    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <ScrollProgress />
        <SmoothScroll />
        <Navigation />
        <main>
          {route === "home" ? (
            <>
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
              <B2B />
              <CTA />
            </>
          ) : (
            <About />
          )}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}