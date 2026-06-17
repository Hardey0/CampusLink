import { AppIcon } from "../../components/icons";
const features = [
  {
    icon: <AppIcon name="marketplace" className="w-5 h-5"/>,
    iconBg: "bg-warning-soft",
    title: "Campus Marketplace",
    description:
      "Buy and sell products and services within your university community. From gadgets to groceries - all verified and local.",
  },
  {
    icon: <AppIcon name="academicHub" className="w-5 h-5"/>,
    iconBg: "bg-accent-soft",
    title: "Academic Hub",
    description:
      "Access department-specific course materials, past questions, handouts, and notes - organized by your school and level.",
  },
  {
    icon: <AppIcon name="graduationCap" className="w-5 h-5"/>,
    iconBg: "bg-primary-soft",
    title: "Tutoring",
    description:
      "Book verified tutors for any course. Filter by subject, rating, and campus. Pay securely through your wallet.",
  },
  {
    icon: <AppIcon name="service" className="w-5 h-5"/>,
    iconBg: "bg-warning-soft",
    title: "Skill Learning",
    description:
      "Learn UI/UX, coding, public speaking, and more from peer instructors and professionals on your campus.",
  },
  {
    icon: <AppIcon name="community" className="w-5 h-5"/>,
    iconBg: "bg-primary-soft",
    title: "Community",
    description:
      "Join course discussions, department groups, and campus threads. Stay connected with what matters to you.",
  },
  {
    icon: <AppIcon name="creditCard" className="w-5 h-5"/>,
    iconBg: "bg-accent-soft",
    title: "Campus Wallet",
    description:
      "Fund, spend, and withdraw with Paystack. Every transaction is secure, instant, and fully traceable.",
  },
];

function FeatureCard({ icon, iconBg, title, description }) {
  return (
    <div className="group p-8 rounded-lg bg-bg-secondary border border-transparent cursor-default transition-all duration-300 hover:bg-bg hover:border-primary/30 hover:shadow-card hover:-translate-y-1">
      {/* Icon */}
      <div className={`w-[52px] h-[52px] rounded-md ${iconBg} flex items-center justify-center text-2xl mb-5`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-[17px] font-bold text-primary-navy mb-2.5">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-muted leading-[1.65]">
        {description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-15 lg:py-[100px]">
      <div className="max-w-[1200px] mx-auto">

        {/* Section tag */}
        <span className="inline-block text-[12px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
          What we offer
        </span>

        {/* Header row */}
        <div className="flex justify-between items-end flex-wrap gap-6 mb-[60px]">
          <h2 className="font-heading font-extrabold leading-[1.15] tracking-[-1.5px] text-primary-navy text-[clamp(30px,4vw,44px)]">
            Everything your campus
            <br />
            community needs
          </h2>
          <p className="text-[16px] text-muted max-w-[440px] leading-[1.7]">
            From textbooks to tutors, services to skill courses - CampusLink brings it all to one place.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>

      </div>
    </section>
  );
}