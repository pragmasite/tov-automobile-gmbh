import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, ShoppingCart, FileText, DollarSign, Package, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const iconMap = {
  0: Wrench,
  1: ShoppingCart,
  2: FileText,
  3: DollarSign,
  4: Package,
  5: CheckCircle,
};

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 bg-muted">
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
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => {
            const IconComponent = iconMap[i as keyof typeof iconMap] || Package;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.1 + i * 0.05 }}
                className="group rounded-lg border bg-background p-6 hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <IconComponent className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
