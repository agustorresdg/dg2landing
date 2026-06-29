const header = document.querySelector(".topbar");
const revealItems = document.querySelectorAll(".reveal");
const swatches = document.querySelectorAll(".swatch");
const selectedColor = document.querySelector(".selected b");
const subscribeForm = document.querySelector(".subscribe");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 16);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

swatches.forEach((button) => {
  button.addEventListener("click", () => {
    swatches.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    if (selectedColor) selectedColor.textContent = button.dataset.color;
  });
});

document.querySelectorAll(".accordion details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".accordion details").forEach((other) => {
      if (other !== item) other.removeAttribute("open");
    });
  });
});

subscribeForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = subscribeForm.querySelector("button");
  if (!button) return;
  button.textContent = "Listo, gracias";
  window.setTimeout(() => {
    button.textContent = "Suscribirme →";
    subscribeForm.reset();
  }, 1800);
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}
