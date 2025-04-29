//isNaN
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(2));

//isInteger
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

//parseFloat
console.log(Number.parseFloat("99.50"));
console.log(Number.parseFloat("100 Reais"));
console.log(Number.parseFloat("R$ 100"));

//parseInt
console.log(parseInt("99.50", 10));
console.log(parseInt(5.43434355555, 10));
console.log(Number.parseInt("100 reais", 10));

//toFixed
const preco = 2.99;
console.log(preco.toFixed());

const carro = 1000.455;
console.log(carro.toFixed(2));

const preco2 = 1499.49;
console.log(preco2.toFixed());

const preco3 = 1499.51;
console.log(preco3.toFixed());

//toLocaleString
const precoTL = 59.49;
console.log(
  precoTL.toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  precoTL.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);

//Math
console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN10);
//métodos mais utilizados
console.log(Math.abs(-5.5));
console.log(Math.ceil(4.8334));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8334));
console.log(Math.floor(4.3));
console.log(Math.round(4.8334));
console.log(Math.round(4.3));

//max  /min /random
console.log(Math.max(5, 3, 10, 42, 2));
console.log(Math.min(5, 3, 10, 42, 2));

console.log(Math.random());
console.log(Math.floor(Math.random() * 100));
console.log(Math.floor(Math.random() * 500));
