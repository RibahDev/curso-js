const instrumentos = ["Guitarra", "Violão", "Baixo"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 20000 }],
  function andar(nome) {
    console.log(nome);
  },
];

const obj = {
  0: "arr1",
  1: "arr2",
  2: "arr3",
  length: 3,
};

const arrObj = Array.from(obj);
const isArray = Array.isArray(arrObj);

console.log(obj);
console.log(arrObj);
console.log(isArray);

console.log(Array.of(10));
console.log(Array.of(10, 12, 15));

console.log(Array.of("10"));
console.log(Array.of("10", "12", "15"));

console.log(Array(10));
console.log(Array("10", "20", "30"));

console.log(instrumentos);

console.log(instrumentos.sort());

const idades = [25, 38, 56, 57, 12, 9];
console.log(idades);
console.log(idades.sort());

const jogos = ["minecraft", "lol", "cs"];
console.log(jogos);

const add = jogos.push("fortnite");
console.log(add);

console.log(jogos);

const attJogos = jogos.unshift("dota", "valorante");
console.log(attJogos);

const carros = ["Ford", "Fiat", "VW", "Honda"];

console.log(carros);
console.log(carros.splice(1, 0, "Kia", "Mustang"));
console.log(carros);
console.log(carros.splice(3, 2, "Ferrari"));
console.log(carros);

console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 2));
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].fill("Banana", 0, 2));

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];

console.log([].concat(transporte1, transporte2), "Lancha");

linguagens = ["html", "css", "js", "php", "react", "angular", "js"];

console.log(linguagens.includes("css"));
console.log(linguagens.includes("ruby"));
console.log(linguagens.indexOf("react"));
console.log(linguagens.indexOf("js"));
console.log(linguagens.lastIndexOf("js"));

console.log(linguagens.join());
console.log(linguagens.join(" "));
console.log(linguagens.join("-_-"));
