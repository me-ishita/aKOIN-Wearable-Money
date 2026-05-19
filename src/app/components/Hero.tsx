import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import hero from "../../assets/HeroBg.mp4";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* FULLSCREEN VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src={hero} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)] z-[2]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl mx-auto leading-tight text-white"
          >
            The Secure, Multi-Currency{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#D4AF37, #C89B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Wearable Money.
            </span>
          </motion.h1>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-3"
          >
            {/* First Line */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Make payment anywhere, anytime with a simple tap.
            </p>

            {/* Highlight Line */}
            <div
              className="inline-flex items-center gap-3 text-lg md:text-xl font-semibold tracking-wide px-7 py-3 rounded-full border border-[#D4AF37]/30 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(212,175,55,0.08))",
                boxShadow:
                  "0 0 35px rgba(212,175,55,0.18), inset 0 0 12px rgba(255,255,255,0.04)",
              }}
            >
              <span className="text-white/90">
                Choose Your Smart Wearable
              </span>

              <span className="text-white/40 text-base">—</span>

              <span
                className="relative px-4 py-1 rounded-full font-extrabold tracking-widest uppercase"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD86B 0%, #FFB347 45%, #FF6B6B 100%)",
                  color: "#333333",
                  boxShadow:
                    "0 0 20px rgba(255, 184, 77, 0.55), 0 0 40px rgba(255,107,107,0.25)",
                }}
              >
                FREE
                                
              </span>
            </div>
          </motion.div>
          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Get Started Button */}
            <Button
              size="lg"
              className="
      group
      bg-black text-white
      dark:bg-white dark:text-black
      hover:opacity-90
      transition-all duration-300
      shadow-lg
    "
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Watch Demo Button */}
            <Button
              size="lg"
              variant="outline"
              className="
      group
      border-black/20 text-black
      hover:bg-black/5
      dark:border-white/30 dark:text-white
      dark:hover:bg-white/10
      transition-all duration-300
    "
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}