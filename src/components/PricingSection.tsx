import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for trying out our apps",
    features: ["1 App Access", "Basic Features", "Community Support", "5GB Storage", "Standard API Access"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 19,
    yearlyPrice: 190,
    description: "For power users who need more",
    features: ["All Apps Access", "Premium Features", "Priority Support", "50GB Storage", "Advanced API Access", "Custom Integrations"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 49,
    yearlyPrice: 490,
    description: "For teams and organizations",
    features: ["Unlimited Access", "All Features", "24/7 Dedicated Support", "Unlimited Storage", "Enterprise API", "White-Label Options", "SLA Guarantee"],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-1 mt-8 bg-muted p-1 rounded-full w-fit mx-auto">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !yearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                yearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"
              }`}
            >
              Yearly <span className="text-primary text-xs ml-1">Save 17%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`studio-card relative ${
                plan.popular
                  ? "ring-2 ring-primary scale-105"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold text-foreground font-mono tracking-tighter">
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  /{yearly ? "year" : "month"}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileTap={{ scale: 0.96 }}
                className={`w-full py-3 rounded-lg text-sm font-semibold transition-transform duration-200 hover:scale-105 ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground border border-border"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
