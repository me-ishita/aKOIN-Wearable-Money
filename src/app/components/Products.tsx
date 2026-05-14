import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: "ring",
    name: "The Ring",
    tagline: "Sleek, subtle, and powerful",
    description:
      "Pay with a simple tap of your fist. The most discreet way to carry your wallet.",
    features: [
      "Ultra-thin design",
      "Premium materials",
      "Perfect for active lifestyle",
    ],
    image: "https://images.unsplash.com/photo-1758577515333-e71b713059f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "bracelet",
    name: "The Bracelet",
    tagline: "A stylish accessory that doubles as your wallet",
    description:
      "Perfect for an active lifestyle. Waterproof, durable, and always ready.",
    features: [
      "Adjustable fit",
      "Sport-ready design",
      "Fashion meets function",
    ],
    image: "https://images.unsplash.com/photo-1572470705436-60e19c995ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "keychain",
    name: "The Keychain",
    tagline: "The ultimate convenience",
    description:
      "Your keys and your money, all in one place. Never forget your wallet again.",
    features: [
      "Compact design",
      "Durable construction",
      "Always with you",
    ],
    image: "https://images.unsplash.com/photo-1744697311586-52d32d9c1974?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export function Products() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Your Wallet, Your Style
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the wearable that fits your lifestyle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveProduct(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  activeProduct === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p
                  className={`mb-4 ${
                    activeProduct === index
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {product.tagline}
                </p>
                <p
                  className={`text-sm ${
                    activeProduct === index
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {product.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            key={activeProduct}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-3xl bg-gradient-to-br from-muted to-muted/50 border border-border overflow-hidden"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"
            />
            <div className="relative w-full h-full p-8 flex items-center justify-center">
              <ImageWithFallback
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
