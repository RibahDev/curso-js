const sections = document.querySelectorAll(".js-scroll");

if (sections.length) {
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      }
      console.log(sectionTop);
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }
  animaScroll();
  window.addEventListener("scroll", animaScroll);
}
