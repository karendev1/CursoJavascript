const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  },
};

const pessoaPrototype = {...falar}

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Karen", "Christina");
const p2 = criaPessoa("Maria", "A");
console.log(p2);
