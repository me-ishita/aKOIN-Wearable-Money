import { motion } from "motion/react";

const logos = ["TechCrunch", "Forbes", "Wired", "Fast Company", "Bloomberg"];

export function Mission() {
  return (
    <section id="security" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Mission: To Redefine the Transaction
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We believe that payments should be secure, seamless, and
                separate from your core identity. In a world of constant data
                breaches and clunky digital wallets, we saw a need for a new
                payment layer.
              </p>
              <p>
                aKOIN is decoupled from legacy bank infrastructure and built for
                the security and convenience of the modern global citizen.
              </p>
              <p>
                Founded by industry veterans from fintech, cybersecurity, and
                global-scale systems transformation, aKOIN is engineered to be
                the new standard in payment security and convenience.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-64 h-64 rounded-full border-2 border-primary/20"
              />
              <motion.div
                animate={{
                  scale: [1, 0.8, 1],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-48 h-48 rounded-full border-2 border-primary/30"
              />
              <div className="absolute w-16 h-16 rounded-full bg-primary" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
