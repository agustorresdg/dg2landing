import { motion } from "framer-motion";
import { FloatingBadge, Star } from "./Decorations";

export function HeroWindow() {
  return (
    <section id="top" className="bg-paper px-4 pb-12 pt-28 md:px-8 md:pb-16">
      <div className="mx-auto max-w-page rounded-bubble border-2 border-ink bg-paper shadow-float">
        <div className="flex items-center justify-between border-b-2 border-ink px-5 py-3 text-xs font-black uppercase">
          <span>Petcure.exe</span>
          <span className="hidden md:inline">Premium coat culture</span>
          <span>About</span>
        </div>
        <div className="relative overflow-hidden rounded-bubble px-5 py-10 md:px-12 md:py-16">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_center,_#F6B5DB_0%,_rgba(246,181,219,0.75)_24%,_rgba(216,255,61,0.65)_47%,_transparent_72%)]" />
          <div className="magazine-grid relative z-10 items-center">
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <p className="mb-4 font-serif text-2xl italic md:text-4xl">your</p>
              <motion.h1
                className="max-w-4xl text-[clamp(4.5rem,13vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Better Grooming
              </motion.h1>
              <p className="mt-6 max-w-md text-sm leading-6 text-ink/70 md:text-base">
                Editorial styling, gentle grooming and kawaii care rituals for pets who deserve a
                runway-level glow up.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full border-2 border-ink bg-paper px-6 py-3 text-xs font-black uppercase transition hover:-translate-y-1 hover:bg-lime focus:outline-none focus:ring-4 focus:ring-pink"
                >
                  Schedule
                </a>
                <span className="grid size-12 place-items-center rounded-full border-2 border-ink bg-lime text-lg shadow-sticker">
                  🐶
                </span>
              </div>
            </div>
            <div className="relative col-span-12 min-h-[360px] md:col-span-6 lg:col-span-5">
              <motion.div
                className="absolute left-6 top-8 w-52 rounded-brutal border-2 border-ink bg-lime p-4 shadow-sticker md:left-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/assets/img/imagen-1.jpg"
                  alt="Freshly groomed pet in a lime editorial card"
                  className="h-36 w-full rounded-3xl object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 w-64 rounded-brutal border-2 border-ink bg-pink p-4 shadow-float md:w-80"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/assets/img/imagen-2.jpg"
                  alt="Playful pet grooming editorial portrait"
                  className="h-56 w-full rounded-3xl object-cover"
                />
              </motion.div>
            </div>
          </div>
          <FloatingBadge className="right-8 top-10 hidden md:block" delay={0.3}>
            ✂ soft paws
          </FloatingBadge>
          <FloatingBadge className="bottom-16 left-1/2 hidden bg-lime md:block" delay={0.7}>
            fresh fur
          </FloatingBadge>
          <Star className="left-8 top-36" />
          <Star className="bottom-12 right-10 text-pink" />
        </div>
      </div>
    </section>
  );
}
