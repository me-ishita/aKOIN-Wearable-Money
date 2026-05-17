import { motion } from "motion/react";
import unique from "../../assets/half-ring.png";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";

const features = [
  {
    title: "Integrated Multi-Currency & Wearable Architecture",
    desc: "A unified prepaid wallet and wearable-native payment system built specifically for India’s digital ecosystem.",
    icon: icon1,
  },
  {
    title: "Wholesale FX Structure & Bundled Hardware",
    desc: "Designed for low-friction adoption through competitive FX economics and bundled wearable access.",
    icon: icon2,
  },
  {
    title: "Built Within RBI’s PPI Framework",
    desc: "Structured as a compliant non-bank prepaid system — enabling regulatory alignment and scalable partnerships.",
    icon: icon3,
  },
  {
    title: "Phone-Independent Tap Payments",
    desc: "No pairing, no battery dependency, no OTP at point of sale optimized for children, elderly, and active users.",
    icon: icon1,
  },
];

export function WhyDifferent() {
  return (
    <section className="py-28 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE */}
          <div className="relative flex items-center justify-center lg:justify-start min-h-[520px]">

            {/* 🔧 FIX 1: Shift ring slightly RIGHT */}
            <img
              src={unique}
              alt="ring"
              className="absolute left-[-10px] w-[540px] max-w-none pointer-events-none select-none"
            />

            {/* Title */}
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Why aKoin is<br /> {" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C9A84C, #E8C97A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Different.
            </span>
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* Arc alignment wrapper */}
            <div className="flex flex-col gap-12">

              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  
                  /* FIX 3: create subtle half-curve shift */
                  className={`
                    flex items-start gap-5
                    ${i === 0 ? "ml-0" : ""}
                    ${i === 1 ? "ml-4" : ""}
                    ${i === 2 ? "ml-8" : ""}
                    ${i === 3 ? "ml-4" : ""}
                  `}
                >
                  {/*  FIX 2: Bigger icon */}
                  <div className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center flex-shrink-0">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
