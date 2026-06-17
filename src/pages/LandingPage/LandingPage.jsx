import Nav from "./Nav";
import { HeroSection } from "./Hero/HeroSection";
import { TrustBar } from "./TrustBar";
import { FeaturesSection } from "./Feature";
import { HowItWorks } from "./HowItWorks";
import { RolesSection } from "./RolesSection";
import { CTASection } from "./CtaSection";
import { Footer } from "./Footer";

const LandingPage = ({ onOpenModal }) => {
  return (
    <div className="bg-bg">
      {/* Navigation */}
      <Nav onOpenModal={onOpenModal} />

      {/* Hero content */}
      <HeroSection />

      {/* Trust Bar */}
      <TrustBar />

      {/* Features */}
      <FeaturesSection />

      {/* How it works */}
      <HowItWorks />

      {/* Roles Section */}
      <RolesSection onSignup={onOpenModal} />

      {/* Call to action */}
      <CTASection onSignup={onOpenModal} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;