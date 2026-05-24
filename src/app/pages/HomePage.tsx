import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { HowItWorksVisual } from "../components/HowItWorksVisual";
import { Products } from "../components/Products";
import { RealWorldUsage } from "../components/RealWorldUsage";
import { Features } from "../components/Features";
import { WhyDifferent } from "../components/WhyDifferent";
import { UseCases } from "../components/UseCases";
import { Comparison } from "../components/Comparison";
import { TechStack } from "../components/TechStack";
import { B2B } from "../components/B2B";
import { CTA } from "../components/CTA";

export function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <HowItWorks />
      <HowItWorksVisual />      
      <UseCases />
      <Features />
      <WhyDifferent />
      <RealWorldUsage />  
      <TechStack />
      <Comparison />
      <B2B />
      <CTA />
    </>
  );
}
