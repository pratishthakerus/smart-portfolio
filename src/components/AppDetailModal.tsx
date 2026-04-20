import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { X, Star, Download, ShieldCheck, Zap, Info } from "lucide-react";
import { PortfolioApp } from "@/data/portfolioApps";
import { CategoryBackground } from "./CategoryBackgrounds";
import { useEffect } from "react";

interface AppDetailModalProps {
  app: PortfolioApp | null;
  isOpen: boolean;
  onClose: () => void;
}

const AppDetailModal = ({ app, isOpen, onClose }: AppDetailModalProps) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!app) return null;

  const entranceTransition = {
    type: "spring",
    damping: 25,
    stiffness: 200,
    mass: 1,
    duration: 0.4,
    ease: [0.34, 1.56, 0.64, 1], // Requested elastic curve
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            layoutId={`app-card-${app.id}`}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={entranceTransition}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.y > 150) {
                onClose();
              }
            }}
            className="relative w-full max-w-4xl max-h-[95vh] bg-card rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Visual Header / Left Side */}
            <div className="relative w-full md:w-1/2 min-h-[300px] md:min-h-full overflow-hidden">
              <CategoryBackground category={app.category} />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-48 h-48 md:w-64 md:h-64 relative z-10"
                >
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-center z-10"
                >
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                    {app.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold">{app.name}</h2>
                </motion.div>
              </div>

              {/* Mobile Swipe Indicator */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/30 rounded-full md:hidden" />
            </div>

            {/* Right Side / Details */}
            <div className="w-full md:w-1/2 bg-card p-6 md:p-10 overflow-y-auto custom-scrollbar">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors z-20"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Description
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" /> Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {app.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50"
                      >
                        <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Version</span>
                    <span className="text-sm font-mono font-bold text-foreground">{app.version}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Size</span>
                    <span className="text-sm font-mono font-bold text-foreground">{app.size}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Rating</span>
                    <span className="text-sm font-mono font-bold text-foreground flex items-center gap-1">
                      {app.rating} <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button className="flex-1 gradient-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                    <Download className="w-5 h-5" /> Download Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppDetailModal;
