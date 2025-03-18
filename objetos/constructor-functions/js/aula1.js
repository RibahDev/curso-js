const carro = {
  marca: "Marca",
  preco: 0,
};

//Constructor Functions

function Carro(marcaAtributo, precoAtributo) {
  this.marca = marcaAtributo;
  this.preco = precoAtributo;
}

const honda = new Carro("Honda", 80000);

const fiat = new Carro("Fiat", 19000);

console.log(fiat);
console.log(honda);

function CarroZero(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const civic = new CarroZero("Honda", 125000);

const hb20 = new CarroZero("Hyundai", 56000);

console.log(civic);
console.log(hb20);
