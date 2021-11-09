// Função   construtora -> Objetos
// Função de frabrica -> objetos
//Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  const ID = 1; //Variavel privada, ou seja, não vai estar disponivel fora ou com o uso do this

  //Atributos ou métodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log("Sou um método");
  };
}

// A palavre new cria um objeto vazio, e entre os parenteses coloco o que eu quero atribuit
const p1 = new Pessoa("Karen", "Christina");
p1.metodo();

console.log(p1.nome);
