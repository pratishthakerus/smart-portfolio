const footerLinks = {
  Product: [
    { label: "All Apps", href: "#apps" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
    { label: "Downloads", href: "#download" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#contact" },
    { label: "Terms of Service", href: "#contact" },
    { label: "Cookie Policy", href: "#contact" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "#", title: "Follow us on Twitter" },
  { label: "GitHub", href: "#", title: "View our open source projects" },
  { label: "LinkedIn", href: "#", title: "Connect with us on LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display font-bold text-xl tracking-tight text-foreground">
              Destiny Studio<span className="gradient-text">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Purpose-built mobile experiences. Inspiration of Vedic wisdom with modern technology.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Destiny Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} title={social.title} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
