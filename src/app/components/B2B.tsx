import { motion } from "motion/react";
import { Building2, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MetallicCard } from "./MetallicCard";

const benefits = [
  {
    icon: Building2,
    title: "Co-Branded Wearables",
    description:
      "Launch your own branded payment ring or bracelet. Perfect for loyalty programs and brand enhancement.",
  },
  {
    icon: Sparkles,
    title: "Closed-Loop Payments",
    description:
      "Power your event, festival, or corporate campus with a secure, self-contained payment ecosystem.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Advantage",
    description:
      "Differentiate your business with cutting-edge, secure payment technology.",
  },
];

export function B2B() {
  return (
    <section id="b2b" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Integrate {" "}
            <span
              style={{
                background: "linear-gradient(90deg,#D4AF37, #C89B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wearable Money.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Offer your customers the future of payments with our B2B platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <MetallicCard key={benefit.title} delay={index * 0.1}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 shadow-lg">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </MetallicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
