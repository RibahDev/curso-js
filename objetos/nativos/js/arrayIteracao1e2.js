// const carros = ["Ford", "Fiat", "Honda"];

// carros.forEach((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// const li = document.querySelectorAll("li");

// li.forEach((i) => i.classList.add("ativa"));

// li.forEach(function (item) {
//   item.classList.add("Ativa");
// });

// const retorno = li.forEach(function (item) {
//   item.classList.add("Ativa");
// });
// //forEach sempre retorna undfined (focado em interação e não retorno)
// console.log(retorno);

// console.log(carros);
// carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array);
// });

// console.log(carros);

// //map sempre retorna uma array
// const retornoCarros = carros.map((item, index, array) => {
//   console.log(item, index, array);
//   return item.toUpperCase();
// });
// console.log(retornoCarros);
// console.log(carros);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoAulas = aulas.map((aula) => aula.min);
// console.log(tempoAulas);

// const arrayNomeAula = aulas.map((aula) => aula.nome);
// console.log(arrayNomeAula);

// const callBack = (aulas) => aulas.nome;

// const arrayNomeAulaCB = aulas.map(callBack);
// console.log(arrayNomeAulaCB);

// const aulas = [10, 25, 30];

// //reduce() retorna um valor único
// const reduceAulas = aulas.reduce((acumulador, item) => {
//   console.log(acumulador, item);
//   //toda função precisa de return ou será undefined
//   return acumulador + item;
// }, 0);
// console.log(reduceAulas);

// const numeros = [10, 25, 60, 5, 38, 43, 27, 8];

// const maiorValor = numeros.reduce((anterior, atual) => {
//   return anterior < atual ? atual : anterior;
// });
// console.log(numeros);
// console.log(maiorValor);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const listaAulas = aulas.reduce((acumulador, atual, index) => {
//   acumulador[index] = atual.nome;
//   return acumulador;
// });

// console.log(aulas);
// console.log(listaAulas);

const frutas = ["Banana", "Pêra", "Uva Roxa", "Morango", "Uva"];

const temUva = frutas.some((item) => {
  console.log(item);
  return item === "Uva";
});

console.log(temUva);

const frutasEv = ["BananaEV", "PêraEV", "Uva RoxaEV", "MorangoEV", "UvaEV"];

const temUvaEv = frutasEv.every((itemEv) => {
  console.log(itemEv);
  return itemEv === "UvaEV";
});

console.log(temUvaEv);
