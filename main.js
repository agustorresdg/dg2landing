const header = document.querySelector(".site-header");

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("site-header--solid", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader);

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.classList.add("is-submitted");
  });
});
