window.addEventListener("scroll", () => {
  const divider = document.querySelector(".section-divider");
  const rect = divider.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    divider.classList.add("expand");
  }
});
