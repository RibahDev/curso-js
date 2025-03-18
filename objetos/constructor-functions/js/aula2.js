// //Exemplo real de uso
// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     const elementoSelecionado = this.element();
//     elementoSelecionado.classList.add("ativar");
//   },
// };
// //aciona a function no seletor 'li'
// Dom.ativar();

// Dom.seletor = "ul";

// //aciona a function no seletor 'ul'
// Dom.ativar();

//Exemplo 2
function Dom(seletor) {
  this.element = () => {
    return document.querySelector(seletor);
  };
  this.ativar = () => {
    this.element().classList.add("ativar");
  };
}

const li = new Dom("li");
const ul = new Dom("ul");
