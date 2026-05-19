import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/Ring-preview.png";
import work5 from "../../assets/work5.png";
import keychain from "../../assets/Keychain-preview.png";

import { motion } from "motion/react";

export function HowItWorksVisual() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16" >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Control the balance, {" "}
            <span
              style={{
                background: "linear-gradient(90deg,#D4AF37, #C89B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Not the Bank Account.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly manage your finances with our intuitive app and wearable ecosystem
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Background wrapper */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-border/50 bg-gradient-to-br from-muted/50 to-background p-8 sm:p-10">

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

            {/* FLOW */}
            <div className="relative z-10 flex items-center justify-between gap-3 flex-wrap lg:flex-nowrap">

              {/* PHONE */}
              <img
                src={work1}
                alt="App"
                className="w-[200px] sm:w-[220px] object-contain"
              />

              <Arrow />

              {/* WALLET */}
              <Step img={work2} label="Load Fund" width="w-[130px]" />

              <Arrow />

              {/* SUB WALLET */}
              <Step
                img={work3}
                label={
                  <>
                    Allocate to <br /> Sub Wallet
                  </>
                }
                width="w-[140px]"
              />

              {/* SPLIT ARROWS */}
              <div className="hidden lg:flex items-center relative px-4">
                <div className="relative w-24 h-40">

                  {/* TOP ARROW → RING */}
                  <div className="absolute left-0 top-10">
                    <div className="relative w-14 h-[2px] bg-yellow-500 rotate-[-28deg] origin-left">

                      {/* Arrow Head */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <div className="w-3 h-[2px] bg-yellow-500 rotate-45 origin-right" />
                        <div className="w-3 h-[2px] bg-yellow-500 -rotate-45 origin-right -mt-[2px]" />
                      </div>

                    </div>
                  </div>

                  {/* BOTTOM ARROW → KEYCHAIN */}
                  <div className="absolute left-0 bottom-10">
                    <div className="relative w-14 h-[2px] bg-yellow-500 rotate-[28deg] origin-left">

                      {/* Arrow Head */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <div className="w-3 h-[2px] bg-yellow-500 rotate-45 origin-right" />
                        <div className="w-3 h-[2px] bg-yellow-500 -rotate-45 origin-right -mt-[2px]" />
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* WEARABLES */}
              <div className="flex items-center gap-8">

                <div className="flex flex-col gap-10">

                  {/* PERSONAL */}
                  <div className="flex items-center gap-4">
                    <Step
                      img={work4}
                      label={
                        <>
                          Wearable
                        </>
                      }
                      width="w-[130px]"
                    />
                  </div>

                  {/* BUSINESS */}
                  <div className="flex items-center gap-4">
                    <Step
                      img={keychain}
                      label={
                        <>
                          Wearable
                        </>
                      }
                      width="w-[130px]"
                    />
                  </div>
                </div>

                <Arrow />

                <Step img={work5} label="Tap to Pay" width="w-[130px]" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Step Component */
function Step({ img, label, width }: any) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <img src={img} alt="" className={`${width} object-contain`} />
      <p className="text-sm text-muted-foreground leading-tight">
        {label}
      </p>
    </div>
  );
}

/* Premium Gold Arrow */
function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center px-1">
      <div className="relative w-12 h-[2px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">

        {/* Arrow head */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="w-2 h-[2px] bg-yellow-500 rotate-45 origin-right" />
          <div className="w-2 h-[2px] bg-yellow-500 -rotate-45 origin-right -mt-[2px]" />
        </div>

      </div>
    </div>
  );
}