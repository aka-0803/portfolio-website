"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon } from "@/components/ui/Icons";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: "/billing-engine",
    title: "Multi-Tenant SaaS Billing Engine",
    description: "Production-grade billing for SaaS: subscriptions, usage metering, and invoicing — without duplicate charges across tenants.",
    details: "Architected a multi-tenant billing engine with isolated tenant data models and full subscription lifecycle (upgrades, downgrades, cancellations). Idempotent invoice generation, Redis-backed async job queues (BullMQ) to decouple billing workflows, and NestJS guards enforcing tenant-level isolation.",
    bullets: [
      "Idempotent invoicing prevents duplicate billing",
      "Async queues decouple heavy workflows from API",
      "Clean service / repository separation"
    ],
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Redis", "BullMQ", "JWT", "PDFKit"],
    github: "https://github.com/aka-0803",
    featured: true
  },
  {
    id: "/connect-social",
    title: "Connect (Social Media Infrastructure)",
    description: "Monolithic social platform engineered to handle self-referencing relationships (replies, quote tweets).",
    details: "Built a solid foundational architecture for a social network. Designed a relational database schema capable of fast queries for user feeds, following relations, and nested discussions without massive nested loop overhead.",
    bullets: [
      "Domain-driven entity separation",
      "Optimized query structures for feed generation",
      "Token-based stateless authentication"
    ],
    stack: ["Node.js", "Express", "MySQL", "React", "JWT"],
    github: "https://github.com/aka-0803/social-media-app",
    featured: false
  }
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader number="03" title="PROJECTS" />
      
      <motion.div variants={fadeUpVariant} className="max-w-3xl mb-12">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
          Selected work, <span className="text-neutral-500">real impact.</span>
        </h2>
        <p className="text-neutral-400 text-lg">
          A mix of production systems and side projects — picked for the architectural decisions behind them, not just the stack.
        </p>
      </motion.div>

      <div className="flex flex-col space-y-6">
        {projects.map((project) => (
          <motion.div 
            variants={fadeUpVariant} 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            key={project.id} 
            className="p-8 md:p-10 rounded-2xl border border-white/10 bg-[#000] shadow-2xl group hover:border-white/20 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500"></div>
            
            <div className="flex justify-between items-start mb-6 align-middle">
              <div className="flex items-center space-x-3 mt-1">
                <span className="text-xs font-mono text-neutral-400">{project.id}</span>
                {project.featured && (
                  <span className="inline-flex items-center px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] font-mono bg-white/[0.03] text-neutral-400 border border-white/5 rounded-full">
                    <Star className="w-3 h-3 mr-1" /> FEATURED
                  </span>
                )}
              </div>
              <Link href={project.github} target="_blank" className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors">
                <GithubIcon className="w-4 h-4" />
              </Link>
            </div>
            
            <Link href={project.github} target="_blank" className="inline-flex items-center group/link mb-4 mt-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{project.title}</h3>
              <ArrowUpRight className="w-4 h-4 ml-2 text-neutral-500 group-hover/link:text-white transition-colors" />
            </Link>
            
            <p className="text-neutral-300 font-medium mb-4 text-sm leading-relaxed">{project.description}</p>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-4xl">{project.details}</p>
            
            <ul className="space-y-2 mb-8">
              {project.bullets.map(bullet => (
                <li key={bullet} className="flex items-start text-sm text-neutral-300">
                  <span className="text-neutral-600 mr-3">•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-[10px] font-mono rounded bg-white/[0.02] text-neutral-400 border border-white/5">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
