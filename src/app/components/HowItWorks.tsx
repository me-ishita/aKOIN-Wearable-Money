import { motion } from "motion/react";
import { Wallet, Plus, Zap } from "lucide-react";
import { MetallicCard } from "./MetallicCard";

const steps = [
  {
    number: "01",
    icon: Wallet,
    title: "Load Your Account",
    description:
      "Top up your secure aKOIN master account from any source. Quick, simple, and safe.",
  },
  {
    number: "02",
    icon: Plus,
    title: "Create & Assign",
    description:
      'Create sub-wallets (e.g., "Coffee", "Travel") and link them to your wearable device.',
  },
  {
    number: "03",
    icon: Zap,
    title: "Tap & Go",
    description:
      "Pay instantly and securely with a simple tap. No phone needed, no hassle.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get Started in{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Three Steps.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Setting up your aKOIN account is simple and takes just minutes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <MetallicCard delay={index * 0.2} className="h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shadow-lg">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-6xl font-bold bg-gradient-to-br from-foreground/20 to-foreground/5 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </MetallicCard>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
