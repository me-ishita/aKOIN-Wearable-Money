import { motion } from "motion/react";

export function AboutPage() {
  return (
    <section className="min-h-screen pb-24 pt-28 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="rounded-3xl border border-border bg-muted/70 p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">
              About Us
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold"
            >
              Built for the security and convenience of the modern global citizen.
            </motion.h1>
            <div className="mt-6 space-y-6 text-muted-foreground">
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
                Our technology is designed to keep your core identity separate
                from the act of paying, so every purchase is fast, private, and
                protected.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_420px] items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-inner">
                <h2 className="text-3xl font-semibold mb-4">
                  Our Mission: To redefine the Transaction.
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In a world of constant data breaches and clunky digital
                    wallets, we are building a new payment layer that is
                    secure, frictionless, and independent of your core identity.
                  </p>
                  <p>
                    We believe payments should be invisible when they work, and
                    invisible to attackers when they don’t.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-background/80 p-8 shadow-inner">
                <h2 className="text-3xl font-semibold mb-4">
                  Our Vision for a Decoupled World
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    aKoin is more than a product. It's a new, more resilient
                    global payment infrastructure designed for the realities of a
                    digital-first world.
                  </p>
                  <p>
                    Our vision is to create a secure ecosystem where your money
                    is simple to use, safe to carry, and smart enough to manage
                    itself.
                  </p>
                  <p>
                    By separating the "act of paying" from your "core bank
                    account", we are building the financial firewall that
                    consumers and businesses have needed for decades.
                  </p>
                  <p>
                    This is the future of payment security — fast, private, and
                    designed around people rather than legacy banking systems.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border bg-primary/10 p-8 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="rounded-3xl bg-background/90 p-6 border border-border">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Why decoupled payments?
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Separation of identity and payment is the next step in
                    protecting consumers and businesses from data loss,
                    fraud, and unnecessary friction.
                  </p>
                </div>

                <div className="rounded-3xl bg-background/90 p-6 border border-border">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Built by experts
                  </p>
                  <p className="text-lg font-semibold text-foreground">
                    Founded by leaders in FinTech, Cybersecurity, and global
                    scale systems transformation, aKoin is engineered to be the
                    new standard in payment security and convenience.
                  </p>
                </div>

                <div className="rounded-3xl bg-background/90 p-6 border border-border">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Future-ready infrastructure
                  </p>

                  <p className="text-lg font-semibold text-foreground">
                    Scalable infrastructure built for secure,
                    seamless, and next-generation digital transactions.
                    experiences designed to evolve with modern financial ecosystems.
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

