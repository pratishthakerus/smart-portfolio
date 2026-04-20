import { motion } from "framer-motion";

interface BackgroundProps {
  category: string;
}

const StarField = () => {
  const stars = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            opacity: Math.random() * 0.7 + 0.3,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const NumberGrid = () => {
  const numbers = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="grid grid-cols-8 gap-4 p-4 text-[10px] font-mono text-white/50">
        {numbers.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Math.floor(Math.random() * 10)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const CategoryBackground = ({ category }: BackgroundProps) => {
  switch (category) {
    case "Astrology":
      return (
        <div className="absolute inset-0 bg-[#1A0B2E]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2D0A4E] to-[#1A0B2E]" />
          <StarField />
        </div>
      );
    case "Numerology":
      return (
        <div className="absolute inset-0 bg-[#002D2D]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#004D4D] to-[#002D2D]" />
          <NumberGrid />
        </div>
      );
    case "Lal Kitab":
      return (
        <div className="absolute inset-0 bg-[#4A0E0E]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C1C1C] to-[#4A0E0E]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
        </div>
      );
    default:
      return (
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/glass-flat.png')]" />
        </div>
      );
  }
};
