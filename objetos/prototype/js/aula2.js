const pais = "Brasil";
const cidade = new String("Rio");

const listAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li");

const listaArray = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
  marca: "Ford",
  preco: 20000,
  andar() {
    return true;
  },
};
