import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images with descriptions
  const images = [
    { src: "/images/img-1.jpg", alt: "Köstlicher Döner" },
    { src: "/images/img-2.jpg", alt: "Klassischer Dönerspieß" },
    { src: "/images/img-3.jpg", alt: "Frische Brötchen" },
    { src: "/images/img-4.jpg", alt: "Dönerfleisch" },
    { src: "/images/img-5.jpg", alt: "Knusprige Verpackung" },
    { src: "/images/img-6.jpg", alt: "Premium Döner" },
    { src: "/images/img-7.jpg", alt: "Frische Pommes" },
    { src: "/images/img-8.jpg", alt: "Köstliche Vorbereitung" },
    { src: "/images/img-9.jpg", alt: "Gourmet Döner" },
    { src: "/images/img-10.jpg", alt: "Gesunde Zutaten" },
    { src: "/images/img-11.jpg", alt: "Frische Saucen" },
    { src: "/images/img-12.jpg", alt: "Hochwertige Qualität" },
    { src: "/images/img-13.jpg", alt: "Perfekte Komposition" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl mb-4">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider for 13+ images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <img
              src={images[currentSlide].src}
              alt={images[currentSlide].alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium">{images[currentSlide].alt}</p>
              <p className="text-xs text-white/60 mt-1">
                {currentSlide + 1} / {images.length}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-16 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                  currentSlide === index
                    ? "border-primary ring-2 ring-primary/50"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
