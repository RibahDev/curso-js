// Crie uma função para verificar se um valor é Truthy
function verificaValor(valor) {
  return console.log(!!valor);
}
verificaValor(10);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somaPerimetro(lados) {
  return console.log(lados * 4);
}
somaPerimetro(2);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobreNome) {
  return console.log(`${nome} ${sobreNome}`);
}
nomeCompleto("João", "Ribeiro");

// Crie uma função que verifica se um número é par

function parImpar(numero) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par!`);
  } else {
    console.log(`${numero} é impar`);
  }
}
parImpar(7);

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDados(dados) {
  return console.log(typeof dados);
}

tipoDados(25);
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function () {
  console.log("Joao Vitor");
});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return console.log(
    `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`
  );
}
function jaVisitei(paisesVisitados) {
  return console.log(
    `Já visitei ${paisesVisitados} do total de ${totalPaises} países`
  );
}
jaVisitei(20);
precisoVisitar(20);
