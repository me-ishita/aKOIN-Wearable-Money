import { motion } from "motion/react";

const logos = ["TechCrunch", "Forbes", "Wired", "Fast Company", "Bloomberg"];

export function Mission() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Mission: {" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                To redefine the Transaction.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We believe that payments should be secure, seamless, and
                separate from your core identity. In a world of constant data
                breaches and clunky digital wallets, we saw a need for a new
                payment layer.
              </p>
              <p>
                aKoin is decoupled from legacy bank infrastructure and built for
                the security and convenience of the modern global citizen.
              </p>
              <p>
                Founded by industry veterans from fintech, cybersecurity, and
                global-scale systems transformation, aKoin is engineered to be
                the new standard in payment security and convenience.
              </p>
              <p>
                Our approach is not simply about improving payments — it is about
                rewriting how trust, privacy, and speed are delivered on every
                transaction.
              </p>
            </div>

            <div className="mt-12 rounded-3xl border border-border bg-muted/60 p-8 shadow-xl">
              <h3 className="text-3xl font-semibold mb-4">
                Our Vision for a Decoupled World
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  aKoin is more than a product. It's a new, more resilient
                  global payment infrastructure designed for the realities of a
                  digital-first world.
                </p>
                <p>
                  Our vision is to create a secure ecosystem where your money is
                  simple to use, safe to carry, and smart enough to manage
                  itself. By separating the "act of paying" from your "core
                  bank account", we are building the financial firewall that
                  consumers and businesses have needed for decades.
                </p>
                <p>
                  This ecosystem empowers people to transact with confidence,
                  while preserving the privacy and flexibility that modern
                  finance demands.
                </p>
                <p>
                  Founded by industry veterans from FinTech, Cybersecurity, and
                  global-scale systems transformation, aKoin is engineered to be
                  the new standard in payment security and convenience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col justify-between p-10">
              <div className="space-y-4">
                <div className="h-20 w-20 rounded-3xl bg-primary/20 blur-xl" />
                <div className="space-y-2">
                  <div className="h-4 w-24 rounded-full bg-primary/60" />
                  <div className="h-4 w-32 rounded-full bg-primary/40" />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl bg-background/80 p-6 border border-border shadow-inner">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    Purpose built
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Built for modern citizens who expect payments to be private,
                    fast, and frictionless.
                  </p>
                </div>
                <div className="rounded-3xl bg-background/90 p-6 border border-border shadow-inner">
                  <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                    Built for trust
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Designed to protect your core identity while making every
                    transaction safer.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-semibold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

