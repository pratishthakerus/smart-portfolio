import { motion } from "framer-motion";
import { Download, Smartphone, Apple, Play } from "lucide-react";

const apps = [
  {
    name: "VitalTrack",
    version: "v2.4.1",
    size: "14.2 MB",
    updated: "March 10, 2026",
    releaseNotes: [
      "Improved heart rate accuracy with new sensor algorithms",
      "Added sleep stage breakdown (REM, deep, light)",
      "Fixed crash on iOS 18 when syncing health data",
      "New widget for home screen activity rings",
    ],
  },
  {
    name: "FinFlow",
    version: "v3.1.0",
    size: "18.6 MB",
    updated: "March 5, 2026",
    releaseNotes: [
      "Instant bank transfers now available in 12 new countries",
      "Redesigned investment portfolio dashboard",
      "Added biometric authentication for transactions",
      "Performance improvements and bug fixes",
    ],
  },
  {
    name: "TaskForge",
    version: "v1.8.3",
    size: "12.1 MB",
    updated: "February 28, 2026",
    releaseNotes: [
      "New automation rules for recurring tasks",
      "Calendar sync now supports Google & Outlook",
      "Improved kanban board drag-and-drop performance",
      "Dark mode refinements across all screens",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const DownloadSection = () => {
  return (
    <section id="download" className="section-padding bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Download</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Get our apps on any platform
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Available on Google Play, the App Store, or as a direct APK download.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {apps.map((app) => (
            <motion.div key={app.name} variants={item} className="studio-card flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{app.name}</h3>
                <span className="text-xs font-mono tracking-tighter text-muted-foreground bg-muted px-3 py-1 rounded-full">
                  {app.version}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono tracking-tighter mb-5">
                <span>{app.size}</span>
                <span>•</span>
                <span>Updated {app.updated}</span>
              </div>

              {/* Release Notes */}
              <div className="mb-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Release Notes</p>
                <ul className="space-y-2">
                  {app.releaseNotes.map((note, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col gap-2.5">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-lg text-sm font-semibold gradient-primary text-primary-foreground transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Play size={16} />
                  Google Play
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-lg text-sm font-semibold bg-foreground text-background transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Apple size={16} />
                  App Store
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-lg text-sm font-semibold bg-secondary text-secondary-foreground border border-border transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Download size={16} />
                  Download APK
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
