const imgs = document.querySelectorAll("img");

let i = 0;

imgs.forEach(function (img, index, array) {
  console.log(img, index, array);
});

//Transformando em array
const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (titulo) {
  console.log(titulo);
});

//Arrow Function

const imgsArrow = document.querySelectorAll("img");

imgsArrow.forEach((imgArrow) => {
  console.log(imgArrow);
});
