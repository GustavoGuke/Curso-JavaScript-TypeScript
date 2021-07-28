function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    // Jeito de fazer uma promise
    return new Promise((resolve, reject) => {
        if( typeof msg !== 'string') return reject("Erro não tratado contate o administrador")
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

// chamando a promise
esperaAi('frase 1', rand(1,4))
    .then( res => {
        console.log(res)
        return esperaAi(1, rand(1,4))
    })
    .then( res => {
        console.log(res)
    })
    .catch( e => {
        console.log('Erro:',e)
    })