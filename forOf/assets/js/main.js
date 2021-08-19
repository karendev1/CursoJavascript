const nome = "Karen Christina";

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}

for (let i in nome) {
    console.log(nome[i])
}
// Quando usamos o 'of' não vem o indice, e sim o valor
for (let valor of nome) {
    console.log(valor)
}

const nomes = ['Karen', 'Érico', 'Adriano', 'José']

nomes.forEach((elemento, indice, array) => {
    console.log(elemento, indice, array)
})

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}

for (let i in pessoa) {
    console.log(i)
}

// For clássico - Geralmente com iteraveis (arrays ou strings)
//For in - Retorna o indice ou chave (string, array ou objetos)
//For of- retorna o valor em si (iteraveis, arrays ou strings)