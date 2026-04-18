"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Highlights", href: "#highlights" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-300 px-6 py-4",
      )}
    >
      <nav className={cn(
        "flex items-center justify-between w-full max-w-6xl rounded-2xl px-6 py-3 transition-all duration-300",
        scrolled ? "bg-black/60 backdrop-blur-md border border-white/5 shadow-lg" : "bg-transparent border border-transparent"
      )}>
        <Link href="/" className="text-sm font-bold tracking-tighter text-neutral-300 font-mono hover:text-white transition-colors">
          ~/akash<span className="text-neutral-600">.dev</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors">
            Get in touch
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
