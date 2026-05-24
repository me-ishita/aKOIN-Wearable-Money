import { motion } from "motion/react";
import { Link } from "react-router";

import ring from "../../assets/Ring-preview.png";
import bracelet from "../../assets/Bracelet-preview.png";
import keychain from "../../assets/Keychain-preview.png";

const products = [
  {
    id: "ring",
    name: "The Ring",
    tagline: "Your Personal Wallet, Always With You",
    description:
      "Designed for everyday payments, budgeting, and family finance management. Create sub-wallets, control spending limits, and make secure tap-to-pay transactions without carrying cash or cards.",
    features: [
      "Personal & family sub-wallets",
      "Spending limit control",
      "Instant tap-to-pay payments",
    ],
    image: ring,
  },
  {
    id: "keychain",
    name: "The Keychain",
    tagline: "Built for Business Ecosystems",
    description:
      "Ideal for corporate campuses, events, festivals, resorts, and hospitality environments. Enable cashless payments, secure access control, and real-time transaction monitoring from a single wearable.",
    features: [
      "Cashless event & vendor payments",
      "Access control & secure entry",
      "Real-time reporting & analytics",
    ],
    image: keychain,
  },
  {
    id: "bracelet",
    name: "The Bracelet",
    tagline: "Premium Access Beyond Payments",
    description:
      "More than a payment wearable. Unlock premium experiences, global currency access, VIP privileges, and exclusive member benefits while enjoying seamless contactless payments.",
    features: [
      "Global currency access",
      "VIP & premium membership benefits",
      "Higher transaction limits",
    ],
    image: bracelet,
  },
];

export function Products() {
  return (
    <section
      id="products"
      className="
    py-32
    border-b
    border-border/40
    relative
    overflow-hidden
  "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
      </div>
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Your Wallet,{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg,#D4AF37,#C89B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Style.
            </span>
          </h2>

          <p className="text-xl text-muted-foreground">
            Choose the wearable that fits your lifestyle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{
                y: -10,
                rotateX: 2,
              }}
              className="group"
            >
              <div
                className="
        relative
        overflow-hidden
        rounded-[36px]
        h-full

        border

        border-black/10
        dark:border-white/10

        bg-white/80
        dark:bg-zinc-950/80

        backdrop-blur-xl

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
        dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]

        transition-all
        duration-500
      "
              >
                {/* METALLIC SHINE */}
                <div
                  className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-700

          bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.25)_40%,transparent_60%)]
        "
                />

                {/* GOLD GLOW */}
                <div
                  className="
          absolute
          -top-20
          left-1/2
          -translate-x-1/2

          w-[280px]
          h-[280px]

          rounded-full
          bg-yellow-500/10
          blur-3xl
        "
                />

                <div className="relative p-8">

                  {/* IMAGE */}
                  <div className="h-[280px] flex items-center justify-center mb-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="
              h-full
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
              drop-shadow-[0_0_35px_rgba(212,175,55,0.25)]
            "
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
    text-3xl
    font-bold
    mb-3
    bg-gradient-to-br
    from-yellow-300
    via-yellow-500
    to-yellow-700
    bg-clip-text
    text-transparent
  "
                  >
                    {product.name}
                  </h3>

                  {/* TAGLINE */}
                  <p className="text-muted-foreground mb-5 text-lg">
                    {product.tagline}
                  </p>


                  {/* FEATURES */}
                  <div className="space-y-4">
                    {product.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />

                        <span className="text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* METALLIC STRIP */}
                  <div
                    className="
            mt-8
            h-px

            bg-gradient-to-r
            from-transparent
            via-yellow-500/30
            to-transparent
          "
                  />

                  {/* CHIP + LEARN MORE */}
                  <div className="flex justify-end mt-6">

                    <Link
                      to={
                        product.id === "ring"
                          ? "/personnel"
                          : product.id === "keychain"
                            ? "/business"
                            : "/membership"
                      }
                      className="
      px-4 py-2
      rounded-xl
      text-sm font-semibold
      transition-all duration-300

      bg-gradient-to-br
      from-yellow-300
      via-yellow-500
      to-yellow-700
      opacity-80
      shadow-lg

      border border-border
    "
                    >
                      Learn More
                    </Link>



                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}