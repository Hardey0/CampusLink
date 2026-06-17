export function HeroBadge({ children }) {
  return (
    <div className="animate-fade-up delay-100 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-[13px] font-medium mb-7">
      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
      {children}
    </div>
  );
}
