import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Utensils } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="services" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-xl border bg-background p-8 shadow-soft hover:shadow-medium hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Utensils className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
