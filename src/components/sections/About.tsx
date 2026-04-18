"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { Server, ShieldCheck, Database } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about">
      <SectionHeader number="01" title="ABOUT" />
      
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <motion.div variants={fadeUpVariant} className="md:col-span-6 flex flex-col space-y-6">
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">// Headline</p>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-white">Backend Engineer</span><br/>
            <span className="text-neutral-500 font-medium text-3xl">· SaaS · Node.js · NestJS · TypeScript</span>
          </h3>
          <p className="text-lg text-neutral-300 leading-relaxed pt-2">
            Shipping reliable backends for enterprise SaaS — auth, billing, and integrations.
          </p>
          <p className="text-base text-neutral-500 leading-relaxed pt-4">
            Currently at Truein. Previously interned at Samsung R&D. Always exploring system design, distributed systems, and clean API architecture.
          </p>
        </motion.div>
        
        <div className="md:col-span-6 flex flex-col space-y-4">
          <motion.div variants={fadeUpVariant} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-start space-x-6">
            <div className="p-3 bg-black rounded-lg border border-white/10 mt-1">
              <Server className="w-5 h-5 text-neutral-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">APIs & Integrations</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">REST APIs, third-party integrations, cron-based sync jobs, idempotent data pipelines.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-start space-x-6">
            <div className="p-3 bg-black rounded-lg border border-white/10 mt-1">
              <ShieldCheck className="w-5 h-5 text-neutral-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Auth & Billing</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">SAML 2.0 SSO, JWT auth, multi-tenant billing engines, invoice workflows, usage metering.</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="p-6 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors flex items-start space-x-6">
            <div className="p-3 bg-black rounded-lg border border-white/10 mt-1">
              <Database className="w-5 h-5 text-neutral-400" />
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Systems & Scale</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">Redis caching, MySQL query tuning, BullMQ queues, multi-tenant architecture, service boundaries.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
