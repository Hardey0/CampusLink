import { Button } from "../../components/UI";

const roles = [
  {
    badge: "Student",
    badgeClass: "bg-primary-soft text-primary",
    title: "For Students",
    description:
      "Access academic resources, buy and sell on campus, book tutors, and earn by offering services or selling products.",
    features: [
      "Course materials & past questions",
      "Buy & sell on the marketplace",
      "Book tutors for any course",
      "Earn by selling or teaching",
      "Join campus discussions",
    ],
    ctaColor: "primary",
    ctaLabel: "Continue as Student",
    ctaShadow: "shadow-[0_2px_12px_rgba(13,191,126,0.3)]",
  },
  {
    badge: "CampusPlug",
    badgeClass: "bg-accent-soft text-accent",
    title: "For CampusPlug",
    description:
      "Sell products, offer services, tutor students, or teach skill courses across multiple campuses in Nigeria.",
    features: [
      "List products & services",
      "Reach multiple campuses",
      "Manage orders & bookings",
      "Teach skill courses",
      "Withdraw earnings instantly",
    ],
    ctaColor: "accent",
    ctaLabel: "Continue as CampusPlug",
    ctaShadow: "shadow-[0_2px_12px_rgba(37,99,235,0.3)]",
  },
];

function CheckIcon() {
  return (
    <span
      aria-hidden="true"
      className="w-[18px] h-[18px] shrink-0 rounded-full bg-primary-soft flex items-center justify-center"
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="#0DBF7E"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function RoleCard({ role, onSignup }) {
  const { badge, badgeClass, title, description, features, ctaColor, ctaLabel, ctaShadow } = role;

  const borderHoverMap = {
    primary: "hover:border-primary",
    accent: "hover:border-accent",
  } [ctaColor] || "hover:border-primary";

  return (
    <div className={`bg-card rounded-lg p-8 sm:p-10 border-2 border-transparent ${borderHoverMap} hover:shadow-card transition-all duration-300 flex flex-col`}>

      {/* Badge */}
      <span className={`inline-block self-start px-3 py-1 rounded-full text-[12px] font-semibold mb-5 ${badgeClass}`}>
        {badge}
      </span>

      {/* Title */}
      <h3 className="font-heading text-[22px] font-extrabold text-primary-navy mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-muted leading-[1.7] mb-6">
        {description}
      </p>

      {/* Feature list */}
      <ul className="flex flex-col gap-2.5 mb-7">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-[14px] text-primary-navy">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA — pushed to bottom */}
      <div className="mt-auto">
        <Button
          size="lg"
          variant={ctaColor}
          onClick={(e) => { e.preventDefault(); onSignup?.(); }}
          className={`inline-block w-full text-center font-semibold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200 ${ctaShadow}`}
        >
          {ctaLabel}
        </Button>
      </div>

    </div>
  );
}

export function RolesSection({ onSignup }) {
  return (
    <section className="bg-bg-secondary px-5 py-16 sm:px-10 sm:py-20 lg:px-15 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <span className="inline-block text-[12px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
          Choose your path
        </span>

        <h2 className="font-heading font-extrabold leading-[1.15] tracking-[-1.5px] text-primary-navy text-[clamp(30px,4vw,44px)] mb-4">
          Who are you on
          <br />
          CampusLink?
        </h2>

        <p className="text-[16px] text-muted max-w-[440px] leading-[1.7]">
          We built separate experiences for students and campus service providers.
        </p>

        {/* Roles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-[60px] max-w-[860px]">
          {roles.map((role) => (
            <RoleCard key={role.badge} role={role} onSignup={onSignup} />
          ))}
        </div>

      </div>
    </section>
  );
}