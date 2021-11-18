// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filtro = numeros.filter((n) => n > 10);

console.log(filtro);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Karen", idade: 19 },
  { nome: "Leticia", idade: 32 },
  { nome: "Rosana", idade: 47 },
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
const filtroNome = pessoas.filter((p) => p.nome.length >= 5);
console.log(filtroNome);

// Retorne as pessoas com mais de 50 anos
const filtroIdade = pessoas.filter((i) => i.idade > 50);
console.log(filtroIdade);

// Retorne as pessoas cujo nome termina com 'a'
const filtroLetraA = pessoas.filter((a) => a.nome.slice(-1) === "a");
console.log(filtroLetraA);
