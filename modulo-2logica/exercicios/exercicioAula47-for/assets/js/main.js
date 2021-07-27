const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'},
];


// selecionando a classe container
const container = document.querySelector('.container')

// criando uma tag div que ira receber outras tags
const div = document.createElement('div')


// iteração na lista de objetos
for ( let i = 0; i < elementos.length; i++){

    // {} desestruturação do objeto tag e texto
    let { tag, texto } = elementos[i]

    // criando as tag
    let tagCriada = document.createElement(tag)

    // passando o texto de cada tag para o html
    tagCriada.innerHTML = texto

    // fazendo a div pegar as tag eos textos
    div.appendChild(tagCriada)
}

container.appendChild(div)