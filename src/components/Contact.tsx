import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 78 780 44 44",
      href: "tel:+41787804444",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "tovautomobile@gmail.com",
      href: "mailto:tovautomobile@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Gewerbestrasse 1A, 5314 Kleindöttingen",
      href: "https://maps.google.com/?q=Gewerbestrasse+1A,+5314+Kleindöttingen",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group block rounded-lg border bg-card p-6 hover:shadow-soft transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-lg mb-1">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <Button asChild size="lg" className="w-full">
                <a href="tel:+41787804444">{t.contact.callNow}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-lg overflow-hidden shadow-soft h-[400px]"
          >
            <iframe
              title="TOV Automobile Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.5194788649527!2d8.231592!3d47.575574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479060f8f7f7f7f7%3A0x1234567890abcdef!2sGewerbestrasse%201A%2C%205314%20Kleind%C3%B6ttingen!5e0!3m2!1sde!2sch!4v1234567890"
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
