import { motion } from "motion/react";
import { ReactNode } from "react";

interface MetallicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  golden?: boolean;
}


export function MetallicCard({
  children,
  className = "",
  delay = 0,
  golden = false,
}: MetallicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative group ${className}`}
    >
      {/* OUTER GLOW */}
      <div
        className={`
          absolute -inset-0.5 rounded-2xl blur opacity-0 
          group-hover:opacity-100 transition-opacity duration-500 -z-10
          ${
            golden
              ? `
                bg-gradient-to-r 
                from-yellow-400/30 
                via-yellow-300/20 
                to-yellow-500/30
                dark:from-yellow-300/40
                dark:via-yellow-200/25
                dark:to-amber-400/40
              `
              : `
                bg-gradient-to-r 
                from-primary/20 
                via-primary/10 
                to-primary/20
              `
          }
        `}
      />

      {/* TOP REFLECTION */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          ${
            golden
              ? `
                bg-gradient-to-br 
                from-yellow-200/12 
                via-transparent 
                to-yellow-500/10
                dark:from-yellow-100/18
                dark:to-yellow-400/12
              `
              : `
                bg-gradient-to-br 
                from-white/10 
                via-transparent 
                to-black/10
              `
          }
        `}
      />

      {/* SHINE EFFECT */}
      <div
        className={`
          absolute inset-0 rounded-2xl opacity-0 
          group-hover:opacity-100 transition-opacity duration-500
          ${
            golden
              ? `
                bg-gradient-to-tr 
                from-transparent 
                via-yellow-100/10 
                to-transparent
              `
              : `
                bg-gradient-to-tr 
                from-transparent 
                via-white/5 
                to-transparent
              `
          }
        `}
      />

      {/* MAIN CARD */}
      <div
        className={`
          relative rounded-2xl backdrop-blur-sm shadow-xl 
          group-hover:shadow-2xl transition-all duration-500 border
          ${
            golden
              ? `
                bg-gradient-to-br 
                from-yellow-50/90 
                via-background 
                to-yellow-100/40
                border-yellow-300/40

                dark:from-yellow-400/10
                dark:via-background
                dark:to-yellow-600/10
                dark:border-yellow-400/25
              `
              : `
                bg-gradient-to-br 
                from-background 
                via-background 
                to-muted/30 
                border-border/50
              `
          }
        `}
      >
        {/* INNER GLOW */}
        <div
          className={`
            absolute inset-0 rounded-2xl opacity-0 
            group-hover:opacity-100 transition-opacity duration-500
            ${
              golden
                ? `
                  bg-gradient-to-br 
                  from-yellow-300/10 
                  via-transparent 
                  to-yellow-500/10
                `
                : `
                  bg-gradient-to-br 
                  from-primary/5 
                  via-transparent 
                  to-primary/10
                `
            }
          `}
        />

        <div className="relative p-6 sm:p-8">{children}</div>
      </div>
    </motion.div>
  );
}