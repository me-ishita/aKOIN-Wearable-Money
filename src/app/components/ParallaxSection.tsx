import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-muted/30 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            The Future of Payments is Wearable
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience freedom from your phone, your wallet, and your worries.
            aKOIN is payment security reimagined.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
