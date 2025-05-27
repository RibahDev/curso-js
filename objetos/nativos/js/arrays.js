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
