const perimetro = new Function("lado", "return lado * 4");
console.log(perimetro);

//Propriedades
function somar(n1, n2) {
  return n1 + n2;
}

console.log(somar.length);

const carro = {
  marca: "Ford",
  ano: 2018,
};

function descricaoCarro() {
  console.log(this.marca + " " + this.ano);
}

descricaoCarro();
descricaoCarro.call();
descricaoCarro.call(carro);
