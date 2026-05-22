import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import logoVideo from "../../assets/ashok-chakra.webm";
import akoinLogo from "../../assets/akoin.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Personnel", path: "/personnel" },
  { name: "Business", path: "/business" },
  { name: "Membership", path: "/membership" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function NavigationRouter() {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
        : "bg-black/30 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-20">

          {/* LOGO -> HOMEPAGE */}
          <Link
            to="/"
            className="flex items-center gap-1 hover:opacity-90 transition-opacity"
          >

            {/* ROTATING ASHOK CHAKRA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className={`
                  w-full h-full object-cover scale-[1.4]
                  ${theme === "dark" ? "mix-blend-screen" : ""}
                `}
              >
                <source src={logoVideo} type="video/mp4" />
              </video>

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-lg pointer-events-none"></div>
            </motion.div>

            {/* aKOIN LOGO */}
            <motion.img
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              src={akoinLogo}
              alt="aKoin"
              className="
                h-10 md:h-14
                w-auto
                object-contain
                select-none
                drop-shadow-[0_0_14px_rgba(255,215,0,0.25)]
              "
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                >
                  <span
                    className={`relative z-10 transition-colors ${isActive
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-yellow-500/80 to-amber-600/80 rounded-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-3">

            {/* THEME TOGGLE */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="
                border border-white/10
                bg-white/5
                hover:bg-white/10
                text-white
              "
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* GET STARTED BUTTON */}
            <Button
  size="lg"
  onClick={() => navigate("/membership")}
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
</Button>

            {/* MOBILE MENU BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() =>
                setMobileMenuOpen(!mobileMenuOpen)
              }
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="
              md:hidden
              bg-black/95
              backdrop-blur-xl
              border-t
              border-white/10
            "
          >
            <div className="px-4 py-4 space-y-2">

              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(link.path);

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg transition-colors ${isActive
                      ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-medium"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link to="/membership">
                <Button className="w-full bg-white text-black hover:bg-white/90 mt-4">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
