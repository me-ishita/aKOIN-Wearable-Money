import { motion } from "motion/react";
import {
  Shield,
  Smartphone,
  Globe,
  Droplets,
  Battery,
  Lock,
  Zap,
  Wallet,
} from "lucide-react";
import { MetallicCard } from "./MetallicCard";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Not linked to your bank or UPI. Only preloaded funds are at risk, not your life savings.",
  },
  {
    icon: Lock,
    title: "Instant Freeze",
    description:
      "Lost your wearable? Tap a button in the app to freeze it instantly.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "Hold INR, USD, GBP, EUR, and JPY in one app. Pay like a local anywhere.",
  },
  {
    icon: Smartphone,
    title: "Phone-Free Payments",
    description:
      "Your wearable works independently using NFC. No phone, no battery, no problem.",
  },
  {
    icon: Droplets,
    title: "100% Waterproof",
    description:
      "Take it swimming, running, or to the beach. Built for real life.",
  },
  {
    icon: Battery,
    title: "No Charging Ever",
    description:
      "Powered by the payment terminal. Zero maintenance, infinite convenience.",
  },
  {
    icon: Wallet,
    title: "Smart Sub-Wallets",
    description:
      'Create unlimited sub-wallets like "Coffee", "Travel", or "Family" with custom limits.',
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Tap and go in under a second. Faster than pulling out your phone or card.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose aKOIN?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fundamental upgrade to your financial security and convenience
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <MetallicCard key={feature.title} delay={index * 0.05}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </MetallicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
