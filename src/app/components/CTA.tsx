import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function CTA() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted text-sm mb-4">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Limited Early Access
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Ready to Redefine How You Pay?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the payment revolution. Experience the freedom of true financial
            independence with aKoin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="group text-lg px-8">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Schedule a Demo
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-border mt-12"
          >
            <div>
              <div className="text-2xl font-bold mb-1">30 Days</div>
              <div className="text-sm text-muted-foreground">Money-back guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Customer support</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-sm text-muted-foreground">Shipping worldwide</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

