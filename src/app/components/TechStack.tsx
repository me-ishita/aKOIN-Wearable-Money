import { motion } from "motion/react";
import { Layers, Wallet, Globe2, Lock } from "lucide-react";
import { MetallicCard } from "./MetallicCard";

const pillars = [
  {
    icon: Layers,
    title: "Multi-Wallet Architecture",
    description:
      "Create unlimited sub-wallets for different purposes. Your master account can spawn wallets for family, travel, groceries, or any category you choose.",
    features: [
      "Unlimited sub-wallets",
      "Custom spending limits",
      "Individual wallet controls",
    ],
  },
  {
    icon: Lock,
    title: "Financial Firewall",
    description:
      "By not linking to your bank or UPI, we create a fundamental security layer. Only preloaded funds are at risk, not your entire financial life.",
    features: [
      "Zero bank linkage",
      "Instant freeze capability",
      "PIN protection for large purchases",
    ],
  },
  {
    icon: Globe2,
    title: "Global Currency",
    description:
      "Hold and convert multiple currencies at competitive rates. Perfect for international travel and global commerce.",
    features: [
      "5 major currencies",
      "Real-time conversion",
      "Competitive exchange rates",
    ],
  },
  {
    icon: Wallet,
    title: "Zero-Friction Hardware",
    description:
      "Passive NFC technology means no battery, no charging, and no maintenance. Your wearable just works, always.",
    features: [
      "No battery required",
      "100% waterproof",
      "Works without phone",
    ],
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            A Deeper Look at{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              aKoin.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built on four key pillars of innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <MetallicCard key={pillar.title} delay={index * 0.1}>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2">
                    {pillar.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 shadow-sm" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MetallicCard>
          ))}
        </div>
      </div>
    </section>
  );
}

