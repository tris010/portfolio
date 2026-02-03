"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#projects" }, // Renamed for brevity
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
          AK.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-border mx-2" />
          <Link
            href="/resume"
            className="px-6 py-2.5 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-3xl border-b border-border/50"
          >
            <nav className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                  href="/resume"
                  className="inline-block text-xl font-medium text-primary"
                  onClick={() => setIsOpen(false)}
              >
                  View Resume
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
