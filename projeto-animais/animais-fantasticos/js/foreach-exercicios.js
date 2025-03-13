// Mostre no console cada parágrado do site
const paragrafos2 = document.querySelectorAll("p");
console.log(paragrafos2);

// Mostre o texto dos parágrafos no console
paragrafos2.forEach((paragrafo2) => {
  console.log(paragrafo2);
});
// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll("img");

imgs2.forEach((item, index) => {
  console.log(item, index);
});

let i2 = 0;
imgs2.forEach(() => {
  console.log(i2++);
});

imgs2.forEach(() => i2++);
console.log(i2);
