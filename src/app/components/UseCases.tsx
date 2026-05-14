import { motion } from "motion/react";
import { Dumbbell, Users, ShieldCheck } from "lucide-react";
import { MetallicCard } from "./MetallicCard";

const useCases = [
  {
    icon: Dumbbell,
    title: "The Active & Phone-Free",
    description:
      "Individuals who run, swim, or go to the gym and don't want to carry a bulky phone or wallet.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Users,
    title: "Parents & Caregivers",
    description:
      "Give a wearable to children or elderly parents for emergencies, with full control over spending limits.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: ShieldCheck,
    title: "The Security-Conscious",
    description:
      "Users who want a secure way to pay without exposing their primary bank accounts to fraud or skimming.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
];

export function UseCases() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built For Your Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            aKOIN adapts to your lifestyle and security needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <MetallicCard key={useCase.title} delay={index * 0.15}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-lg">
                <useCase.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
            </MetallicCard>
          ))}
        </div>
      </div>
    </section>
  );
}
