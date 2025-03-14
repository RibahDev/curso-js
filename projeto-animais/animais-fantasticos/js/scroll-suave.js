const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
if (linksInternos.length) {
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //   //forma alternativa
    //   window.scrollTo({
    //     top: topo,
    //     behavior: "smooth",
    //   });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
