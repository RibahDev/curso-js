function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return this.nome + "Pessoa andou";
};

const joao = new Pessoa("João", 25);

console.log(Pessoa.prototype);
