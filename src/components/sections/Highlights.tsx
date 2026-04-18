"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { Award, Users, Lightbulb, Code } from "lucide-react";
import { motion } from "framer-motion";

export function Highlights() {
  return (
    <Section id="highlights">
      <SectionHeader number="05" title="HIGHLIGHTS" />
      
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent flex items-start space-x-4 hover:border-white/20 transition-colors">
          <div className="p-2.5 rounded-lg border border-white/10 mt-1 flex-shrink-0">
            <Award className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold">Samsung R&D Internship</h4>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">2023</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Selected for Samsung Research — worked on 4G/5G telecom log analytics and fault-detection tooling.
            </p>
          </div>
        </motion.div>
        
        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent flex items-start space-x-4 hover:border-white/20 transition-colors">
          <div className="p-2.5 rounded-lg border border-white/10 mt-1 flex-shrink-0">
            <Users className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold max-w-[200px] sm:max-w-none">Executive Head, E-Summit</h4>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">2021 — 2024</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Led Entrepreneurship Cell at NIT Durgapur — hosted Eastern India's 2nd largest E-Summit with 15+ events and 5,000+ participants.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent flex items-start space-x-4 hover:border-white/20 transition-colors">
          <div className="p-2.5 rounded-lg border border-white/10 mt-1 flex-shrink-0">
            <Lightbulb className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold max-w-[200px] sm:max-w-none">Innovation Council Member</h4>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">NIT Durgapur</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Drove campus innovation initiatives and cross-team collaboration during undergrad.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent flex items-start space-x-4 hover:border-white/20 transition-colors">
          <div className="p-2.5 rounded-lg border border-white/10 mt-1 flex-shrink-0">
            <Code className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-white font-bold max-w-[200px] sm:max-w-none">Strong DSA & Problem Solving</h4>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">Ongoing</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Consistent problem-solving practice across DS, algorithms, and system design — foundation for scalable backend work.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div variants={fadeUpVariant} className="flex items-center space-x-4 mb-6">
        <h3 className="text-neutral-500 font-mono text-xs uppercase tracking-[0.2em]">EDUCATION</h3>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent hover:border-white/20 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-bold max-w-[200px] sm:max-w-none">National Institute of Technology, Durgapur</h4>
            <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">2020 — 2024</span>
          </div>
          <p className="text-sm text-neutral-400 mb-3">B.Tech, Computer Science & Engineering</p>
          <p className="text-xs font-mono text-neutral-400 tracking-wide uppercase">CGPA <span className="text-white">8.44 / 10</span></p>
        </motion.div>

        <motion.div variants={fadeUpVariant} className="p-6 rounded-2xl border border-white/10 bg-transparent hover:border-white/20 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-white font-bold max-w-[200px] sm:max-w-none">Navy Children School, Port Blair</h4>
            <span className="text-xs font-mono text-neutral-500 whitespace-nowrap ml-4 mt-1">2019 — 2020</span>
          </div>
          <p className="text-sm text-neutral-400 mb-3">CBSE — Class XII</p>
          <p className="text-xs font-mono text-neutral-400 tracking-wide uppercase"><span className="text-white">94%</span></p>
        </motion.div>
      </div>
    </Section>
  );
}
