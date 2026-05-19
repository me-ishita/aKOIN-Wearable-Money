import { motion } from "motion/react";
import { useTheme } from "next-themes";

import aKoinBrand from '../../assets/akoin.png';
import akoinLogo from '../../assets/akoin-logo.png';
import logoVideo from "../../assets/ashok-chakra.webm";

export function Footer() {
  const sections = [
    {
      title: "Product",
      links: ["Features", "Products", "Security", "Pricing"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"],
    },
    {
      title: "Resources",
      links: ["Blog", "Help Center", "API Docs", "Legal"],
    },
  ];
  const { theme, setTheme } = useTheme();


  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1 flex flex-col items-start">

            {/* ROTATING LOGO */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="
      relative
      w-14 h-14 md:w-16 md:h-16
      flex items-center justify-center
      rounded-full
      mb-5
    "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
        w-full h-full
        object-cover
        scale-[1.45]
        ${theme === "dark" ? "mix-blend-screen" : ""}
      `}
              >
                <source src={logoVideo} type="video/mp4" />
              </video>
            </motion.div>

            {/* TEXT */}
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The future of wearable payments. Secure, seamless, and smart.
            </p>

          </div>

          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === "About" ? "#about" : "#"}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2026 aKoin. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

