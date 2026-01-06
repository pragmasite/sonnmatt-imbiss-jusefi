import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-4">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">{t.contact.phone}</h3>
                <a
                  href="tel:+41527217575"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +41 52 721 75 75
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">{t.contact.address}</h3>
                <p className="text-muted-foreground">
                  Schaffhauserstrasse 13
                  <br />
                  8500 Frauenfeld, Schweiz
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">{t.contact.email}</h3>
                <a
                  href="mailto:info@sonnmatt.ch"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@sonnmatt.ch
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="tel:+41527217575">{t.contact.cta}</a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-96 rounded-2xl overflow-hidden border shadow-soft"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.8926388743477!2d8.887902!3d47.561138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479034a5b4b4b4b5%3A0x9c0b0b0b0b0b0b0b!2sSchaffhauserstrasse%2013%2C%208500%20Frauenfeld!5e0!3m2!1sde!2sch!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
