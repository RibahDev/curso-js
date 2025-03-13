//Métodos em []
var videoGames = ["Switch", "PS4", "X-Box"];

console.log(videoGames);
console.log(videoGames[2]);
console.log(videoGames.push("3DS"));
console.log(videoGames);
console.log(videoGames.pop());
console.log(videoGames);
console.log(videoGames.length);

//For loop

for (i = 0; i <= 10; i++) {
  console.log(i);
}

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

const salgados = ["Empada", "Coxinha", "Pastél"];
for (i = 0; i < salgados.length; i++) {
  console.log(salgados[i]);

  if (salgados[i] === "Coxinha") {
    salgados.push("Kibe");
    console.log(salgados.length);
  } else if (salgados[i] === "Pastél") {
    break;
  } else {
    console.log(salgados.length);
  }
}

//forEach

//Qualquer nome pode ser atribuido aos parametros (salgado, index, array), geralmente se utiliza plural/singular para o primeiro, index no segundo e array no terceiro.

//index é um segundo parametro, pode me trazer a posição. array me traz o array inteiro a cada item

salgados.forEach(function (salgado, index, array) {
  console.log(salgado, index, array);
});
