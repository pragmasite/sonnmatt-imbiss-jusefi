import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <img src="/images/logo.png" alt="Logo" className="h-10 w-auto mb-4" />
            <p className="text-sm opacity-80">{t.footer.description}</p>
          </motion.div>

          {/* Navigation */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h3 className="font-serif text-lg font-semibold mb-4">{t.footer.navigation}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="font-serif text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41527217575"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  +41 52 721 75 75
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sonnmatt.ch"
                  className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@sonnmatt.ch
                </a>
              </li>
              <li className="text-sm opacity-80">
                Schaffhauserstrasse 13
                <br />
                8500 Frauenfeld
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h3 className="font-serif text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-1 text-sm opacity-80">
              <li>Mo - Fr: 10:00 - 14:00</li>
              <li>Mo - Fr: 16:00 - 21:30</li>
              <li>Sa: 10:30 - 21:30</li>
              <li>So: Geschlossen</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-60">
            © {currentYear} Sonnmatt Imbiss Jusefi. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
