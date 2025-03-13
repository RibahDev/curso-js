//exemplos de manipulação
const h1 = document.querySelector("h1");

console.log(h1.innerHTML);

h1.outerHTML = "<p>Mudei</p>";

console.log(h1.outerHTML);

//Transversing, em outras palavras seria a navegação pelo DOM

const lista = document.querySelector(".animais-lista");

console.log(lista);

//retorna o elemento PAI. Pode navegar até o fim dos elementos
console.log(lista.parentElement.parentElement.parentElement);

//retorna o elemento seguinte que está no mesmo nível do elemento selecionado
console.log(lista.nextElementSibling);

//funciona da mesma forma do nextElementSibling, porém retorna o anterior
console.log(lista.previousElementSibling);

console.log(lista.children);
console.log(lista.children[0]);
console.log(lista.children.length);

console.log(lista.querySelector("li:last-child"));

//element vs node

console.log(lista.previousSibling);

const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");

const titulo = contato.querySelector(".titulo");

console.log(contato, titulo);

//Insere o elemento como ultimo filho do elemento selecionado
// animais.appendChild(titulo);

//Move o elemento para antes do elemento selecionado
contato.insertBefore(animais, titulo);

//Move o elemento para antes do elemento selecionado
const mapa = document.querySelector(".mapa");

// contato.insertBefore(animais, mapa);

//removendo um filho
// contato.removeChild(titulo);

contato.replaceChild(mapa, titulo);

//Criando elementos html com Js
const novoH1 = document.createElement("h1");
console.log(novoH1);
novoH1.innerText = "Novo Titulo";
console.log(novoH1);
novoH1.classList.add("titulo");

mapa.appendChild(novoH1);

//clonando um elemento
const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");

const cloneH1 = h1.cloneNode(true);
faq.appendChild(cloneH1);
