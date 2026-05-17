import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import aKoinBrand from '../../assets/aKoin_brand.png';

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Features", href: "#features" },
    { name: "Security", href: "#security" },
    { name: "B2B", href: "#b2b" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (href === "#about") {
      event.preventDefault();
      window.location.hash = "about";
    }

    if (href === "#") {
      event.preventDefault();
      window.location.hash = "";
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <img
              src={aKoinBrand}
              alt="aKoin"
              className="h-14 w-auto object-contain"
            />
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="text-sm hover:text-primary transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button className="hidden md:inline-flex">Get Started</Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                  onClick={(event) => {
                    setMobileMenuOpen(false);
                    handleNavClick(item.href)(event as MouseEvent<HTMLAnchorElement>);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <Button className="w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

