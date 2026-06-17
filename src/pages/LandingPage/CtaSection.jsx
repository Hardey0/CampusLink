import { Button } from "../../components/UI";

export function CTASection({ onSignup, onLearnMore }) {
  return (
    <section className="px-5 py-16 sm:px-10 sm:py-20 lg:px-15 lg:py-[100px] text-center">
      <div className="max-w-[600px] mx-auto">

        {/* Tag */}
        <span className="inline-block text-[12px] font-semibold tracking-[1.5px] uppercase text-primary mb-4">
          Join today
        </span>

        {/* Heading */}
        <h2 className="font-heading font-extrabold leading-[1.15] tracking-[-2px] text-primary-navy text-[clamp(30px,4vw,44px)] mb-4">
          Ready to connect
          <br />
          your campus?
        </h2>

        {/* Subtitle */}
        <p className="text-[16px] text-muted leading-[1.7] max-w-[440px] mx-auto mb-10">
          Thousands of students and plugs are already on CampusLink. Don't get left behind.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3.5 justify-center">
          <Button
            href="#"
            size="lg"
            variant="primary"
            onClick={(e) => { e.preventDefault(); onSignup?.(); }}
            className="font-bold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200"
          >
            Get started - it's free
          </Button>
          <Button
            href="#"
            size="lg"
            variant="card"
            onClick={(e) => { e.preventDefault(); onLearnMore?.(); }}
            className="hover:border-primary font-bold px-8 py-3.5 rounded-md text-[15px] transition-colors duration-200"
          >
            Learn more
          </Button>
        </div>

      </div>
    </section>
  );
}