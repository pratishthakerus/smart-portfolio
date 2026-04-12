import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Contact</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              Let's build together
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have a project in mind or want to learn more about our apps? We'd love to hear from you.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Contact Us", description: "Write us anytime" },
                { icon: MessageCircle, label: "Technical Support", description: "Quick response guaranteed" },
                { icon: FileText, label: "Documentation", description: "Read our developer docs" },
              ].map(({ icon: Icon, label, description }) => (
                <a
                  key={label}
                  href="#"
                  className="flex items-center gap-4 studio-card !p-4 !rounded-2xl hover:!shadow-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              action="https://formsubmit.co/destiny.centre.anand@gmail.com"
              method="POST"
              className="studio-card !rounded-3xl space-y-5"
            >
              {/* FormSubmit will deliver submissions to destiny.centre.anand@gmail.com. First submission requires confirmation from the recipient. */}
              <input type="hidden" name="_subject" value="New inquiry from Destiny Group website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : '/'} />
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full gradient-primary text-primary-foreground font-semibold py-3 rounded-xl text-sm transition-transform duration-200 hover:scale-[1.02]"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
