import { motion } from "motion/react";

const highlights = [
  {
    title: "Decoupled Payments",
    desc: "Separating identity from transactions to enhance privacy, security, and control.",
  },
  {
    title: "Built for Trust",
    desc: "Designed by experts in FinTech, Cybersecurity, and scalable infrastructure systems.",
  },
  {
    title: "Frictionless Experience",
    desc: "Payments that feel invisible when they work and impenetrable when they don’t.",
  },
];

const logos = ["TechCrunch", "Forbes", "Wired", "Fast Company", "Bloomberg"];

export function AboutPage() {
  return (
    <section className="relative pt-28 pb-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm uppercase mb-6">
              About aKoin
            </div>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Redefining the{" "}
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8C97A] bg-clip-text text-transparent">
              Future of Transactions
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-muted-foreground">
            We are building a secure, seamless, and identity-independent payment layer
            designed for a digital-first world where privacy and speed matter equally.
          </p>
        </motion.div>

        {/* CORE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-muted/50 p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* MISSION + VISION */}
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-background/70 p-8 shadow-inner"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground space-y-4 leading-relaxed">
              To redefine the transaction by building a payment system that is secure,
              frictionless, and independent of core identity systems.
              <br /><br />
              We believe payments should be invisible when successful and
              completely protected when exposed to threats.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border bg-background/70 p-8 shadow-inner"
          >
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              A world where payments are decoupled from identity, giving users full
              control over privacy, security, and financial autonomy.
              <br /><br />
              We are building the financial firewall modern systems have always needed.
            </p>
          </motion.div>
        </div>

        {/* PRINCIPLES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-primary/10 p-10 shadow-2xl"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Built on Core Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-background/80 border border-border p-6">
              <p className="font-semibold mb-2">Privacy First</p>
              <p className="text-sm text-muted-foreground">
                Your identity stays separate from every transaction.
              </p>
            </div>

            <div className="rounded-2xl bg-background/80 border border-border p-6">
              <p className="font-semibold mb-2">Security by Design</p>
              <p className="text-sm text-muted-foreground">
                Built to minimize exposure and maximize protection.
              </p>
            </div>

            <div className="rounded-2xl bg-background/80 border border-border p-6">
              <p className="font-semibold mb-2">Global Scalability</p>
              <p className="text-sm text-muted-foreground">
                Engineered for modern, borderless digital finance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FEATURED */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            As Featured In
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-muted-foreground/60 font-semibold">
            {logos.map((l) => (
              <span key={l} className="hover:text-foreground transition-colors">
                {l}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}