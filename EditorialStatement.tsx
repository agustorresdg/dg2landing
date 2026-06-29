import { PawPrints } from "./Decorations";
import { Section } from "./Section";

export function EditorialStatement() {
  return (
    <Section id="about" className="black-dot-grid bg-ink px-4 py-24 text-paper md:px-8">
      <div className="mx-auto max-w-page">
        <div className="magazine-grid items-end">
          <div className="col-span-12 md:col-span-4 lg:col-span-8">
            <h2 className="text-5xl font-light uppercase leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-9xl">
              Where style meets
              <span className="block font-serif italic normal-case text-pink">wagging tails</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-2 lg:col-span-4">
            <PawPrints className="mb-8 text-paper" />
            <p className="max-w-sm text-lg leading-8 text-paper/70">
              We turn grooming into a playful fashion ritual: precise, gentle, expressive and built
              for pets with personality.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
