
import { motion } from "motion/react";
import {
  Shield,
  Globe,
  Wallet,
  Lock,
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Coffee,
  Plane,
  Train,
  Palmtree,
  ShieldAlert,
  Store,
} from "lucide-react";

import ringImg from "../../assets/Ring-preview.png";
import groceryImg from "../../assets/grocery-demo.png";
import paymentImg from "../../assets/payment-success.jpeg";
import airportImg from "../../assets/airport-demo.png";
import coffeeImg from "../../assets/coffee-demo.png";
import metroImg from "../../assets/metro-demo.png";

import { MetallicCard } from "../components/MetallicCard";
import { Button } from "../components/ui/button";

const wallets = [
  {
    title: "Grocery",
    amount: "₹ 8,000",
    icon: ShoppingCart,
  },
  {
    title: "Family",
    amount: "₹ 15,000",
    icon: Wallet,
  },
  {
    title: "Holiday",
    amount: "₹ 35,000",
    icon: Palmtree,
  },
  {
    title: "Savings",
    amount: "₹ 20,000",
    icon: Shield,
  },
  {
    title: "Travel",
    amount: "₹ 12,000",
    icon: Plane,
  },
  {
    title: "Emergency",
    amount: "₹ 10,000",
    icon: ShieldAlert,
  },
];

const security = [
  {
    icon: Shield,
    title: "Prepaid-Only Protection",
  },
  {
    icon: Lock,
    title: "Instant Freeze",
  },
  {
    icon: Globe,
    title: "Global Payments",
  },
  {
    icon: Wallet,
    title: "No Bank Exposure",
  },
];

const lifestyle = [
  {
    title: "Grocery Shopping",
    image: groceryImg,
    icon: ShoppingCart,
  },
  {
    title: "Coffee Runs",
    image: coffeeImg,
    icon: Coffee,
  },
  {
    title: "Travel & Airports",
    image: airportImg,
    icon: Plane,
  },
  {
    title: "Public Transit",
    image: metroImg,
    icon: Train,
  },
];

