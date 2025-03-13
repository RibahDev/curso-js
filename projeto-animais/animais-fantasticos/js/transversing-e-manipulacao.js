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

console.log(lista);
