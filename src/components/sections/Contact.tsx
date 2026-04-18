"use client";
import { Section, fadeUpVariant } from "@/components/ui/Section";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/Icons";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <Section id="contact" className="pb-32">
      <SectionHeader number="06" title="CONTACT" />

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <motion.div variants={fadeUpVariant} className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            Let's build something
            <br />
            <span className="text-neutral-500">reliable.</span>
          </h2>
          <p className="text-neutral-400 leading-relaxed max-w-md">
            I'm currently open to backend engineering roles and interesting
            contract work. Drop a note — I usually reply within a day.
          </p>

          <div className="pt-8 flex flex-col space-y-4 text-left">
            <a href="mailto:akashbahadursingh5@gmail.com" className="flex items-center space-x-4 group cursor-pointer w-fit pl-2">
              <div className="p-3 rounded-xl border border-white/10 bg-transparent group-hover:border-white/20 transition-colors">
                <Mail className="w-5 h-5 text-neutral-400" />
              </div>
              <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">
                akashbahadursingh5@gmail.com
              </span>
            </a>

            <a href="https://linkedin.com/in/akash-bahadur-singh" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-pointer w-fit pl-2">
              <div className="p-3 rounded-xl border border-white/10 bg-transparent group-hover:border-white/20 transition-colors">
                <LinkedinIcon className="w-5 h-5 text-neutral-400" />
              </div>
              <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">
                in/akash-bahadur-singh
              </span>
            </a>

            <a href="https://github.com/aka-0803" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-pointer w-fit pl-2">
              <div className="p-3 rounded-xl border border-white/10 bg-transparent group-hover:border-white/20 transition-colors">
                <GithubIcon className="w-5 h-5 text-neutral-400" />
              </div>
              <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">
                github.com/aka-0803
              </span>
            </a>

            <a href="https://x.com/AkashbahadurSi5" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-pointer w-fit pl-2">
              <div className="p-3 rounded-xl border border-white/10 bg-transparent group-hover:border-white/20 transition-colors">
                <TwitterIcon className="w-5 h-5 text-neutral-400" />
              </div>
              <span className="font-mono text-sm text-neutral-300 group-hover:text-white transition-colors">
                @AkashbahadurSi5
              </span>
            </a>
          </div>
        </motion.div>

        <motion.form
          variants={fadeUpVariant}
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl border border-white/10 bg-transparent flex flex-col space-y-6 lg:mt-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2 text-left">
              <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-1">
                NAME
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                disabled={status !== "idle"}
                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.03] transition-colors disabled:opacity-50"
              />
            </div>
            <div className="space-y-2 text-left">
              <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-1">
                EMAIL
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                disabled={status !== "idle"}
                className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.03] transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-2 text-left">
            <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest pl-1">
              MESSAGE
            </label>
            <textarea
              required
              placeholder="Tell me what you're building — role, timeline, stack."
              rows={4}
              disabled={status !== "idle"}
              className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/20 focus:bg-white/[0.03] transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 pb-2 gap-4">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "idle" && (
                <>
                  <Send className="w-4 h-4 mr-2" /> Send message
                </>
              )}
              {status === "sending" && (
                <span className="animate-pulse">Sending...</span>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" /> Sent!
                </>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
