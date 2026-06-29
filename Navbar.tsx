const links = ["About", "Services", "Gallery", "Contact"];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-page items-center justify-between rounded-full border-2 border-ink bg-paper px-4 py-3 shadow-float md:px-6"
      >
        <a href="#top" className="text-lg font-black tracking-tight" aria-label="Petcure home">
          Petcure
        </a>
        <div className="hidden items-center gap-8 text-xs font-black uppercase md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-pink">
              {link}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full border-2 border-ink bg-lime px-5 py-2 text-xs font-black uppercase transition hover:-translate-y-0.5 hover:bg-pink focus:outline-none focus:ring-4 focus:ring-pink"
        >
          Schedule
        </a>
      </nav>
    </header>
  );
}
