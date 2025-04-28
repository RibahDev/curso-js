const comida = "Pizza";
const liquido = new String("Agua");

console.log(liquido.length);

const frase = "A melhor comida";

console.log(frase.charAt(0));
console.log(frase[frase.length - 1]);

//concat
const fraseInicial = "A melhor linguagem é ";
const linguagem = "JavaScript";

const fraseFinal = fraseInicial.concat(linguagem, "!!");

console.log(fraseFinal);

//includes
const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta)); //true
console.log(fruta.includes(listaFrutas)); //false

//endsWith /startsWith
console.log(fruta.startsWith("Ba"));
console.log(fruta.startsWith("ba"));
console.log(fruta.endsWith("na"));
console.log(fruta.endsWith("Ba"));

//slice
const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));

console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

//indexOf
const instrumento = "Guitarra";

const comeco = instrumento.indexOf("ta");
const fim = instrumento.lastIndexOf("ta");

console.log(instrumento.indexOf("r"));
console.log(instrumento.lastIndexOf("r"));
console.log(instrumento.indexOf("ta"));

console.log(`entre ${comeco} e ${fim}`);

//padStart /padEnd
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, ".");
listaPrecos[0].padEnd(10, ".");

//replace
let listaItensRp = "Camisas Bonés Calças Bermudas Vestidos Saias";

console.log((listaItensRp = listaItensRp.replace(/[ ]+/g, ", ")));

let preco = "R$ 1200,43";

console.log((preco = preco.replace(",", ".")));

//split /join
const listaItensSp = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItensSp = listaItensSp.split(" ");

const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
htmlNovo = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(arrayItensSp);
console.log(htmlNovo);

//trimStart /trimEnd
const valor = "  R$ 23.00   ";

console.log(valor);
console.log(valor.trimStart());
console.log(valor.trimEnd());
console.log(valor.trim());
