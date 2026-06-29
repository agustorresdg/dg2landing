import { Section } from "./Section";

export function Newsletter() {
  return (
    <Section id="contact" className="bg-lime px-4 py-16 md:px-8">
      <div className="mx-auto max-w-page rounded-bubble border-2 border-ink bg-lime p-6 md:p-10">
        <div className="magazine-grid items-center">
          <div className="col-span-12 md:col-span-3 lg:col-span-6">
            <h2 className="text-4xl font-black leading-none tracking-[-0.06em] md:text-6xl">
              ✦ Stay in touch
              <span className="block font-serif italic font-normal">with love and style</span>
            </h2>
          </div>
          <form className="col-span-12 flex flex-col gap-3 md:col-span-3 lg:col-span-6 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your email"
              className="min-h-14 flex-1 rounded-full border-2 border-ink bg-paper px-5 text-sm font-bold outline-none placeholder:text-ink/50 focus:ring-4 focus:ring-pink"
            />
            <button
              type="submit"
              className="min-h-14 rounded-full border-2 border-ink bg-paper px-8 text-xs font-black uppercase transition hover:-translate-y-1 hover:bg-pink focus:outline-none focus:ring-4 focus:ring-ink/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
