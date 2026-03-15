import { motion } from "framer-motion";
import { Cloud, Shield, Zap, Globe, RefreshCw, Lock } from "lucide-react";

const features = [
  { icon: Cloud, title: "Cloud-Based Architecture", description: "Scalable infrastructure that grows with your user base. Zero downtime deployments." },
  { icon: Shield, title: "Secure Authentication", description: "Enterprise-grade security with biometric login, 2FA, and end-to-end encryption." },
  { icon: Zap, title: "Real-Time Updates", description: "WebSocket-powered live data sync across all devices and platforms instantly." },
  { icon: Globe, title: "Cross-Platform", description: "Native performance on iOS and Android. One codebase, two ecosystems." },
  { icon: RefreshCw, title: "Scalable APIs", description: "RESTful and GraphQL APIs built to handle millions of requests per second." },
  { icon: Lock, title: "Data Privacy", description: "GDPR and SOC2 compliant. Your data stays yours with full encryption at rest." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Built for scale & security
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every application shares a foundation of battle-tested infrastructure and modern engineering practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="studio-card group"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground text-primary">
                <feature.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
