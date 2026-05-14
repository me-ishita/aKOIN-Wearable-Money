import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check } from "lucide-react";

const usageScenarios = [
  {
    title: "Retail Shopping",
    description: "Quick, contactless payments at your favorite stores",
    image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Coffee Shops & Cafes",
    description: "Start your day without reaching for your wallet",
    image: "https://images.unsplash.com/photo-1654263937079-f63a3ea4d48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Transit & Travel",
    description: "Seamless payments at ticket counters and terminals",
    image: "https://images.unsplash.com/photo-1775751678032-216d96fc26ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    title: "Hotels & Restaurants",
    description: "Premium service with just a tap of your wearable",
    image: "https://images.unsplash.com/photo-1772734645633-5bfbbb87da88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function RealWorldUsage() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real World, Real Convenience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            aKOIN works everywhere you need it, from your morning coffee to international travel
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {usageScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted border-2 border-border/50 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                  src={scenario.image}
                  alt={scenario.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                      <Check className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {scenario.title}
                      </h3>
                      <p className="text-white/80">
                        {scenario.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Accepted Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-medium">150+ Countries</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm font-medium">1M+ Merchants</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
