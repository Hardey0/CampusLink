export function FloatCard({ className = "", children }) {
  return (
    <div
      className={[
        "bg-card rounded-lg border border-border",
        "shadow-card",
        "hover:-translate-y-1 transition-transform duration-300",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

export function CardIcon({ bg = "bg-primary-soft", children }) {
  return (
    <div className={`w-10 h-10 rounded-[10px] ${bg} flex items-center justify-center text-xl mb-3`}>
      {children}
    </div>
  );
}
