
const universities = [
  "University of Lagos",
  "Covenant University",
  "University of Ibadan",
  "LASU",
  "OAU",
  "UNIABUJA",
  "Babcock University",
];

// Duplicated list creates the seamless loop —
// the marquee animates exactly -50% so it resets invisibly.
const items = [...universities, ...universities];

export function TrustBar() {
  return (
    <div className="bg-navy-background px-5 sm:px-15 py-4 flex items-center gap-10 overflow-hidden">

      {/* Static label */}
      <span className="font-heading text-[12px] font-bold text-muted uppercase tracking-widest whitespace-nowrap shrink-0">
        Campuses
      </span>

      {/* Scrolling track */}
      <div className="overflow-hidden flex-1">
        <div className="animate-marquee flex items-center whitespace-nowrap w-max">
          {items.map((name, i) => (
            <span key={i} className="shrink-0 flex items-center">
              <span className="text-[13px] font-semibold text-muted">
                {name}
              </span>
              <span className="mx-6 text-muted select-none">·</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
