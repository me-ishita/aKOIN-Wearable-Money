import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Eye,
  Smartphone,
  Building2,
  Users,
  Zap,
  ArrowRight,
  CheckCircle2,
  Activity,
  CreditCard,
  Lock,
  TrendingUp,
} from "lucide-react";

interface FlowStep {
  icon: React.ElementType;
  label: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Slide {
  id: string;
  category: string;
  categoryColor: string;
  headline: string;
  subheadline: string;
  story: string;
  features: string[];
  stats: Stat[];
  flowSteps: FlowStep[];
  bgPhoto: string;
  accentGradient: string;
  badgeText: string;
}

const slides: Slide[] = [
  {
    id: "family",
    category: "Personal Use",
    categoryColor: "#C9A84C",
    headline: "Parents & Caregivers",
    subheadline: "Complete Control, Complete Peace of Mind",
    story:
      "Hand your child or elderly parent a sleek aKoin ring. You load the amount, set the limits, and watch every transaction in real time — all from a single dashboard. No cash lost, no card forgotten, no surprises.",
    features: [
      "Set daily & weekly spending caps",
      "Instant transaction alerts to your phone",
      "Block specific merchant categories",
      "Emergency top-up in seconds",
      "Full transaction history & analytics",
    ],
    stats: [
      { value: "₹500", label: "Daily cap control" },
      { value: "0s", label: "Alert delay" },
      { value: "100%", label: "Spend visibility" },
    ],
    flowSteps: [
      { icon: CreditCard, label: "Parent loads wallet" },
      { icon: Shield, label: "Sets spending rules" },
      { icon: Zap, label: "Child taps to pay" },
      { icon: Eye, label: "Parent gets alert" },
    ],
    bgPhoto:"https://media.istockphoto.com/id/1214665301/photo/for-them-every-moment-is-fun.jpg?b=1&s=612x612&w=0&k=20&c=Dns3lfcdUnmRedDaeXA2XbtCC7uaWigBZg0mPdiXylI=",
    accentGradient: "from-amber-500/20 via-yellow-400/10 to-transparent",
    badgeText: "For Families",
  },
  {
    id: "corporate",
    category: "Enterprise Use",
    categoryColor: "#8B9FCC",
    headline: "Corporate & Enterprise",
    subheadline: "HR-Controlled Spending for Every Employee",
    story:
      "Issue aKoin rings to your entire workforce. HR holds the master account — allocating budgets per department, per role, per event. Every coffee, cab, or client dinner is logged, categorized, and reconciled automatically.",
    features: [
      "HR dashboard with full org visibility",
      "Department-level budget allocation",
      "Automatic expense categorization",
      "Merchant whitelist & blacklist controls",
      "Real-time compliance monitoring",
    ],
    stats: [
      { value: "∞", label: "Employees supported" },
      { value: "Auto", label: "Expense reporting" },
      { value: "99.9%", label: "Policy compliance" },
    ],
    flowSteps: [
      { icon: Building2, label: "HR creates accounts" },
      { icon: Users, label: "Rings issued to team" },
      { icon: Zap, label: "Employee taps to pay" },
      { icon: TrendingUp, label: "HR views all spend" },
    ],
    bgPhoto:
      "https://images.unsplash.com/photo-1758520145408-dedb359d1c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    accentGradient: "from-blue-500/20 via-indigo-400/10 to-transparent",
    badgeText: "For Business",
  },
  {
    id: "active",
    category: "Active Lifestyle",
    categoryColor: "#7EC8A4",
    headline: "The Phone-Free Life",
    subheadline: "Run, Swim, Train — Pay With a Tap",
    story:
      "No pocket. No wallet. No phone. Just you and the ring. Whether you're hitting a 10K, swimming laps, or crushing a HIIT session — aKoin moves with you. Grab a post-workout smoothie and tap your way through the day.",
    features: [
      "IP68 waterproof — swim & sweat proof",
      "No battery required, ever",
      "Works at any NFC-enabled terminal",
      "Titanium-grade durability",
      "Zero friction, instant payment",
    ],
    stats: [
      { value: "IP68", label: "Water resistance" },
      { value: "0%", label: "Battery needed" },
      { value: "<0.3s", label: "Tap response time" },
    ],
    flowSteps: [
      { icon: Activity, label: "Start your workout" },
      { icon: Smartphone, label: "Leave phone behind" },
      { icon: Zap, label: "Tap ring to pay" },
      { icon: Lock, label: "Secure & instant" },
    ],
    bgPhoto:
      "https://images.unsplash.com/photo-1728718248311-2fdb76913d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    accentGradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
    badgeText: "For Athletes",
  },
];

function FlowChart({ steps, color }: { steps: FlowStep[]; color: string }) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
          className="flex items-center gap-1 sm:gap-2"
        >
          <div
            className="flex flex-col items-center gap-1"
            style={{ minWidth: 64 }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10"
              style={{
                background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                boxShadow: `0 4px 16px ${color}20`,
              }}
            >
              <step.icon className="w-4 h-4" style={{ color }} />
            </div>
            <span className="text-[9px] sm:text-[10px] text-center text-muted-foreground leading-tight max-w-[60px]">
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight
              className="w-3 h-3 opacity-30 shrink-0 mb-4"
              style={{ color }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MetallicStatCard({
  value,
  label,
  color,
  delay,
}: {
  value: string;
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative group"
    >
      {/* Metallic card layers */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${color}20, transparent)`,
        }}
      />
      <div
        className="relative rounded-xl backdrop-blur-md px-4 py-3 text-center border border-foreground/10 dark:border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(128,128,128,0.12), rgba(128,128,128,0.04))",
          boxShadow: `0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)`,
        }}
      >
        <div
          className="text-2xl font-bold tracking-tight"
          style={{ color }}
        >
          {value}
        </div>
        <div className="text-[10px] text-white/80 mt-0.5 uppercase tracking-wider">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export function UseCases() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

 
  const slide = slides[current];

  return (
    <section
      className="relative py-24 overflow-hidden bg-background"
      id="use-cases"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            One Ring.{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#D4AF37, #C89B2C)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Every Life.
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From families to Fortune 500s — aKoin adapts to how you live, work,
            and move.
          </p>
        </motion.div>
      </div>

      {/* Slideshow */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tab navigation */}
        <div className="flex gap-2 mb-6 justify-center">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border"
              style={{
                borderColor:
                  i === current ? s.categoryColor + "60" : "transparent",
                background:
                  i === current
                    ? `linear-gradient(135deg, ${s.categoryColor}15, ${s.categoryColor}05)`
                    : "transparent",
                color:
                  i === current ? s.categoryColor : "var(--muted-foreground)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                style={{
                  background: i === current ? s.categoryColor : "currentColor",
                  opacity: i === current ? 1 : 0.4,
                }}
              />
              {s.badgeText}
              {/* Progress bar for active tab */}
              {i === current && (
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full transition-none"
                  style={{
                    width: `${progress}%`,
                    background: s.categoryColor,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Main slide card */}
        <div className="relative rounded-3xl overflow-hidden min-h-[540px] sm:min-h-[600px]">
          {/* Background photo with overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${slide.id}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Image */}
              <img
                src={slide.bgPhoto}
                alt={slide.headline}
                className="w-full h-full object-cover"
              />

              {/* ✅ MAIN SOFT OVERLAY */}
              <div className="absolute inset-0 
    bg-gradient-to-r 
   from-black/70 dark:via-black/50 dark:to-black/20 
  " />

              {/* ✅ LEFT SIDE TEXT SUPPORT OVERLAY */}
              <div className="absolute left-0 top-0 h-full w-[45%]
    bg-gradient-to-r 
    from-black/80 dark:via-black/50 dark:to-transparent
  " />

              {/* ✅ Keep your radial glow */}
              <div
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at 20% 50%, ${slide.categoryColor}12 0%, transparent 60%)`,
                }}
              />

              {/* ✅ Keep bottom fade */}
              <div className="absolute inset-0 bg-gradient-to-t 
  from-black/60 dark:via-transparent dark:to-transparent" 
/>
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 sm:p-10 lg:p-12 min-h-[540px] sm:min-h-[600px]">
            {/* Left: Story content */}
            <div className="flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${slide.id}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6"
                >
                  {/* Category badge */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border"
                    style={{
                      color: slide.categoryColor,
                      borderColor: slide.categoryColor + "40",
                      background: slide.categoryColor + "15",
                    }}
                  >
                    {slide.category}
                  </div>

                  {/* Headline */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                      {slide.headline}
                    </h3>
                    <p
                      className="text-lg font-medium"
                      style={{ color: slide.categoryColor }}
                    >
                      {slide.subheadline}
                    </p>
                  </div>

                  {/* Story */}
                  <p className="text-white/70 text-base leading-relaxed max-w-md">
                    {slide.story}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2">
                    {slide.features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0"
                          style={{ color: slide.categoryColor }}
                        />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              {/* Flowchart */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`flow-${slide.id}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mt-8"
                >
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
                    How it works
                  </p>
                  <FlowChart steps={slide.flowSteps} color={slide.categoryColor} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Visual panel */}
            <div className="flex flex-col justify-end gap-6 lg:pl-8 h-full">

              {/* Stats row */}
              <div className="text-white/80">
  <AnimatePresence mode="wait">
    <motion.div
      key={`stats-${slide.id}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-3 gap-3"
    >
      {slide.stats.map((stat, i) => (
        <MetallicStatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          color={slide.categoryColor}
          delay={i * 0.1}
        />
      ))}
    </motion.div>
  </AnimatePresence>
</div>

              {/* Ring showcase + stats */}

              {/* <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${slide.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* Ring with glow 
                  <div className="relative flex items-center justify-center">
                    {/* Glow rings 
                    <div
                      className="absolute w-52 h-52 rounded-full blur-3xl opacity-30 animate-pulse"
                      style={{ background: slide.categoryColor }}
                    />
                    <div
                      className="absolute w-40 h-40 rounded-full blur-xl opacity-20"
                      style={{ background: slide.categoryColor }}
                    />
                    {/* Metallic ring card 
                    <div
                      className="relative w-44 h-44 rounded-full flex items-center justify-center"
                      style={{
                        background: `conic-gradient(from 0deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03), rgba(255,255,255,0.12), rgba(255,255,255,0.03), rgba(255,255,255,0.12))`,
                        boxShadow: `0 0 60px ${slide.categoryColor}30, 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15)`,
                        border: `1px solid ${slide.categoryColor}30`,
                      }}
                    >
                      <ImageWithFallback
                        src={ringImg}
                        alt="aKoin payment ring"
                        className="w-28 h-28 object-contain drop-shadow-2xl"
                      />
                    </div>
                    {/* Orbiting dot 
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute w-44 h-44"
                    >
                      <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
                        style={{
                          background: slide.categoryColor,
                          boxShadow: `0 0 8px ${slide.categoryColor}`,
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Tap animation indicator 
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: slide.categoryColor }}
                    />
                    <span className="text-xs text-foreground/50 dark:text-white/50 uppercase tracking-widest">
                      NFC Ready
                    </span>
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.75,
                      }}
                      className="w-2 h-2 rounded-full"
                      style={{ background: slide.categoryColor }}
                    />
                  </div>
                </motion.div>
              </AnimatePresence> */}


            </div>

          </div>

          {/* Bottom navigation bar */}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-8 sm:px-12 py-4 z-20">
            {/* Slide counter */}
            <span className="text-foreground/40 dark:text-white/30 text-xs font-mono tabular-nums">
              {String(current + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{
                    width: i === current ? 32 : 16,
                    background: "rgba(255,255,255,0.2)",
                  }}
                >
                  {i === current && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ background: slide.categoryColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  )}
                  {i !== current && (
                    <div
                      className="absolute inset-0 rounded-full opacity-60"
                      style={{ background: s.categoryColor }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-8 h-8 rounded-full border border-foreground/20 dark:border-white/20 flex items-center justify-center text-foreground/60 dark:text-white/60 hover:text-foreground dark:hover:text-white hover:border-foreground/40 dark:hover:border-white/40 transition-all duration-200"
                style={{ background: "rgba(128,128,128,0.08)" }}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-8 h-8 rounded-full border flex items-center justify-center text-black font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: slide.categoryColor,
                  borderColor: slide.categoryColor,
                }}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top-right corner badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${slide.id}`}
              initial={{ opacity: 0, scale: 0.8, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="absolute top-6 right-6 z-20"
            >
              <div
                className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{
                  color: slide.categoryColor,
                  borderColor: slide.categoryColor + "50",
                  background: `rgba(0,0,0,0.6)`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 4px 20px ${slide.categoryColor}20`,
                }}
              >
                {slide.badgeText}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

