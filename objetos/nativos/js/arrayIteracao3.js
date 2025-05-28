const frutas = ["Banana", "Pêra", "Uva", "Maçã"];

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
});

console.log(buscaUva);

const numeros = [6, 45, 22, 88, 101, 29];
const buscaMaior45 = numeros.find((x) => x > 45);
console.log(buscaMaior45);

const frutasFilter = ["Banana", "Pêra", "", "Uva", "Maçã"];

const arrayLimpa = frutasFilter.filter((item) => {
  return item;
});
console.log(arrayLimpa);

const numerosFilter = [6, 45, 22, 88, 101, 29];
const buscaMaiorFilter = numerosFilter.filter((x) => x > 45);
console.log(buscaMaiorFilter);
