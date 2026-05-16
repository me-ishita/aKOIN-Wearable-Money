import { motion } from "motion/react";
import {
  Shield,
  Smartphone,
  Globe,
  Droplets,
  Battery,
  Lock,
  Zap,
  Wallet,
} from "lucide-react";
import { MetallicCard } from "./MetallicCard";
import ringImg from "../../assets/work4.png";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Not linked to your bank or UPI. Only preloaded funds are at risk, not your life savings.",
  },
  {
    icon: Lock,
    title: "Instant Freeze",
    description:
      "Lost your wearable? Tap a button in the app to freeze it instantly.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "Hold INR, USD, GBP, EUR, and JPY in one app. Pay like a local anywhere.",
  },
  {
    icon: Smartphone,
    title: "Phone-Free Payments",
    description:
      "Your wearable works independently using NFC. No phone, no battery, no problem.",
  },
  {
    icon: Droplets,
    title: "100% Waterproof",
    description:
      "Take it swimming, running, or to the beach. Built for real life.",
  },
  {
    icon: Battery,
    title: "No Charging Ever",
    description:
      "Powered by the payment terminal. Zero maintenance, infinite convenience.",
  },
  {
    icon: Wallet,
    title: "Smart Sub-Wallets",
    description:
      'Create unlimited sub-wallets like "Coffee", "Travel", or "Family" with custom limits.',
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Tap and go in under a second. Faster than pulling out your phone or card.",
  },
];

const RADIUS_X = 500;
const RADIUS_Y = 320;

export function Features() {
  return (
    <section
      id="features"
      className="py-28 bg-muted/30 overflow-hidden relative"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
           Effortless Payments with{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Advanced Features.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A fundamental upgrade to your financial security and convenience
          </p>
        </motion.div>

        {/* MAIN ORBIT AREA */}
        <div className="relative flex items-center justify-center w-full">
          <div
            className="relative"
            style={{
              width: RADIUS_X * 2 + 500,
              height: RADIUS_Y * 2 + 450,
            }}
          >

            {/* ORBITING CONTAINER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
              className="absolute inset-0"
              style={{ transformOrigin: "center center" }}
            >

              {/* FEATURE CARDS */}
              {features.map((feature, index) => {
                const angle =
                  (index / features.length) * 2 * Math.PI - Math.PI / 2;

                const x = Math.cos(angle) * RADIUS_X;
                const y = Math.sin(angle) * RADIUS_Y;

                return (
                  <motion.div
                    key={feature.title}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    {/* COUNTER ROTATION TO KEEP CARDS STRAIGHT */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 45,
                        ease: "linear",
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -8,
                      }}
                      className="relative"
                    >

                      {/* CARD GLOW */}
                      <div className="absolute inset-0 rounded-[32px] bg-primary/10 blur-2xl opacity-70 scale-90" />

                      <MetallicCard delay={index * 0.05}>
                        <div className="relative w-[240px] h-[240px] p-6 flex flex-col">

                          {/* ICON */}
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5 shadow-lg backdrop-blur-xl">
                            <feature.icon className="w-7 h-7 text-primary" />
                          </div>

                          {/* TITLE */}
                          <h3 className="font-semibold text-xl leading-snug mb-3">
                            {feature.title}
                          </h3>

                          {/* DESCRIPTION */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </MetallicCard>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CENTER RING */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >

              {/* OUTER GLOW */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 w-72 h-72 rounded-full bg-primary/15 blur-3xl"
              />

              {/* RING CONTAINER */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="relative w-56 h-56 flex items-center justify-center rounded-full border border-border/50 bg-gradient-to-br from-muted/40 to-background shadow-2xl backdrop-blur-xl"
              >

                {/* INNER RING GLOW */}
                <div className="absolute inset-0 rounded-full border border-primary/20 shadow-[0_0_60px_rgba(255,255,255,0.15)]" />

                <motion.img
                  src={ringImg}
                  alt="Ring"
                  className="w-36 h-36 object-contain drop-shadow-2xl"
                  animate={{
                    rotate: [0, 6, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}