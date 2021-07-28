function rand(min=1, max=3){
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
            return
        }, tempo)
    })
}
//Async await

async function executaPromise(){
    try {
        const fase1 = await esperaAi('fase 1', rand())
        console.log(fase1)
        const fase2 = await esperaAi('fase 2', rand())
        console.log(fase2)
        const fase3 = await esperaAi(1, rand())
        console.log(fase3)

    } catch( e ){
        console.log(e)
    }
}
executaPromise()

// Promise normal 
// esperaAi('fase 1', rand())
//     .then( res => {
//         console.log(res)
//         return esperaAi('fase 2', rand())
//     })
//     .then( res => {
//         console.log(res)
//         return esperaAi('Fase 3',rand())
//     })
//     .then( res => {
//         console.log(res)
//     })
//     .catch( e => {
//         console.log(e)
//     })