import { motion } from "motion/react";
import {
  Shield,
  Globe,
  Building2,
  Radio,
  Ticket,
  Hotel,
  ShieldCheck,
  BriefcaseBusiness,
  ArrowRight,
  BarChart3,
  Users,
  CreditCard,
  ScanLine,
  CheckCircle2,
  Sparkles,
  Lock,
  Zap,
} from "lucide-react";

import { MetallicCard } from "../components/MetallicCard";
import { Button } from "../components/ui/button";

import keychainImg from "../../assets/Keychain-preview.png";
import businessSetupImg from "../../assets/business.png";


import eventImg from "../../assets/event-demo.png";
import resortImg from "../../assets/resort-demo.png";
import campusImg from "../../assets/campus-demo.png";
import accessImg from "../../assets/access-demo.png";

const useCases = [
  {
    title: "Events & Festivals",
    icon: Ticket,
    top: "8%",
    left: "15%",
  },
  {
    title: "Hotels & Resorts",
    icon: Hotel,
    top: "12%",
    right: "12%",
  },
  {
    title: "Corporate Campuses",
    icon: BriefcaseBusiness,
    bottom: "14%",
    left: "10%",
  },
  {
    title: "Access Control",
    icon: ShieldCheck,
    bottom: "12%",
    right: "10%",
  },

  {
    title: "Smart Payments",
    icon: CreditCard,
    top: "45%",
    left: "5%",
  },
  {
    title: "Membership & Loyalty",
    icon: Users,
    top: "50%",
    right: "5%",
  },
];

const solutions = [
  {
    title: "Events & Festivals",
    icon: Ticket,
    image: eventImg,
    points: [
      "Cashless Experience",
      "Fast Entry & Payments",
      "Vendor Management",
      "Real-Time Reporting",
    ],
  },
  {
    title: "Hotels & Resorts",
    icon: Hotel,
    image: resortImg,
    points: [
      "Guest Payments",
      "Access Control",
      "In-Room Expenses",
      "F&B Services",
    ],
  },
  {
    title: "Corporate Sectors",
    icon: BriefcaseBusiness,
    image: campusImg,
    points: [
      "Employee Payments",
      "Canteen & Vending",
      "Visitor Management",
      "Expense Tracking",
    ],
  },
  {
    title: "Access Control",
    icon: ShieldCheck,
    image: accessImg,
    points: [
      "Secure Entry",
      "Zone-Based Access",
      "Real-Time Monitoring",
      "Fraud Prevention",
    ],
  },
];


