// Quando utilizamos o while, não sabemos a qtd de vezes que o laço vai se repetir
let i = 0; //Variavel criada fora do while
const nome = 'Karen'

while (i < nome.length) {
    console.log(nome[i])
    i++
}

console.log('Segue a vida...')

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

// O do while primeiro executa o código e depois checa a condição que foi imposta.
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10);