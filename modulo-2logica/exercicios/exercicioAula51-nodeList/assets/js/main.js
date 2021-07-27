
// pegando a classe paragrafos 
const paragrafos = document.querySelector('.paragrafos')

// selecionando todas as tags p 
const ps = paragrafos.querySelectorAll('p')

// pegando os estilo da tag body
const stiloBoby =  getComputedStyle(document.body)

// pegando o backgroundColor do body
const color = stiloBoby.backgroundColor



// passando os estilos para as tags p
for (let p of ps ){
    p.style.backgroundColor = color
    p.style.color = 'white'
}