// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector(".faq");
const primeitoDt = faq.querySelector("dt");
console.log(primeitoDt.innerText);

// Selecione o DD referente ao primeiro DT

const proximoDD = primeitoDt.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais

const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;

console.log(faq.innerHTML);
