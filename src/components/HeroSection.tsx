import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroMockup from "@/assets/mockup-hero.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const mockupScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center section-padding pt-32 md:pt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ y: textY, opacity: textOpacity }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
            Mobile App Studio
          </p>
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-foreground mb-6">
            Software that feels like{" "}
            <span className="gradient-text">hardware.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
            A collection of purpose-built mobile experiences. Innovative SaaS applications crafted for real-world solutions. High floor, no ceiling.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#apps"
              whileTap={{ scale: 0.96 }}
              className="gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg text-sm transition-transform duration-200 hover:scale-105"
            >
              View Apps
            </motion.a>
            <motion.a
              href="#download"
              whileTap={{ scale: 0.96 }}
              className="bg-secondary text-secondary-foreground font-semibold px-8 py-4 rounded-lg text-sm transition-transform duration-200 hover:scale-105 border border-border"
            >
              Download App
            </motion.a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            {[
              { value: "12+", label: "Apps Shipped" },
              { value: "50K+", label: "Active Users" },
              { value: "4.9★", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-foreground font-mono tracking-tighter">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          style={{ y: mockupY, scale: mockupScale }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/5 blur-3xl" />
            <img
              src={heroMockup}
              alt="SaaS Dashboard App Mockup"
              className="relative w-[320px] md:w-[420px] drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
