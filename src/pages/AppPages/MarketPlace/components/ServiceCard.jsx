import { AppIcon } from "../../../../components/icons";
import { Button } from "../../../../components/UI/Button";

/**
 * Card for a single campus service listing.
 *
 * Props:
 *   service – service data object
 */
export default function ServiceCard({ service }) {
  return (
    <div className="group bg-card border border-border
      rounded-2xl p-3 sm:p-4 cursor-pointer transition-all duration-300 hover:-translate-y-1
      hover:border-primary
      hover:shadow-xl hover:shadow-primary/10 min-w-0">

      {/* Header — icon + title + provider */}
      <div className="flex items-start gap-2.5 sm:gap-3 mb-2.5">
        <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br
          ${service.color} flex items-center justify-center shrink-0`}>
          <AppIcon name={service.icon} className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] sm:text-[14px] font-semibold text-primary-navy truncate">
            {service.title}
          </div>
          <div className="text-[10.5px] sm:text-[11.5px] text-muted/70
            flex items-center gap-1 mt-0.5 truncate">
            <AppIcon name={"mapPin"} className="size-3 shrink-0" />
            <span className="truncate">{service.provider} · {service.campus}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[11.5px] sm:text-[12.5px] text-muted
        leading-relaxed mb-3 line-clamp-2">
        {service.desc}
      </p>

      {/* Footer — price + CTA */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold text-[13px] sm:text-[14px] text-primary-navy
          truncate">
          ₦{service.price.toLocaleString()}{service.unit && `/${service.unit}`}
        </span>
        <Button
          size="sm"
          variant="ghost"
          className="shrink-0 px-3 sm:px-3.5 py-1.5 rounded-lg  hover:text-white font-semibold transition-all duration-200">
          Book Now
        </Button>
      </div>
    </div>
  );
}
