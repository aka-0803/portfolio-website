export function SectionHeader({ number, title }: { number: string, title: string }) {
  return (
    <div className="flex items-center space-x-4 mb-16">
      <span className="text-neutral-500 font-mono text-xs">{number}</span>
      <span className="text-neutral-600 font-mono text-xs">/</span>
      <h2 className="text-neutral-400 font-mono text-xs uppercase tracking-[0.2em]">{title}</h2>
      <div className="flex-1 h-px bg-white/5 ml-4" />
    </div>
  );
}
