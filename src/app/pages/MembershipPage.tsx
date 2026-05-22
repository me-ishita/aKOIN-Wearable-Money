import { motion } from "motion/react";
import {
  Check,
  Crown,
  Zap,
  Globe,
  Shield,
  Star,
} from "lucide-react";

import ringImg from "../../assets/Ring-preview-1.png";
import keychainImg from "../../assets/Keychain-preview.png";
import braceletImg from "../../assets/Bracelet-preview.png";

import { MetallicCard } from "../components/MetallicCard";

const wearables = [
  {
    name: "aKoin Ring",
    tagline: "Personal Freedom",
    price: "FREE",
    image: ringImg,
    glowColor: "rgba(255, 210, 90, 0.35)",
    features: [
      "Sub-wallet architecture",
      "Budget control",
      "Family finance management",
      "Not linked to bank",
      "Instant freeze capability",
      "Lifestyle payments",
      "Metro & transit ready",
      "Tap-and-go convenience",
    ],
    badge: "Popular",
    golden: false,
  },
  {
    name: "aKoin Bracelet",
    tagline: "Premium Identity",
    price: "Premium",
    image: braceletImg,
    glowColor: "rgba(255, 210, 90, 0.12)",
    features: [
      "All Ring & Keychain features",
      "Unlimited access everywhere",
      "Priority membership status",
      "Global currency access",
      "Premium identity badge",
      "VIP event access",
      "Concierge support 24/7",
      "Exclusive rewards program",
      "Higher transaction limits",
      "Airport lounge access",
    ],
    badge: "Premium",
    golden: true,
    isPremium: true,
  },
  {
    name: "aKoin Keychain",
    tagline: "Business Power",
    price: "FREE",
    image: keychainImg,
    glowColor: "rgba(255, 210, 90, 0.35)",
    features: [
      "Closed-loop ecosystem access",
      "Event & festival payments",
      "Corporate campus ready",
      "Resort & hospitality use",
      "Access control integration",
      "Real-time analytics",
      "Team & department tracking",
      "Instant settlement",
    ],
    badge: "Business",
    golden: false,
  },
];


