import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}
              <br />
              <span className="text-accent">{t.about.title2}</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.p1}
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.p2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border-l-2 border-primary pl-4">
                <div className="font-serif text-3xl font-bold text-primary">14+</div>
                <div className="text-sm text-muted-foreground">{t.about.stat1}</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="font-serif text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">{t.about.stat2}</div>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="font-serif text-3xl font-bold text-primary">365</div>
                <div className="text-sm text-muted-foreground">{t.about.stat3}</div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {t.about.features.map((feature, index) => (
              <div key={index} className="rounded-xl border bg-background p-6 shadow-soft hover:shadow-medium transition-shadow">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
