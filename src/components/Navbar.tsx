"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar({ isDark = false }: { isDark?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine text color based on scroll and page theme
  const textColor = scrolled
    ? "text-brand-primary"
    : isDark
      ? "text-brand-cream"
      : "text-brand-primary";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur-md py-3 shadow-soft"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo light.png"
              alt="MYXX Masters Logo"
              width={50}
              height={50}
              className="h-25 w-auto object-contain"
              priority
            />
            <span
              className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors ${textColor}`}
            >
              MyxxMasters
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-brand-accent ${
                  scrolled
                    ? "text-brand-primary/80"
                    : isDark
                      ? "text-brand-cream/80"
                      : "text-brand-primary/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#booking"
              className={`btn-primary py-2.5 text-sm transition-all ${
                scrolled
                  ? "bg-brand-primary text-brand-cream"
                  : isDark
                    ? "bg-brand-cream text-brand-primary border-brand-cream hover:bg-brand-accent hover:text-brand-primary hover:border-brand-accent"
                    : "bg-brand-primary text-brand-cream"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${textColor}`}
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream md:hidden border-b-4 border-brand-primary/10 shadow-2xl"
          >
            <div className="px-6 py-10 flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-brand-primary hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/#booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center btn-primary py-4 text-xl"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
