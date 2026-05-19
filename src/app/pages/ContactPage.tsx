import { motion } from "motion/react";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import { MetallicCard } from "../components/MetallicCard";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    info: "support@akoin.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    info: "+1 (555) 123-4567",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "San Francisco, CA",
  },
];

const faqs = [
  {
    q: "How do I get started with aKoin?",
    a: "Simply choose your preferred wearable (Ring or Keychain are free), download the app, and start adding funds. It's that simple!",
  },
  {
    q: "Is my money safe?",
    a: "Absolutely. aKoin uses bank-level encryption and is completely separate from your bank account. You can freeze your wearable instantly from the app.",
  },
  {
    q: "What's the difference between the wearables?",
    a: "The Ring is perfect for personal use with sub-wallets, the Keychain is designed for business ecosystems, and the Bracelet offers premium features with global access.",
  },
  {
    q: "Can I use aKoin internationally?",
    a: "Premium Bracelet members get global currency access. Ring and Keychain work wherever aKOIN is accepted.",
  },
];

export function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-background pt-28">

      {/* PREMIUM BG */}
      <div className="absolute top-0 left-[-150px] h-[450px] w-[450px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute right-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* HERO */}
      <section className="relative pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm uppercase tracking-[0.35em] text-primary mb-5">
                Contact Us
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                Let's build the future of{" "}
                <span className="bg-gradient-to-r from-[#C9A84C] to-[#F5E6B2] bg-clip-text text-transparent">
                  secure payments
                </span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
                Have questions about aKoin? We'd love to hear from you.
                Send us a message and our team will respond as soon as possible.
              </p>

              <div className="max-w-[420px]">
                <div
                  className="
      rounded-[28px]
      border border-border/50

      bg-gradient-to-br
      from-[#f4f4f4]
      via-[#ececec]
      to-[#dddddd]

      dark:from-[#0f1115]
      dark:via-[#171a20]
      dark:to-[#1d2229]

      shadow-[0_8px_30px_rgba(0,0,0,0.06)]
      dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]

      backdrop-blur-xl
      overflow-hidden
    "
                >
                  <div className="p-5">

                    <div className="space-y-4">
                      {contactMethods.map((method, idx) => {
                        const Icon = method.icon;

                        return (
                          <div
                            key={idx}
                            className={`
                flex items-center gap-4

                ${idx !== contactMethods.length - 1
                                ? "border-b border-border/40 pb-4"
                                : ""
                              }
              `}
                          >
                            <div
                              className="
                  h-11 w-11 rounded-xl
                  flex items-center justify-center
                  border border-border/40

                  bg-black/[0.03]
                  dark:bg-white/[0.03]
                  shrink-0
                "
                            >
                              <Icon className="h-5 w-5 text-foreground" />
                            </div>

                            <div className="min-w-0">
                              <p className="text-xs text-muted-foreground mb-0.5">
                                {method.title}
                              </p>

                              <p className="text-sm font-medium text-foreground truncate">
                                {method.info}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div
                className="
    rounded-[32px]
    border border-border/50
    overflow-hidden

    bg-gradient-to-br

    from-[#f8f8f8]
    via-[#efefef]
    to-[#dddddd]

    dark:from-[#101216]
    dark:via-[#171a20]
    dark:to-[#1f242b]

    shadow-[0_10px_50px_rgba(0,0,0,0.08)]
    dark:shadow-[0_10px_50px_rgba(0,0,0,0.5)]

    backdrop-blur-xl
  "
              >
                <div className="p-8 sm:p-10">

                  <div className="mb-8">
                    <h3 className="text-3xl font-semibold mb-2">
                      Let's Talk Partnerships
                    </h3>

                    <p className="text-muted-foreground">
                      Our team is ready to design a custom solution for your business
                    </p>
                  </div>

                  <form className="space-y-5">

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        className="h-12 bg-background/50 border-border/60"
                      />

                      <Input
                        placeholder="Company Name"
                        className="h-12 bg-background/50 border-border/60"
                      />
                    </div>

                    <Input
                      type="email"
                      placeholder="Work Email"
                      className="h-12 bg-background/50 border-border/60"
                    />

                    <Input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      className="h-12 bg-background/50 border-border/60"
                    />

                    <select
                      className="
    w-full h-12 rounded-md
    border border-border/60
    bg-background/50
    px-3 text-sm
    text-foreground
    outline-none

    focus:ring-2
    focus:ring-primary/20
    transition-all
  "
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Choose Your Wearable
                      </option>

                      <option value="ring">
                        Ring
                      </option>

                      <option value="keychain">
                        Keychain
                      </option>

                      <option value="bracelet">
                        Bracelet
                      </option>
                    </select>

                    <Textarea
                      rows={8}
                      placeholder="How can we help? Tell us about your project or use case..."
                      className="
    min-h-[120px]
    bg-background/50
    border-border/60
    resize-none
    py-4
  "
                    />

                    <Button size="lg" className="w-full h-12 text-base">
                      <Send className="mr-2 h-6 w-4" />
                      Submit Inquiry
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-primary/10">
                <MessageSquare className="h-10 w-10 text-primary" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about aKOIN, security,
              payments, and wearable experiences.
            </p>
          </motion.div>

          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <MetallicCard
                key={idx}
                delay={idx * 0.08}
              >
                <h3 className="text-xl font-semibold mb-3">
                  {faq.q}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </MetallicCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}