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

const promise = [
    'valor 1',
    esperaAi('promise 1', rand(1,3)),
    esperaAi(8, rand(1,1)),
    esperaAi('promise 3', rand(1,2)),
    'valor 2'
]

Promise.all(promise)
    .then( res => {
        console.log(res)
    })
    .catch( e => {
        console.log(e)
    })