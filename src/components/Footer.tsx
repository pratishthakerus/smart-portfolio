const footerLinks = {
  Product: ["All Apps", "Pricing", "Documentation", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const Footer = () => {
  return (
    <footer className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display font-bold text-xl tracking-tight text-foreground">
              Studio<span className="gradient-text">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Purpose-built mobile experiences. High floor, no ceiling.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a key={social} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
