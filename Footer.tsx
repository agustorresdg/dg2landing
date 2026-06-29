export function Footer() {
  return (
    <footer className="bg-ink px-4 py-8 text-paper md:px-8">
      <div className="mx-auto flex max-w-page flex-col gap-4 text-xs font-bold uppercase text-paper/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Petcure grooming club</p>
        <div className="flex gap-5">
          <a href="#top" className="hover:text-paper">
            Top
          </a>
          <a href="#services" className="hover:text-paper">
            Services
          </a>
          <a href="#contact" className="hover:text-paper">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
