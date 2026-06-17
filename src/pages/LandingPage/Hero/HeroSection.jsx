import { HeroBackground } from "./component/HeroBackground";
import { HeroContent }    from "./component/HeroContent";
import { HeroVisual }     from "./component/HeroVisual";

/**
 * HeroSection
 *
 * Props:
 *   onSignup — optional callback fired when the CTA button is clicked
 */
export function HeroSection({ onSignup }) {
  return (
    <section className="relative min-h-screen flex items-center px-5 pt-24 pb-16 sm:px-10 sm:pt-28 lg:px-15 lg:pt-[120px] lg:pb-20 overflow-hidden">
      <HeroBackground />
      <HeroContent onSignup={onSignup} />
      <HeroVisual />
    </section>
  );
}
