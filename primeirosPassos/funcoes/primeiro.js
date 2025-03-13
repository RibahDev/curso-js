function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(4));

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavotira(cor) {
  if (cor === "Verde") {
    return console.log("Gosta de natureza");
  } else if (cor === "Azul") {
    return console.log("Gosta de Mar");
  } else if (cor === "Amarelo") {
    return console.log("Gosta de praia");
  } else {
    return console.log("Não gosta de nada!");
  }
}
corFavotira("Verde");

addEventListener("click", function () {
  console.log("Clicou!");
});

function terceiraIddae(idade) {
  if (typeof idade !== "number") {
    return console.log("Informe sua idade!");
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIddae(60));

//Escopo Léxico
var profissao = "Desenvolvedor";

function dados() {
  var nome = "João";
  var idade = 24;

  function outrosDados() {
    var endereco = "Rua dos gatos";
    var idade = 25;

    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());
