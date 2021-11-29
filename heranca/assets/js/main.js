/*  
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
a propriedade prototype pode ser usada para adicionar métodos aos construtores existentes.

Para que serve o Prototype?
Podemos caracterizar, desta forma, o prototype como sendo um método ou um construtor de classes
 (em nosso caso Objetos JavaScript “JSON”) para executar códigos ou até mesmo criar novos objetos.
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = (quantia) => {
    this.preco += quantia;
}

Produto.prototype.aumento = (quantia) => {
    this.preco -= quantia;
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco, cor);
    this.cor  = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento((percentual) => {
    this.preco = this.preco + (this.preco * (percentual * 100));
})

const produto = new Produto("gen", 111)
const camiseta = new Camiseta("Regata", 7.5, "Preta");

console.log(produto)
console.log(camiseta)