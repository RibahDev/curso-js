// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensRegra = document.querySelectorAll('[src^="img/imagem"]');

console.log(imagensRegra);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);
// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDesc = document.querySelector(".animais-descricao h2");
console.log(animaisDesc);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[paragrafos.length - 1]);
