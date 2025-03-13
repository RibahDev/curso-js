// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const meusDados = {
  nome: "João",
  sobrenome: "Ribeiro",
  idade: 24,

  nomeCompleto: function () {
    return `${this.snome} ${this.sobrenome}`;
  },
};
console.log(meusDados);

// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const labradorBob = {
  nome: "Bob",
  cor: "Preto",
  raca: "Labrador",
  idade: 10,

  latir(pessoa) {
    if (pessoa === "Homem") {
      return console.log("AU AU AU!");
    } else {
      return console.log("...");
    }
  },
};
