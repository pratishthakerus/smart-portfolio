import { motion } from "framer-motion";
import mockupApp1 from "@/assets/mockup-app1.png";
import mockupApp2 from "@/assets/mockup-app2.png";
import mockupApp3 from "@/assets/mockup-app3.png";

const apps = [
  {
    name: "VitalTrack",
    category: "Health & Fitness",
    description: "AI-powered health monitoring with real-time vitals tracking and personalized fitness plans.",
    features: ["Activity Rings & Goals", "Heart Rate Monitoring", "Sleep Analysis", "Nutrition Tracking"],
    image: mockupApp1,
    version: "v2.4.1",
    size: "14.2MB",
    rating: "4.9★",
  },
  {
    name: "FinFlow",
    category: "Fintech",
    description: "Modern banking reimagined. Instant transfers, smart budgeting, and investment insights.",
    features: ["Smart Budgeting", "Instant Transfers", "Investment Portfolio", "Bill Management"],
    image: mockupApp2,
    version: "v3.1.0",
    size: "18.6MB",
    rating: "4.8★",
  },
  {
    name: "TaskForge",
    category: "Productivity",
    description: "Enterprise task management with kanban boards, calendar sync, and team collaboration.",
    features: ["Kanban Boards", "Calendar Integration", "Team Workspaces", "Automation Rules"],
    image: mockupApp3,
    version: "v1.8.3",
    size: "12.1MB",
    rating: "4.7★",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const AppsGrid = () => {
  return (
    <section id="apps" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Purpose-built applications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Each app is designed from the ground up to solve specific industry challenges with precision and craft.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {apps.map((app) => (
            <motion.div key={app.name} variants={item} className="studio-card group cursor-pointer">
              {/* Mockup area */}
              <div className="bg-muted rounded-2xl p-8 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={app.image}
                  alt={`${app.name} app mockup`}
                  className="w-48 h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-accent px-3 py-1 rounded-full">
                  {app.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{app.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{app.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5">
                {app.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Version info */}
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono tracking-tighter border-t border-border pt-4">
                <span>{app.version}</span>
                <span>•</span>
                <span>{app.size}</span>
                <span>•</span>
                <span>{app.rating}</span>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                <button className="flex-1 gradient-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95">
                  View Details
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground text-sm font-semibold py-2.5 rounded-lg border border-border transition-transform duration-200 hover:scale-105 active:scale-95">
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppsGrid;
