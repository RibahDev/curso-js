const eventoImagem = document.querySelector("img");

//Boas praticas: Utilize uma função pronta para seu callback, evite utilizar funções anônimas

function callback(e) {
  //(e) para passar um evento
  console.log(e);
}

// eventoImagem.addEventListener("click", callback);

//propriedades do Event
const imagensLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  //Me entrega a 'Lista' sem um alvo expecifico
  console.log(event.currentTarget);
  //Me entrega exatamente onde foi o click, com precisão
  console.log(event.target);
}

imagensLista.addEventListener("click", callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(evento) {
  evento.preventDefault();
  console.log(this);
  console.log("Clicou");
}

linkExterno.addEventListener("click", handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);

window.addEventListener("scroll", callback);
window.addEventListener("keydown", callback);

function handleKeyboard(e) {
  if (e.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
  console.log(e.key);
}
window.handleKeyboard("keydown", handleKeyboard);

const imgs = document.querySelector("img");

function handleImg(event) {
  console.log(event.target.getAttribute("src"));
}

imgs.forEach((img) => {
  img.addEventListener("click", handleImg);
});
