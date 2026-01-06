import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">TOV Automobile</h3>
            <p className="text-sm opacity-90">{t.footer.tagline}</p>
            <p className="text-sm mt-4 opacity-75">{t.footer.description}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: t.nav.about },
                { href: "#services", label: t.nav.services },
                { href: "#gallery", label: t.nav.gallery },
                { href: "#hours", label: t.nav.hours },
                { href: "#contact", label: t.nav.contact },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold mb-4">{t.contact.label}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+41787804444"
                  className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  +41 78 780 44 44
                </a>
              </li>
              <li>
                <a
                  href="mailto:tovautomobile@gmail.com"
                  className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  tovautomobile@gmail.com
                </a>
              </li>
              <li className="text-sm opacity-75">
                Gewerbestrasse 1A<br />
                5314 Kleindöttingen
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center text-sm"
          >
            <p className="opacity-75">
              © {new Date().getFullYear()} TOV Automobile GmbH. {t.footer.copyright}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
