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
              from-[#C9A84C]/70 
              via-[#E8C97A]/50 
              to-[#D4AF37]/70

              dark:from-[#D4AF37]/60
              dark:via-[#F5D97A]/40
              dark:to-[#C9A84C]/60
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
from-[#FFF4CC]/18
via-[#FFE8A3]/8
to-[#E8C97A]/10

dark:from-[#FFF4CC]/14
dark:via-[#FFD86B]/10
dark:to-[#E8C97A]/10
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
                via-[#FFF4CC]/20 
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
from-[#C9A84C]/35
via-[#D4AF37]/22
to-[#E8C97A]/28
border-[#E8C97A]/35

dark:from-[#D4AF37]/30
dark:via-[#C9A84C]/22
dark:to-[#F5D97A]/20
dark:border-[#F5D97A]/30

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
from-[#FFE8A3]/18
via-[#FFD86B]/8
to-[#D4AF37]/14
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