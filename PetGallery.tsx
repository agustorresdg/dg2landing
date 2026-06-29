import { motion } from "framer-motion";
import { Section } from "./Section";

const gallery = [
  { src: "/assets/img/imagen-1.jpg", label: "Glossy trim" },
  { src: "/assets/img/imagen-2.jpg", label: "Kawaii wash" },
  { src: "/assets/img/imagen-1.jpg", label: "Soft paws" },
  { src: "/assets/img/imagen-2.jpg", label: "Runway coat" },
];

export function PetGallery() {
  return (
    <Section id="gallery" className="bg-ink px-4 pb-24 text-paper md:px-8">
      <div className="mx-auto max-w-page">
        <div className="magazine-grid">
          {gallery.map((item, index) => (
            <motion.figure
              key={`${item.label}-${index}`}
              className="col-span-12 overflow-hidden rounded-brutal border-2 border-paper bg-pink p-3 text-ink shadow-float md:col-span-3 lg:col-span-3"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
            >
              <img src={item.src} alt={item.label} className="h-64 w-full rounded-3xl object-cover" />
              <figcaption className="mt-3 flex items-center justify-between text-xs font-black uppercase">
                {item.label}
                <span aria-hidden="true">🐾</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}
