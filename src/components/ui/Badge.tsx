import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-neutral-300 border border-white/10", className)}>
      {children}
    </span>
  );
}
