const elements = [
    { tag: 'h1', texto: 'Frase 1' },
    { tag: 'h2', texto: 'Frase 2' },
    { tag: 'h3', texto: 'Frase 3' },
    { tag: 'h4', texto: 'Frase 4' }
]

//querySelector só seleciona um elemento, até mesmo se for classes.
//No caso de classes, ele seleciona a primeira encontrada e ignora todas as outros
const container = document.querySelector('.container');
const div = document.createElement('div'); //Criar div

for (let i = 0; i < elements.length; i++) {
    let { tag, texto } = elements[i]; //Desestruturação do array
    let tagCriada = document.createElement(tag); //Criando tag
    tagCriada.innerText = texto; //Colocando texto dentro da div;
    div.appendChild(tagCriada) //Adicionando(append) tag criada dentro da div
    console.log(tag)
}

container.appendChild(div) //Adicionei a div no container