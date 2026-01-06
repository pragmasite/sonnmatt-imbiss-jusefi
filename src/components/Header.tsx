import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.about}
          </a>
          <a
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.services}
          </a>
          <a
            href="#gallery"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.gallery}
          </a>
          <a
            href="#hours"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.hours}
          </a>
          <a
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            {t.nav.contact}
          </a>

          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-accent"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          {/* Call Button */}
          <Button asChild className="bg-primary hover:bg-primary/90">
            <a href="tel:+41527217575" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.about}
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.services}
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.gallery}
            </a>
            <a
              href="#hours"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.hours}
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
            <Link
              to={otherLangPath}
              className="text-sm font-medium text-foreground hover:text-primary flex items-center gap-1.5"
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href="tel:+41527217575" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
