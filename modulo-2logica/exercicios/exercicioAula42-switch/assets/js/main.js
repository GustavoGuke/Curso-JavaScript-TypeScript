/*

const res = document.querySelector('.res')
let data = new Date()
let dia = data.getDay()
let diaNum = data.getDate()
let mes = data.getMonth()
let ano = data.getFullYear()
let hora = data.getHours()
let min = data.getMinutes()
let seg = data.getSeconds()

function zeroEsquerda(num) {
    return num >=10 ? num : `0${num}`
}

function horas(){
    return `${zeroEsquerda(hora)}:${zeroEsquerda(min)}:${zeroEsquerda(seg)}`
}



function pegarMes(mes){
    switch(mes){
        case 5:
            return ' de Junho'
    }
}


function formataData(data){
    switch(data){
        case 0:
            console.log('domingo')
            res.innerHTML = `Domingo, ${diaNum}  ${mesAtual} de ${ano} ${horaAtual}`
            break
    }
}


horaAtual = horas()
mesAtual = pegarMes(mes)
formataData(dia)

*/


const res = document.querySelector('.res')
let data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}
res.innerHTML = data.toLocaleDateString('pt-br',opcoes)