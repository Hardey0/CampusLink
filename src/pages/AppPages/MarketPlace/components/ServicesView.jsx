import ServiceCard from "./ServiceCard";

/**
 * Services tab content.
 * Renders a result count header and a responsive grid of ServiceCards.
 *
 * Props:
 *   services – service data array
 */
export default function ServicesView({ services }) {
  return (
    <>
      {/* Result count */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-[12.5px] sm:text-[13px] text-muted">
          Showing{" "}
          <strong className="text-primary-navy">{services.length}</strong>{" "}
          services
        </span>
      </div>

      {/* Service grid
          Breakpoint strategy:
            < 640px  → 1 col
            640–1279 → 2 cols
            1280+    → 4 cols (wide desktop with sidebar)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2.5 sm:gap-3">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>
    </>
  );
}
