const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navbar.classList.remove(
      "transparent"
    ); /* add transparent class when scrolling */
  } else {
    navbar.classList.add(
      "transparent"
    ); /* remove transparent class when at top of page */
  }
});
