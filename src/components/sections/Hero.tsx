"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import Link from "next/link";
import { fadeUpVariant, containerVariant } from "@/components/ui/Section";

const terminalLineVariant: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={containerVariant}
      className="relative min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-12 pt-32 bg-dot-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black pointer-events-none" />

      <div className="max-w-4xl space-y-8 z-10">
        <motion.div
          variants={fadeUpVariant}
          className="inline-flex items-center space-x-2 px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/10"
        >
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono">Open to backend roles</span>
        </motion.div>

        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-white">
            Akash Bahadur Singh.
            <br />
          </span>
          <span className="text-white">Backend Engineer</span>{" "}
          <span className="text-neutral-500">building scalable systems.</span>
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="text-lg text-neutral-400 leading-relaxed max-w-2xl py-2"
        >
          I build reliable, scalable backend systems and developer-focused
          products. I have worked extensively on{" "}
          <span className="text-white font-medium">
            payment &amp; billing workflows
          </span>
          , <span className="text-white font-medium">SAML SSO</span>, and{" "}
          <span className="text-white font-medium">
            third-party integrations
          </span>{" "}
          using Node.js, NestJS, Redis, and MySQL. I am deeply interested in
          distributed systems, clean API architectures, and crafting robust
          backend infrastructure.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center gap-4 pt-2"
        >
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-transparent border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-400 hover:text-white transition-colors ml-0 sm:ml-4"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </a>
        </motion.div>

        {/* Terminal block from UI */}
        <motion.div
          variants={fadeUpVariant}
          className="mt-20 rounded-xl overflow-hidden border border-white/10 bg-[#000]/60 backdrop-blur-md max-w-3xl hidden md:block"
        >
          <div className="flex flex-row items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
            <div className="flex space-x-1.5 border border-transparent">
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-red-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-yellow-500 transition-colors" />
              <div className="w-3 h-3 rounded-full bg-neutral-700 hover:bg-green-500 transition-colors" />
            </div>
            <div className="flex-1 text-center font-mono text-xs text-neutral-500">
              whoami.ts
            </div>
            <div className="font-mono text-xs text-neutral-500 flex items-center">
              &nbsp;
            </div>
          </div>
          <div className="p-6 overflow-x-auto text-sm font-mono leading-loose flex">
            <div className="text-neutral-700 select-none pr-6 text-right">
              01
              <br />
              02
              <br />
              03
              <br />
              04
              <br />
              05
              <br />
              06
              <br />
              07
              <br />
              08
              <br />
              09
              <br />
              10
              <br />
              11
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.6 },
                },
              }}
            >
              <motion.div variants={terminalLineVariant}>
                <span className="text-neutral-500">const</span>{" "}
                <span className="text-white">akash</span>{" "}
                <span className="text-neutral-500">=</span> {"{"}
              </motion.div>
              <motion.div variants={terminalLineVariant} className="pl-6">
                <span className="text-neutral-300">role:</span>{" "}
                <span className="text-emerald-400">"Backend Engineer"</span>,
              </motion.div>
              <motion.div variants={terminalLineVariant} className="pl-6">
                <span className="text-neutral-300">stack:</span> [
                <span className="text-emerald-400">"Node.js"</span>,{" "}
                <span className="text-emerald-400">"NestJS"</span>,{" "}
                <span className="text-emerald-400">"TypeScript"</span>],
              </motion.div>
              <motion.div variants={terminalLineVariant} className="pl-6">
                <span className="text-neutral-300">building:</span> [
              </motion.div>
              <motion.div
                variants={terminalLineVariant}
                className="pl-12 text-emerald-400"
              >
                "Payment &amp; billing workflows",
              </motion.div>
              <motion.div
                variants={terminalLineVariant}
                className="pl-12 text-emerald-400"
              >
                "SAML 2.0 SSO &amp; auth",
              </motion.div>
              <motion.div
                variants={terminalLineVariant}
                className="pl-12 text-emerald-400"
              >
                "Multi-tenant SaaS APIs",
              </motion.div>
              <motion.div
                variants={terminalLineVariant}
                className="pl-12 text-emerald-400"
              >
                "Third-party integrations",
              </motion.div>
              <motion.div variants={terminalLineVariant} className="pl-6">
                {"],"}
              </motion.div>
              <motion.div variants={terminalLineVariant} className="pl-6">
                <span className="text-neutral-300">open_to:</span>{" "}
                <span className="text-emerald-400">
                  "backend roles - remote / Pune / Blr / Hyd"
                </span>
              </motion.div>
              <motion.div variants={terminalLineVariant}>{"};"}</motion.div>
            </motion.div>
          </div>
          <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 bg-white/[0.01] text-[10px] font-mono text-neutral-500">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>compiled · 0 errors</span>
            </div>
            <div>typescript · utf-8 · ln 11</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
