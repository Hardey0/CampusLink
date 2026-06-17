import React from 'react';
import { Logo, Button } from '../../components/UI';

const Navbar = () => {
  const navLinks = [
    { name: 'Marketplace', href: '#' },
    { name: 'Academic Hub', href: '#' },
    { name: 'Tutoring', href: '#' },
    { name: 'Community', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg/60 backdrop-blur-[16px] border border-border transition-all duration-300">
      <div className="mx-auto px-4 sm:px-5 md:px-10 lg:px-[60px] h-[64px] sm:h-[72px] md:h-[78px] flex items-center justify-between">

        {/* Logo - Always Visible */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 no-underline shrink-0">
          <Logo size="md" className="text-text" />
          <span className="[@media(max-width:400px)]:hidden font-heading text-heading-sm font-semibold text-text">
            CampusLink
          </span>
        </a>

        {/* Nav Links: 
           'hidden' by default (mobile) 
           'md:flex' ensures they only appear at 768px and above 
        */}
        <ul className="hidden lg:flex items-center gap-5 lg:gap-6 xl:gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-sm text-muted hover:text-text hover:opacity-80 transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions: 
           Keeping buttons visible, but you can add 'hidden md:flex' 
           here too if you want them to disappear on mobile.
        */}
        <div className="flex items-center gap-3">

          <Button
            size="md"
            variant="card"
            className="rounded-md hover:border-primary hover:text-primary transition-colors duration-200">
            Log in
          </Button>

          <Button
            size="md"
            variant="primary"
            className="rounded-md shadow-[0_2px_12px_rgba(13,191,126,0.3)] transition-transform duration-200 hover:-translate-y-[2px]"
          >
            Get started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;