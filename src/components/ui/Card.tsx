import { cn } from "@/lib/utils";

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border border-white/10 bg-black/50 p-6 backdrop-blur-sm", className)}>
      {children}
    </div>
  );
}