export function MembershipPage() {
  return (
    <div className="pt-1 bg-background text-foreground overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden border-b border-border/40">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:120px_120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm tracking-wide mb-6">
              MEMBERSHIP ACCESS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Choose Your{" "}

              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Wearable Identity
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Select the perfect wearable for your lifestyle.
              Ring and Keychain are completely free.
              Upgrade to Bracelet for premium access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WEARABLE CARDS */}
      <section className="py-32 border-b border-border/40 relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-3 gap-10">

            {wearables.map((wearable, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.12,
                }}
              >

                <MetallicCard
                  golden={wearable.golden}
                  className="
  h-full relative overflow-hidden

  border rounded-[32px]

  border-black/35
  dark:border-white/35

  shadow-[0_8px_30px_rgba(0,0,0,0.06)]
  dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
"
                >

                  {/* BADGE */}
                  <div className="absolute top-6 right-6 z-20">
                    <div
                      className={`
                        px-4 py-1 rounded-full text-xs font-semibold tracking-wide
                        ${wearable.golden
                          ? "bg-yellow-500 text-black"
                          : "bg-primary/10 border border-border text-foreground"
                        }
                      `}
                    >
                      {wearable.badge}
                    </div>
                  </div>

                  <div className="relative z-20 flex flex-col h-full min-h-[920px] lg:min-h-[980px]">

                    {/* IMAGE */}
                    <motion.div
                      className="relative h-[280px] flex items-center justify-center mb-8"
                      whileHover={{
                        scale: 1.05,
                        rotate: wearable.isPremium ? 2 : -2,
                      }}
                      transition={{ duration: 0.4 }}
                    >

                      {/* IMAGE GLOW */}
                      <motion.div
                        className="absolute inset-0 rounded-full blur-3xl z-0"
                        style={{
                          background: wearable.glowColor,
                        }}
                        animate={{
                          scale: [1, 1.15, 1],
                          opacity: [0.25, 0.45, 0.25],
                        }}
                      />

                      <img
                        src={wearable.image}
                        alt={wearable.name}
                        className="relative z-10 h-full object-contain drop-shadow-[0_0_40px_rgba(255,210,90,0.15)]"
                      />
                    </motion.div>

                    {/* TITLE */}
                    <div className="mb-8">

                      <h3 className="text-3xl font-bold mb-2">
                        {wearable.name}
                      </h3>

                      <p
                        className={`mb-5 ${wearable.golden
                          ? "text-black/80 dark:text-white/80"
                          : "text-muted-foreground"
                          }`}
                      >
                        {wearable.tagline}
                      </p>

                      <div
                        style={{
                          background:
                            "linear-gradient(90deg,#D4AF37, #C89B2C)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="text-4xl font-bold"
                      >
                        {wearable.price}
                      </div>
                    </div>

                    {/* FEATURES */}
                    <div className="space-y-4 flex-1">

                      {wearable.features.map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay:
                              idx * 0.1 + featureIdx * 0.03,
                          }}
                        >
                          <Check className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />

                          <span
                            className={`text-sm leading-relaxed ${wearable.golden
                              ? "text-black dark:text-white"
                              : "text-muted-foreground"
                              }`}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => window.open("https://super-vault.vercel.app/", "_blank")}
                      className={`
    mt-10 w-full py-4 rounded-2xl font-semibold transition-all duration-300
    ${wearable.golden
                          ? " text-black shadow-[0_0_40px_rgba(255,210,90,0.25)]"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                        }
  `}
                      style={
                        wearable.golden
                          ? {
                            background:
                              "linear-gradient(90deg,#D4AF37,#F6E27A,#C89B2C)",
                          }
                          : {}
                      }
                    >
                      {wearable.isPremium
                        ? "Upgrade to Premium"
                        : "Get Started Free"}
                    </motion.button>
                  </div>
                </MetallicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-32 border-b border-border/40 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">

          {/* HEADING */}
          <div className="text-center mb-20">

            <div className="inline-flex px-5 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 dark:text-yellow-400 text-sm tracking-[0.25em] uppercase mb-6 backdrop-blur-xl">
              Comparison
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              All Wearables.
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}One Ecosystem.
              </span>
            </h2>

            <p className="mt-5 text-muted-foreground text-lg max-w-2xl mx-auto">
              Compare every aKoin wearable and choose the experience that fits your lifestyle.
            </p>
          </div>

          {/* TABLE CONTAINER */}
          <div
            className="
        rounded-[34px]
        border
        overflow-hidden
        backdrop-blur-xl

        border-black/10
        dark:border-white/10

        bg-white/70
        dark:bg-[#111418]/80

        shadow-[0_10px_60px_rgba(0,0,0,0.08)]
        dark:shadow-[0_10px_60px_rgba(0,0,0,0.45)]
      "
          >

            <div className="overflow-x-auto">

              <div className="min-w-[760px]">

                {/* TABLE HEADER */}
                <div
                  className="
              grid grid-cols-4
              px-8 py-7
              border-b border-border/40

              bg-gradient-to-r
              from-transparent
              via-yellow-500/5
              to-transparent
            "
                >
                  <div />

                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      Ring
                    </div>

                    <div className="text-sm text-muted-foreground mt-1">
                      Personal
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="font-semibold text-lg">
                      Keychain
                    </div>

                    <div className="text-sm text-muted-foreground mt-1">
                      Business
                    </div>
                  </div>

                  <div className="text-center">
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg,#D4AF37,#F6E27A,#C89B2C)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="font-bold text-lg"
                    >
                      Bracelet
                    </div>

                    <div className="text-sm text-yellow-600 dark:text-yellow-400 mt-1">
                      Premium
                    </div>
                  </div>
                </div>

                {/* TABLE ROWS */}
                {[
                  {
                    feature: "Free to Start",
                    ring: true,
                    keychain: true,
                    bracelet: false,
                  },
                  {
                    feature: "Sub-Wallet Control",
                    ring: true,
                    keychain: false,
                    bracelet: true,
                  },
                  {
                    feature: "Business Ecosystem",
                    ring: false,
                    keychain: true,
                    bracelet: true,
                  },
                  {
                    feature: "Global Currency Access",
                    ring: false,
                    keychain: false,
                    bracelet: true,
                  },
                  {
                    feature: "VIP Priority Access",
                    ring: false,
                    keychain: false,
                    bracelet: true,
                  },
                  {
                    feature: "24/7 Concierge",
                    ring: false,
                    keychain: false,
                    bracelet: true,
                  },
                ].map((row, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="
                grid grid-cols-4
                items-center

                px-8 py-6

                border-b border-border/20
                last:border-0

                hover:bg-black/[0.03]
                dark:hover:bg-white/[0.03]

                transition-colors duration-300
              "
                  >

                    {/* FEATURE */}
                    <div className="font-medium text-[15px] md:text-base">
                      {row.feature}
                    </div>

                    {/* VALUES */}
                    {[row.ring, row.keychain, row.bracelet].map(
                      (item, i) => (
                        <div
                          key={i}
                          className="flex justify-center"
                        >
                          {item ? (
                            <div
                              className="
                          w-9 h-9 rounded-full
                          flex items-center justify-center

                          bg-gradient-to-br
                          from-yellow-400
                          via-yellow-500
                          to-amber-600

                          shadow-[0_0_20px_rgba(255,215,0,0.25)]
                        "
                            >
                              <Check className="w-5 h-5 text-black font-bold" />
                            </div>
                          ) : (
                            <div
                              className="
                          w-8 h-[2px]
                          rounded-full

                          bg-black/20
                          dark:bg-white/20
                        "
                            />
                          )}
                        </div>
                      )
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="w-24 h-24 rounded-full bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center mx-auto mb-8"
            >
              <Zap className="w-12 h-12 text-yellow-400" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Start Your
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}Journey Today
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose your wearable and join the future of payments.
              Ring and Keychain are completely free to get started.
            </p>

            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="px-10 py-5 rounded-2xl text-black font-semibold transition-all duration-300 hover:scale-[1.02] shadow-[0_0_35px_rgba(212,175,55,0.28)] border border-white/10"
              style={{
                background:
                  "linear-gradient(90deg,#D4AF37,#F6E27A,#C89B2C)",
              }}            >
              Get Your Free Wearable
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}