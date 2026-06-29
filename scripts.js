const header = document.querySelector(".nav-shell");
const revealItems = document.querySelectorAll(".reveal");
const colorButtons = document.querySelectorAll(".chip");
const selectedColor = document.querySelector(".selection b");
const configImage = document.querySelector(".config-image");
const formatTabs = document.querySelectorAll(".format-tab");
const formatCopy = document.querySelector(".format-copy");
const formatImage = document.querySelector(".format-image");
const formatCaption = document.querySelector(".format-caption");

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

colorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    colorButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    const color = button.dataset.color || "Negro";
    const image = button.dataset.image;
    if (selectedColor) selectedColor.textContent = color;
    if (configImage && image) {
      configImage.classList.add("is-changing");
      window.setTimeout(() => {
        configImage.src = image;
        configImage.alt = `Canon SELPHY CP1500 configurada en color ${color.toLowerCase()}`;
        configImage.classList.remove("is-changing");
      }, 160);
    }
  });
});

formatTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    formatTabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    if (formatCopy) formatCopy.textContent = tab.dataset.copy || "";
    if (formatCaption) formatCaption.textContent = tab.dataset.title || "";
    if (formatImage && tab.dataset.image) {
      formatImage.classList.add("is-changing");
      window.setTimeout(() => {
        formatImage.src = tab.dataset.image;
        formatImage.alt = `Vista previa de formato ${tab.dataset.title || ""}`.trim();
        formatImage.classList.remove("is-changing");
      }, 140);
    }
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
    { threshold: 0.14, rootMargin: "0px 0px -64px" },
  );

  revealItems.forEach((item) => observer.observe(item));
}
