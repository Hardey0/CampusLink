import { Logo } from '../../components/UI';

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Marketplace",    href: "#" },
      { label: "Academic Hub",   href: "#" },
      { label: "Tutoring",       href: "#" },
      { label: "Skill Learning", href: "#" },
      { label: "Community",      href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",   href: "#" },
      { label: "Blog",    href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",   href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy",    href: "#" },
    ],
  },
];

function FooterLinkGroup({ heading, links }) {
  return (
    <div>
      <h5 className="font-heading text-[12px] font-semibold tracking-[1px] uppercase text-muted mb-4">
        {heading}
      </h5>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="text-[13px] text-white/55 hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-background px-5 pt-12 pb-7 sm:px-10 lg:px-15 lg:pt-[50px] lg:pb-[30px]">

      {/* Top row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between sm:items-start pb-10 border-b border-white/[0.08] mb-7">

        {/* Brand */}
        <div>
          <a href="#" className="inline-flex items-center gap-2 font-heading font-semibold text-heading-sm text-white no-underline mb-3">
            <Logo size="md" className="text-white" />
            CampusLink
          </a>
          <p className="text-[14px] text-muted max-w-[220px] leading-[1.7]">
            Your all-in-one platform for campus commerce, academics, and community.
          </p>
        </div>

        {/* Link groups */}
        <div className="flex flex-wrap gap-10 sm:gap-15">
          {footerLinks.map((group) => (
            <FooterLinkGroup key={group.heading} {...group} />
          ))}
        </div>

      </div>

      {/* Bottom row */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <p className="text-[12px] text-white/25">
          © 2025 CampusLink. All rights reserved.
        </p>
        <p className="text-[12px] text-white/20">
          Made with ♥ for Nigerian campuses
        </p>
      </div>

    </footer>
  );
}