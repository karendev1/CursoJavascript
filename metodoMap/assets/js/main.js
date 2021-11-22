// Map altera os valores e retorna um array do mesmo tamanho do Array original.


// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const dobro = numeros.map((numero) => numero * 2);
console.log(dobro);

// Para cada elemento:

// Retorne apenas uma string com o nome da pessoa

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Karen", idade: 19 },
  { nome: "Leticia", idade: 32 },
  { nome: "Rosana", idade: 47 },
];

const nomes = pessoas.map((item) => item.nome);
console.log(nomes);
//Remova apenas a chave "nome" do objeto

const removeNomes = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(removeNomes);

//Adicione uma chave id em cada objeto

const idPessoas = pessoas.map((obj, indice) => {
    obj.id = indice
    return obj
});
console.log(idPessoas)
