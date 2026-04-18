"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "BACKEND",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "BullMQ", "Microservices"],
  },
  {
    title: "DATABASES & CACHE",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Prisma ORM"],
  },
  {
    title: "LANGUAGES",
    skills: ["TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    title: "AUTH & SECURITY",
    skills: ["SAML 2.0 SSO", "JWT", "OAuth"],
  },
  {
    title: "DEVOPS & TOOLING",
    skills: ["Docker", "Git", "Jenkins", "Linux", "Swagger", "AWS"],
  },
  {
    title: "FRONTEND",
    skills: ["React", "Tailwind", "HTML/CSS"],
  }
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader number="02" title="SKILLS" />
      
      <div className="grid md:grid-cols-12 gap-16 items-start">
        <motion.div variants={fadeUpVariant} className="md:col-span-5">
          <h2 className="text-4xl pr-10 font-bold tracking-tight text-white mb-2 leading-[1.1]">
            Tools I reach for when <span className="text-neutral-500">building production systems.</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed mt-6 pr-8">
            My work lives in the layer between APIs, queues, and databases — where correctness, latency, and observability actually matter.
          </p>
        </motion.div>
        
        <div className="md:col-span-7 flex flex-col pt-2">
          {skillCategories.map((category) => (
            <motion.div variants={fadeUpVariant} key={category.title} className="py-6 border-t border-white/5 -mt-px first:border-0 first:pt-0">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest min-w-[170px]">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-xs font-medium rounded-md bg-transparent text-neutral-300 border border-white/10 hover:border-white/20 hover:text-white transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
