const data = new Date()

console.log(data.toString())
console.log(data.getDate())

// função para coloccar um zero a esquerda
function zeroEsqueda(num) {
    return num >=10 ? num : `0${num}`
}


// trazer a dta formatada no padrao brasileiro
function formataData(data) {
    const dia = zeroEsqueda(dataHoje.getDate())
    const mes = zeroEsqueda(dataHoje.getMonth() +1)
    const ano = zeroEsqueda(dataHoje.getFullYear())
    const hora = zeroEsqueda(dataHoje.getHours())
    const min = zeroEsqueda(dataHoje.getMinutes())
    const seg = zeroEsqueda(dataHoje.getSeconds())

    return `${dia}/${mes}/${ano}/ ${hora}:${min}:${seg}`
}

const dataHoje = new Date()
const dataBrasil = formataData(dataHoje)
console.log(dataBrasil)