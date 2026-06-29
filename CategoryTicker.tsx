const items = ["Petcure", "PetCare", "Animals", "Groom", "PetCo", "Kawaii coats", "Paw polish"];

export function CategoryTicker() {
  return (
    <section className="overflow-hidden bg-lime py-4">
      <div className="flex min-w-max animate-none gap-10 px-6 text-sm font-black uppercase md:text-base">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10">
            {item}
            <span aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
