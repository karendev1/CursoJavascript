const frutas = ['Pera', 'Maça', 'Uva'];

for (let i; i < frutas.length; i++) {
    console.log('COM FOR PADRAO: ', frutas[i])
}

// For in lê os indices ou chaves do objeto
for (let i in frutas) {
    console.log('COM FOR IN: ', frutas[i])
}

const pessoa = {
    nome: 'Karen',
    sobrenome: 'Christina',
    idade: 18
}

for (let atributo in pessoa) {
    console.log(atributo, pessoa[atributo])
}

// No for de array, o "let i " imprimira o index de cada elemento iterado
//No for de objetos, imprimi a chave (que seria como o atributo)

const cidades = ['São paulo', 'Caieiras', 'Jundiai']

for (let cidade in cidades) {
    console.log(cidade, cidades[cidade])
}