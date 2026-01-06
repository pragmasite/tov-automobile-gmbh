import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Gallery images with descriptions in German
  const images: GalleryImage[] = [
    { src: "/images/img-1.jpg", alt: "Luxus-Sportfahrzeug" },
    { src: "/images/img-2.jpg", alt: "Hochleistungs-BMW" },
    { src: "/images/img-3.jpg", alt: "Eleganter Mercedes" },
    { src: "/images/img-4.jpg", alt: "Moderner Sportwagen" },
    { src: "/images/img-5.jpg", alt: "Gelbes Performance-Auto" },
    { src: "/images/img-6.jpg", alt: "Starker Quattro" },
    { src: "/images/img-7.jpg", alt: "Schwarzes Traumauto" },
    { src: "/images/img-8.jpg", alt: "Modernes Design-Fahrzeug" },
    { src: "/images/img-9.jpg", alt: "Innenraum Luxury" },
    { src: "/images/img-10.jpg", alt: "Schwarzes Edel-Modell" },
    { src: "/images/img-11.jpg", alt: "Premium-Ausstattung" },
    { src: "/images/img-12.jpg", alt: "Cockpit-Details" },
    { src: "/images/img-13.jpg", alt: "Grauer Eleganz-Wagen" },
    { src: "/images/img-14.jpg", alt: "Blaues Kraftpaket" },
    { src: "/images/img-15.jpg", alt: "Kompakter Sportler" },
    { src: "/images/img-16.jpg", alt: "Vielseitiges Fahrzeug" },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <section id="gallery" ref={ref} className="py-24 bg-background">
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
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.gallery.title}</h2>
          <p className="text-lg text-muted-foreground mt-4">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Image Description Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6"
            >
              <p className="font-serif text-2xl font-bold text-white">
                {images[currentIndex].alt}
              </p>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/40 p-3 text-white hover:bg-black/60 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {images.map((img, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={`flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition-all ${
                  i === currentIndex
                    ? "border-primary"
                    : "border-border hover:border-primary/50"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </motion.button>
            ))}
          </div>

          {/* Slide Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-center text-sm text-muted-foreground"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
