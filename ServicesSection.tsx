import { motion } from "framer-motion";
import { Section } from "./Section";

const services = [
  {
    icon: "🛁",
    title: "Bathing & Body Brushing",
    copy: "Oat-milk wash, gentle detangling and a glossy blowout for soft-touch coats.",
  },
  {
    icon: "✂️",
    title: "Haircuts & Trims",
    copy: "Breed-aware shaping with editorial silhouettes, rounded paws and clean faces.",
  },
  {
    icon: "💅",
    title: "Clean Expression",
    copy: "Ear care, paw polish, perfume mist and final styling for camera-ready pets.",
  },
];

export function ServicesSection() {
  return (
    <Section id="services" className="bg-pink px-4 py-20 md:px-8">
      <div className="mx-auto max-w-page">
        <div className="mb-10 text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em]">Our services</p>
          <h2 className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-7xl">
            Beauty rituals for every tail
          </h2>
        </div>
        <div className="magazine-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="col-span-12 rounded-brutal border-2 border-ink bg-paper p-7 shadow-sticker md:col-span-2 lg:col-span-4"
              whileHover={{ y: -10, rotate: index === 1 ? 1 : -1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="grid size-16 place-items-center rounded-3xl border-2 border-ink bg-lime text-3xl">
                  {service.icon}
                </span>
                <span className="text-4xl">✦</span>
              </div>
              <h3 className="text-2xl font-black leading-none tracking-[-0.04em]">{service.title}</h3>
              <p className="mt-5 text-sm leading-6 text-ink/70">{service.copy}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border-2 border-ink bg-lime px-8 py-4 text-xs font-black uppercase shadow-sticker transition hover:-translate-y-1 hover:bg-paper focus:outline-none focus:ring-4 focus:ring-ink/20"
          >
            Schedule
          </a>
        </div>
      </div>
    </Section>
  );
}
