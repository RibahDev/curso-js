// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");

itensMenu.forEach((itemMenu) => {
  itemMenu.classList.add("ativo");
  console.log(itemMenu.classList);
});

console.log(itensMenu.classList);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((itemMenu) => {
  itemMenu.classList.remove("ativo");
  console.log(itemMenu.classList);
});

itensMenu[0].classList.add("ativo");
console.log(itensMenu.classList);

// Verifique se as imagens possuem o atributo alt
const imagensAt = document.querySelector("img");
function verif() {
  if (imagensAt.hasAttribute("alt")) {
    console.log("É TRUE Pô");
  } else {
    console.log("HOJE NÃO!");
  }
}
verif();
// Modifique o href do link externo no menu
const linkMenu = document.querySelector("a[href^='http']");
linkMenu.setAttribute("href", "https://www.google.com/");
