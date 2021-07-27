function mostrarHora(){
    let data = new Date()

    // hora atual 
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

// setInterval roda o progroma em um intervalo de tempo estimulado
// executa pra sempre 
const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000)


// setTimeOut roda o programa apartir de um tempo estimulado
// executa apenas uma vez
setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function (){
    console.log('setTimeOut')
}, 5000)