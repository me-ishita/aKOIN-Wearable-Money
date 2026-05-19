
import { motion } from "motion/react";
import {
  Building2,
  CreditCard,
  Users,
  Shield,
  BarChart3,
  Lock,
} from "lucide-react";

import keychainImg from "../../assets/Keychain-preview.png";
import braceletImg from "../../assets/Bracelet-preview.png";
import { MetallicCard } from "../components/MetallicCard";
import { Button } from "../components/ui/button";

const ecosystem = [
  {
    title: "Entry Gates",
    icon: Shield,
  },
  {
    title: "Vendors",
    icon: CreditCard,
  },
  {
    title: "Guests",
    icon: Users,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

const businessCards = [
  {
    title: "Reduce Fraud",
    desc: "Closed-loop prepaid ecosystems reduce financial risk instantly.",
    icon: Shield,
  },
  {
    title: "Real-Time Tracking",
    desc: "Monitor transactions, entries, and spending in real time.",
    icon: BarChart3,
  },
  {
    title: "Offline Payments",
    desc: "Enable payments even without bank-linked apps or internet.",
    icon: Lock,
  },
  {
    title: "Unified Ecosystem",
    desc: "One infrastructure for resorts, campuses, festivals, and events.",
    icon: Building2,
  },
];

export function BusinessPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center py-32 overflow-hidden">

        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-yellow-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Power Secure{" "}
              {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
                Closed-Loop Payments.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Power your festival, campus, resort, or corporate ecosystem with
              secure wearable payments, access control, and real-time analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <Button
                size="lg"
                className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
              >
                Request Demo
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-border/60 backdrop-blur-xl"
              >
                Business Solutions
              </Button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute w-[420px] h-[420px] rounded-full bg-yellow-500/10 blur-3xl"
            />

            <motion.img
              animate={{ y: [0, -15, 0], rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 7 }}
              src={keychainImg}
              alt="Keychain"
              className="w-[420px] object-contain drop-shadow-[0_0_40px_rgba(255,215,0,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connected Payment{" "}
              {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
                Infrastructure.
              </span>
            </h2>

            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Manage every transaction, access point, and payment ecosystem from
              one unified platform.
            </p>
          </div>

          <div className="relative h-[850px] flex items-center justify-center">

            {/* ORBIT */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="absolute inset-0"
            >
              {ecosystem.map((item, index) => {
                const angle =
                  (index / ecosystem.length) * 2 * Math.PI - Math.PI / 2;

                const x = Math.cos(angle) * 330;
                const y = Math.sin(angle) * 250;

                return (
                  <div
                    key={item.title}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 45,
                        ease: "linear",
                      }}
                    >
                      <MetallicCard golden={index % 2 !== 0}>
                        <div className="w-[230px] text-center">
                          <item.icon className="w-10 h-10 mx-auto mb-5 text-yellow-500" />

                          <h3 className="text-2xl font-semibold">
                            {item.title}
                          </h3>
                        </div>
                      </MetallicCard>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* CENTER */}
            <div className="relative z-20">
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute inset-0 rounded-full bg-yellow-500/10 blur-3xl"
              />

              <div className="relative w-80 h-80 rounded-full border border-border/50 bg-gradient-to-br from-background to-muted/40 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl">
                <Building2 className="w-20 h-20 text-yellow-500 mb-6" />

                <h3 className="text-3xl font-bold mb-4 text-center">
                  Business Ecosystem
                </h3>

                <p className="text-muted-foreground text-center max-w-[240px]">
                  Connected infrastructure for payments, access, vendors, and
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10">
            {businessCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${index % 2 === 0 ? "lg:translate-y-10" : ""}`}
              >
                <MetallicCard golden={index % 2 !== 0}>
                  <card.icon className="w-12 h-12 text-yellow-500 mb-6" />

                  <h3 className="text-3xl font-semibold mb-4">
                    {card.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {card.desc}
                  </p>
                </MetallicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM */}
      <section className="py-32 relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Upgrade to Premium{" "}
              {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
                Bracelet Access.
              </span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              Unlock premium identity, enterprise-level control, and advanced
              global payment access with the aKoin Bracelet.
            </p>

            <Button
              size="lg"
              className="bg-black text-white dark:bg-white dark:text-black hover:opacity-90"
            >
              Explore Membership
            </Button>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute w-[450px] h-[450px] rounded-full bg-yellow-500/15 blur-3xl"
            />

            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              src={braceletImg}
              alt="Bracelet"
              className="w-[500px] object-contain drop-shadow-[0_0_50px_rgba(255,215,0,0.35)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
