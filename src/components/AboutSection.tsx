import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const technologies = [
  "React Native", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Firebase", "GraphQL", "Docker",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">About</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              The studio behind the craft
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We're a small, focused team of engineers and designers obsessed with building mobile software that feels like hardware. Every pixel is intentional, every interaction is weighted, every API is battle-tested.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over a decade of experience shipping production apps to millions of users, we bring the discipline of systems engineering to the craft of product design.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={Icon.displayName}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Technologies We Use</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-muted text-muted-foreground text-sm font-medium px-4 py-2 rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {[
                { value: "20+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "12M+", label: "Users Reached" },
                { value: "99.9%", label: "Uptime SLA" },
              ].map((stat) => (
                <div key={stat.label} className="studio-card text-center">
                  <p className="text-2xl font-bold text-foreground font-mono tracking-tighter">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
