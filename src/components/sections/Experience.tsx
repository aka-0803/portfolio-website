"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader number="04" title="EXPERIENCE" />
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <motion.div variants={fadeUpVariant} className="md:col-span-5 sticky top-24">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
            Where I've <span className="text-neutral-500">worked.</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed mt-6">
            Building reliable systems at scale and learning the hard lessons of enterprise software.
          </p>
        </motion.div>
        <div className="md:col-span-7 flex flex-col space-y-6">
          
          <motion.div variants={fadeUpVariant} className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-[#000] hover:border-white/20 transition-all shadow-xl">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-white">Truein</h3>
              <p className="text-xs font-mono text-neutral-500">2022 - Present</p>
            </div>
            <p className="text-emerald-400 font-mono text-sm mb-6">Associate Software Engineer</p>
            
            <ul className="space-y-4 text-neutral-400 text-sm leading-relaxed">
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3 mt-0.5">•</span>
                <span><strong className="text-white">Enterprise Authentication:</strong> Led the rollout of Enterprise SAML SSO, enabling frictionless federated authentication for enterprise clients with over 10,000+ users.</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3 mt-0.5">•</span>
                <span><strong className="text-white">Performance Optimization:</strong> Triggered a 65% drop in API latency on high-traffic endpoints by implementing robust Redis caching and strategic MySQL indexing.</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3 mt-0.5">•</span>
                <span><strong className="text-white">Data Pipeline Stability:</strong> Architected data pipelines capable of handling 10,000+ records/day, successfully cutting core product incidents by 40%.</span>
              </li>
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3 mt-0.5">•</span>
                <span><strong className="text-white">Core Backend:</strong> Engineered and maintained cron-based REST integrations moving large volumes of data, powering the central attendance backend for 4,000+ daily active users.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariant} className="group relative p-8 md:p-10 rounded-2xl border border-white/10 bg-[#000] hover:border-white/20 transition-all shadow-xl">
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-2xl font-bold text-white">Samsung R&D</h3>
              <p className="text-xs font-mono text-neutral-500">Previous</p>
            </div>
            <p className="text-neutral-400 font-mono text-sm mb-6">Software Engineering Intern</p>
            
            <ul className="space-y-4 text-neutral-400 text-sm leading-relaxed">
              <li className="flex items-start">
                <span className="text-neutral-600 mr-3 mt-0.5">•</span>
                <span>Applied strong problem-solving and Data Structures (DSA) knowledge to optimize internal code routines and research scalable software architectures.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