export function PersonnelPage() {
  return (
    <main className="bg-background text-foreground overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b border-border/40">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_55%)]" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
              Your Personal
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#D4AF37,#F6E27A,#C89B2C)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Financial Freedom.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl mb-10">
              Take granular control of your finances with smart sub-wallets,
              wearable payments, and prepaid-only security designed for your
              modern lifestyle.
            </p>

            <MetallicCard golden className="mb-10">

              <div className="grid grid-cols-2 gap-x-6 gap-y-5">

                {security.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3"
                  >

                    {/* ICON */}
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-yellow-400" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-sm font-medium leading-snug">
                      {item.title}
                    </h3>

                  </div>
                ))}

              </div>
            </MetallicCard>

            <div className="flex gap-4 flex-wrap">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl px-7 py-6 text-base font-semibold">
                Get Your aKoin Ring
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                className="rounded-xl px-7 py-6"
              >
                Explore Sub-Wallets
              </Button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />

            <motion.img
              src={ringImg}
              alt="aKoin Ring"
              animate={{ y: [0, -16, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="relative z-10 w-[420px] drop-shadow-[0_0_80px_rgba(212,175,55,0.35)]"
            />
          </motion.div>
        </div>
      </section>

      {/* SUB WALLET SYSTEM */}
      <section className="py-28 border-b border-border/40 relative overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-yellow-500/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center relative z-10">
          {/* LEFT CONTENT */}
          <div className="lg:pl-24">
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6 tracking-wide">
              SMART CONTROL
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              One App.
              <br />
              Unlimited
              <span
                style={{
                  background: "linear-gradient(90deg, #FFD86B, #F5B933)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}Possibilities.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Your aKoin app holds your master account, from which you can create
              unlimited “sub-wallets.” Allocate budgets, set limits, and link each
              wallet to your aKoin Ring.
            </p>

            <Button className="rounded-xl px-7 py-6 bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_40px_rgba(255,210,90,0.25)] transition-all duration-300">
              Manage Wallets
            </Button>
          </div>

          {/* RIGHT ORBIT WALLET SYSTEM */}
          <div className="relative h-[760px] min-w-[900px] flex items-center justify-center">

            {/* BACKGROUND GLOW */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-yellow-500/5 blur-3xl" />

            {/* ORBIT RINGS */}
            <div className="absolute w-[560px] h-[560px] rounded-full border border-yellow-500/10" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-yellow-500/10" />

            {/* ROTATING ORBIT CONTAINER */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >

              {/* WALLET ORBITS */}
              {wallets.map((wallet, i) => {

                const angle =
                  (i / wallets.length) * Math.PI * 2 - Math.PI / 2;

                // PUSH MUCH FURTHER OUT
                const radius = 240;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={wallet.title}
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

                    {/* COUNTER ROTATE CARD */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear",
                      }}
                    >

                      {/* GLOW */}
                      <div className="absolute inset-0 rounded-3xl bg-yellow-500/10 blur-2xl scale-110" />

                      <MetallicCard className="w-[190px] backdrop-blur-xl">

                        <div className="space-y-3 relative z-10">

                          {/* ICON */}
                          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center">
                            <wallet.icon className="w-5 h-5 text-yellow-400" />
                          </div>

                          {/* TITLE */}
                          <div>
                            <h4 className="font-semibold text-lg">
                              {wallet.title}
                            </h4>

                            <p className="text-muted-foreground text-sm mt-1">
                              {wallet.amount}
                            </p>
                          </div>
                        </div>
                      </MetallicCard>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CENTER MASTER WALLET */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="absolute z-20"
            >

              {/* MASTER GLOW */}
              <div className="absolute inset-0 bg-yellow-500/15 blur-3xl rounded-[40px] scale-110" />

              <MetallicCard
                golden
                className="w-[300px] relative z-10">
                <div className="space-y-6 text-center">

                  {/* ICON + TITLE */}
                  <div className="flex items-center justify-center gap-4">

                    <div className="w-6 h-2 rounded-2xl bg-yellow-500/10 border border-yellow-400/20 flex items-center justify-center">
                      <Wallet className="w-8 h-8 text-yellow-400" />
                    </div>

                    <div className="text-left">
                      <p className="text-muted-foreground text-lg mb-1 font-bold">
                        Master Wallet
                      </p>

                      <p className="text-xs uppercase tracking-[0.25em] text-yellow-400/70">
                        Balance
                      </p>
                    </div>
                  </div>

                  {/* AMOUNT */}
                  <h3 className="text-3xl font-bold tracking-tight">
                    ₹ 1,00,000
                  </h3>

                  <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

                  {/* DESCRIPTION */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[260px] mx-auto">
                    Connected to all your smart sub-wallets
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

      {/* HOW IT WORKS */}
      <section className="py-12 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8">
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
              HOW IT WORKS
            </div>

            <h2 className="text-5xl font-bold mb-6">
              Tap. Pay.
              <span className="text-yellow-400"> Done.</span>
            </h2>
          </div>

          <div className="col-span-2">
            <img
              src={paymentImg}
              alt="Payment Successful"
              className="rounded-xl h-[500px] w-full object-contain -mt-20" />
          </div>

        </div>
      </section>

      {/* LIFESTYLE */}
      <section className="py-12 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
              MADE FOR YOUR LIFE
            </div>

            <h2 className="text-5xl font-bold mb-6">
              One Ring.
              <span className="text-yellow-400"> Every Moment.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {lifestyle.map((item, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={item.title}
              >
                <MetallicCard golden={i % 2 === 1}>
                  <img
                    src={item.image}
                    className="rounded-xl mb-4 h-[240px] object-cover w-full"
                  />

                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                </MetallicCard>
              </motion.div>
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
                  Your Money.
                  <br />
                  Your Rules.
                  <br />
                  <span className="text-yellow-400">
                    Your aKoin Ring.
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Join thousands of users embracing secure wearable payments.
                  Tap instantly, manage smarter, and travel globally.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl px-7 py-6 text-base font-semibold">
                    Get Your aKoin Ring
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-xl px-7 py-6"
                  >
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <motion.img
                  src={ringImg}
                  className="w-[340px] drop-shadow-[0_0_80px_rgba(212,175,55,0.35)]"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />
              </div>
            </div>
          </MetallicCard>
        </div>
      </section>
    </main>
  );
}
