const h1Selecionado = document.querySelector("h1");

console.log(h1Selecionado.classList);

h1Selecionado.addEventListener("click", function () {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
});
