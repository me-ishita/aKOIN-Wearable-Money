import work1 from "../../assets/work1.png";
import work2 from "../../assets/work2.png";
import work3 from "../../assets/work3.png";
import work4 from "../../assets/work4.png";
import work5 from "../../assets/work5.png";

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
            Control the bottomless, not the login account
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

              <Arrow />

              {/* RING */}
              <Step
                img={work4}
                label={
                  <>
                    Attach to a <br /> Wearable
                  </>
                }
                width="w-[130px]"
              />

              <Arrow />

              {/* POS */}
              <Step img={work5} label="Tap to Pay" width="w-[130px]" />
            </div>
          </div>
        </motion.div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <h3 className="text-xl sm:text-2xl font-medium">
            Control the balance, not the bank account
          </h3>
        </div>
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