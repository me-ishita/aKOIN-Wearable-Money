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
          ${golden
            ? `
               bg-gradient-to-r 
              from-[#D4AF37]/80
via-[#F4C542]/60
to-[#C89B2C]/80

dark:from-[#D4AF37]/70
dark:via-[#F4C542]/50
dark:to-[#C89B2C]/70
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
          ${golden
            ? `
               bg-gradient-to-br 
from-[#FFF0B2]/22
via-[#FFD54A]/10
to-[#D4AF37]/14

dark:from-[#FFF0B2]/18
dark:via-[#FFC933]/12
dark:to-[#D4AF37]/12
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
          ${golden
            ? `
                bg-gradient-to-tr 
                from-transparent 
                via-[#FFE27A]/28
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
          ${golden
            ? `
                bg-gradient-to-br 
from-[#F4C542]/55
via-[#D4AF37]/38
to-[#C89B2C]/45
border-[#E6BE4A]/50

dark:from-[#E6BE4A]/40
dark:via-[#D4AF37]/32
dark:to-[#C89B2C]/30
dark:border-[#F4C542]/45
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
            ${golden
              ? `
                  bg-gradient-to-br 
from-[#FFE27A]/30
via-[#F4C542]/14
to-[#D4AF37]/22
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