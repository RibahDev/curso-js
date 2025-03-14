const listaAnimais = document.querySelector(".animais-lista");

console.log(listaAnimais.clientHeight);

const height = listaAnimais.clientHeight;
console.log(height);

console.log(listaAnimais.scrollHeight);

const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroH2 = document.querySelector("h2");

console.log(primeiroH2.offsetLeft);

const rect = primeiroH2.getBoundingClientRect();

if (rect.top < 0) {
  console.log("Passou do elemento!");
}

console.log(rect);

console.log(window.innerWidth);

console.log(window.outerWidth);

console.log(window.innerHeight);

console.log(window.outerHeight);

console.log(window.pageYOffset);

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário Desktop");
}

console.log(small);
