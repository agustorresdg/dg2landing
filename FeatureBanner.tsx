import { Section } from "./Section";

export function FeatureBanner() {
  return (
    <Section className="bg-pink px-4 py-20 md:px-8">
      <div className="mx-auto max-w-page overflow-hidden rounded-bubble border-2 border-ink bg-pink shadow-float">
        <div className="magazine-grid items-center p-6 md:p-10">
          <div className="col-span-12 md:col-span-3 lg:col-span-6">
            <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.07em] md:text-7xl">
              Fluff, gloss, fashion, repeat.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-ink/70">
              A salon experience designed like a magazine spread, made gentle enough for nervous
              pups and glamorous enough for the main character.
            </p>
          </div>
          <div className="relative col-span-12 min-h-[320px] md:col-span-3 lg:col-span-6">
            <div className="absolute inset-0 rounded-bubble bg-[radial-gradient(circle_at_35%_30%,#FAFAFA_0_8%,transparent_9%),linear-gradient(135deg,#D8FF3D,#F6B5DB)]" />
            <img
              src="/assets/img/imagen-2.jpg"
              alt="Happy groomed dog in a playful pink feature banner"
              className="absolute bottom-0 left-1/2 h-[320px] w-72 -translate-x-1/2 rounded-t-full object-cover"
            />
            <span className="absolute right-6 top-6 rounded-full border-2 border-ink bg-paper px-5 py-3 text-sm font-black uppercase shadow-sticker">
              so cute
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
