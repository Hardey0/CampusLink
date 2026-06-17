import { HeroBadge } from "./HeroBadge";
import { Button } from "../../../../components/UI";


function CheckCircleIcon({color=""}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 ${color}`}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5.5 8l1.5 1.5 3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroContent({ onSignup }) {
  return (
    <div className="animate-fade-up delay-0 relative z-10 max-w-[600px] w-full">
      {/* Badge */}
      <HeroBadge>Built for Nigerian campuses</HeroBadge>

      {/* Heading */}
      <h1 className="animate-fade-up delay-150 font-heading font-semibold leading-[1.08] tracking-[-2px] text-primary-navy mb-6 text-[clamp(42px,5.5vw,68px)]">
        Your Campus,
        <br />
        <span className="text-primary accent-underline">Fully Connected</span>
      </h1>

      {/* Subtitle */}
      <p className="animate-fade-up delay-200 text-[17px] leading-[1.7] text-muted mb-10 max-w-[480px]">
        Buy, sell, learn, earn, and connect - all in one platform built for
        students and campus businesses across Nigeria.
      </p>

      {/* CTA row */}
      <div className="animate-fade-up delay-250 flex flex-wrap gap-3.5 items-center">
        <Button
          onClick={(e) => { e.preventDefault(); onSignup?.(); }}
          variant="primary"
          size="lg"
          className="font-semibold rounded-md text-[15px] transition-colors duration-200"
        >
          Create free account
        </Button>
        <div className="flex items-center gap-1.5 text-[13px] text-muted">
          <CheckCircleIcon color="text-primary" />
          Free to join. No credit card needed.
        </div>
      </div>
    </div>
  );
}