export function BusinessPage() {
  return (
    <div className="pt-20 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center border-b border-border/40 overflow-hidden">

        {/* BG GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        </div>

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:120px_120px]" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-20 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Power Your
              <br />

              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Ecosystem
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              Power your event, festival, corporate campus, or resort
              with a secure tap-and-go payment ecosystem. Manage access,
              reduce fraud, and deliver a premium cashless experience.
            </p>

            {/* FEATURES */}
            <MetallicCard golden className="mb-8">
              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  {
                    icon: Shield,
                    title: "Fraud Protection",
                  },
                  {
                    icon: Building2,
                    title: "Corporate Ready",
                  },
                  {
                    icon: Radio,
                    title: "Real-Time Tracking",
                  },
                  {
                    icon: Globe,
                    title: "Closed-Loop Payments",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-yellow-400" />
                    </div>

                    <p className="font-medium">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </MetallicCard>

            <div className="flex flex-wrap gap-4">

              <Button
                className="rounded-xl px-7 py-6 text-base font-semibold text-black border border-white/10"
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  boxShadow:
                    "0 4px 18px rgba(212,175,55,0.25)",
                }}
              > Get aKoin Keychain
              </Button>

              <Button
                variant="outline"
                className="rounded-xl px-7 py-6 border-border/60"
              >
                View Demo
              </Button>

            </div>
          </motion.div>

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

      {/* BUSINESS ECOSYSTEM SYSTEM */}
      <section className="py-28 border-b border-border/40 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center relative z-10">

          {/* LEFT CONTENT */}
          <div className="lg:pl-24">
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6 tracking-wide">
              BUSINESS ECOSYSTEM
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              One Platform.
              <br />
              Infinite{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Use Cases.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Track, control, and optimize every transaction across your organization.
              Admins and team leads get complete visibility into business operations
              where money is being spent, who is accessing what, and how resources are
              utilized.
            </p>
          </div>

          {/* RIGHT ORBIT SYSTEM */}
          <div className="relative h-[760px] min-w-[900px] flex items-center justify-center">

            {/* GLOW */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-yellow-500/5 blur-3xl" />

            {/* ORBIT RINGS */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-yellow-500/10" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-yellow-500/10" />

            {/* ROTATION */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >

              {useCases.map((item, i) => {
                const angle =
                  (i / useCases.length) * Math.PI * 2 - Math.PI / 2;

                const radius = 240;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={item.title}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `
                  translate(${x}px, ${y}px)
                  translate(-50%, -50%)
                `,
                    }}
                  >

                    {/* COUNTER ROTATE */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                    >

                      <div className="absolute inset-0 rounded-3xl bg-yellow-500/10 blur-2xl scale-110" />

                      <MetallicCard className="w-[200px] backdrop-blur-xl">

                        <div className="space-y-3 relative z-10">

                          {/* ICON */}
                          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-yellow-400" />
                          </div>

                          {/* TITLE */}
                          <div>
                            <h4 className="font-semibold text-lg">
                              {item.title}
                            </h4>

                          </div>
                        </div>
                      </MetallicCard>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CENTER CORE */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute z-20"
            >

              <div className="absolute inset-0 bg-yellow-500/15 blur-3xl rounded-[40px] scale-110" />

              <MetallicCard golden className="w-[320px] relative z-10">
                <div className="space-y-6 text-center">

                  {/* ICON */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center">
                      <BriefcaseBusiness className="w-7 h-7 text-yellow-400" />
                    </div>

                    <div className="text-left">
                      <p className="text-muted-foreground text-lg font-bold">
                        Business Core
                      </p>

                      <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/70">
                        Unlimited Scale
                      </p>
                    </div>
                  </div>

                  {/* VALUE */}
                  <h3 className="text-3xl font-bold tracking-tight">
                    ∞ Capacity
                  </h3>

                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                  {/* DESC */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                    Powering all your business operations —— from a single unified dashboard.
                  </p>
                </div>
              </MetallicCard>
            </motion.div>

            {/* PARTICLES */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-yellow-400/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.3, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + Math.random() * 4,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOW SECTION */}
      <section className="py-28 border-b border-border/40 relative">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
              BUSINESS FLOW
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Smart Payments.
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}Simplified.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Manage guests, employees, customers, and transactions
              through one secure payment infrastructure.
            </p>
          </div>

          <div className="w-full h-full">

            <img
              src={businessSetupImg}
              className="rounded-xl mb-6 w-full h-[550px] object-cover"
            />

          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-28 border-b border-border/40">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
              BUILT FOR EVERY BUSINESS
            </div>

            <h2 className="text-5xl font-bold mb-6">
              One Platform.
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37, #C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}Multiple Experiences.
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">

            {solutions.map((item, i) => (
              <MetallicCard golden={i % 2 === 1}>
                <img
                  src={item.image}
                  className="rounded-xl mb-5 h-[220px] w-full object-cover"
                />

                <div className="flex items-center gap-3 mb-5">

                  <div className="w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-yellow-400" />
                  </div>

                  <h3 className="font-semibold text-xl">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-3">

                  {item.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-yellow-400" />

                      <p className="text-sm text-muted-foreground">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </MetallicCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <MetallicCard golden>
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="text-5xl font-bold leading-tight mb-6">
                  Your Business.
                  <br />
                  Your Control.
                  <br />
                  {" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg,#D4AF37, #C89B2C)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Powered by aKoin.
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Streamline payments, manage access, and track every transaction across
                  your organization. Empower your team with real-time insights, smarter
                  expense control, and a fully connected ecosystem.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Button
                    className="rounded-xl px-7 py-6 text-base font-semibold text-black border border-white/10"
                    style={{
                      background:
                        "linear-gradient(90deg,#D4AF37, #C89B2C)",
                      boxShadow:
                        "0 4px 18px rgba(212,175,55,0.25)",
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl px-7 py-6"
                  >
                    Book Demo
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.img
                  src={keychainImg} // you can later replace with dashboard/business visual
                  className="w-[340px] drop-shadow-[0_0_80px_rgba(212,175,55,0.35)]"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />
              </div>
            </div>
          </MetallicCard>
        </div>
      </section>
    </div>
  );
}