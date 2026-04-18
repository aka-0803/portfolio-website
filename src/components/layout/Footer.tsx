import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-6">
        <p className="text-sm text-neutral-500 font-mono">
          Built with Next.js, Tailwind, and Framer Motion.
        </p>
        <div className="flex space-x-6">
          <Link href="https://github.com/aka-0803" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/akash-bahadur-singh/" target="_blank" className="text-neutral-500 hover:text-white transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link href="mailto:akash.b.singh08@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Akash Bahadur Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
