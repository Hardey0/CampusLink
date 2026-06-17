import { AppIcon } from "../../components/icons";

const steps = [
  {
    num: "Step 01",
    icon: <AppIcon name="target" className="w-6 h-6"/>,
    title: "Pick your role",
    description:
      "Join as a Student to buy, learn and earn - or as a Plug to sell products, teach, or offer services.",
  },
  {
    num: "Step 02",
    icon: <AppIcon name="school" className="w-6 h-6"/>,
    title: "Set your campus",
    description:
      "Link your school, department, and level so CampusLink can show you the most relevant content.",
  },
  {
    num: "Step 03",
    icon: <AppIcon name="creditCard" className="w-6 h-6"/>,
    title: "Connect your wallet",
    description:
      "Securely link Paystack to fund your wallet and start transacting across the platform instantly.",
  },
  {
    num: "Step 04",
    icon: <AppIcon name="rocket" className="w-6 h-6"/>,
    title: "Explore & connect",
    description:
      "Browse listings, unlock course materials, book tutors, and engage with your campus community.",
  },
];

function StepCard({ num, icon, title, description }) {
  return (
    <div className="relative">
      {/* Step number */}
      <p className="font-heading text-[11px] font-bold tracking-[2px] uppercase text-primary mb-5">
        {num}
      </p>

      {/* Icon */}
      <div className="w-14 h-14 rounded-[14px] bg-primary/10 border border-primary/20 flex items-center justify-center text-white text-[26px] mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-[16px] font-bold text-white mb-2.5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-muted leading-[1.65]">
        {description}
      </p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="relative bg-navy-background px-5 py-16 sm:px-10 sm:py-20 lg:px-15 lg:py-[100px] overflow-hidden">

      {/* Decorative blob — top right */}
      <div
        aria-hidden="true"
        className="absolute -top-[100px] -right-[100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(13,191,126,0.1), transparent 70%)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* Header */}
        <span className="inline-block text-[12px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
          How it works
        </span>

        <h2 className="font-heading font-extrabold leading-[1.15] tracking-[-1.5px] text-white text-[clamp(30px,4vw,44px)] mb-4">
          Up and running
          <br />
          in minutes
        </h2>

        <p className="text-[16px] text-muted max-w-[440px] leading-[1.7]">
          Getting started on CampusLink is simple - follow these steps and you're in.
        </p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-[60px]">
          {steps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>

      </div>
    </section>
  );
}
