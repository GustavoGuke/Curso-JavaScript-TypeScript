const form = document.querySelector('.form')

// capiturando o evento submit do form
form.addEventListener('submit', function(event){
    event.preventDefault()

    // capiturar peso e altura
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    const imc = peso / altura ** 2
    setResultado(imc)
    
})

function criarTagP(){
    const p = document.createElement('p')
    return p
}


// função que ira mostrar meu resultado na tela
function setResultado(imc){
    const res = document.querySelector('.res')
    
    res.innerHTML = imc
    

}