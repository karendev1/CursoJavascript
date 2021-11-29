class Pesssoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() { console.log(this.nome + "Está falando")}
  comer() {console.log(this.nome + "Está comendo")}
  beber() {console.log(this.nome + "Está bebendo")}
}

const p1 = new Pesssoa("Luiz", "Miranda");
console.log(p1);
