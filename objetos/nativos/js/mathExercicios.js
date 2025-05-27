// Retorne um número aleatório
// entre 1050 e 2000
function getRandomInt(min = 1050, max = 2000) {
  const minimo = Math.ceil(min);
  const maximo = Math.floor(max);
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}
console.log(getRandomInt());

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumero = numeros.split(", ");
console.log(arrayNumero);

//... spreads, passa cada item do array separadamente
const numeroMaximo = Math.max(...arrayNumero);
console.log(numeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}
let soma = 0;
listaPrecos.forEach((item) => {
  soma += limparPreco(item);
});
console.log(
  soma.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
limparPreco(listaPrecos[0]);
