const data = new Date()

let diaAtual = data.getDay()
let dia

switch (diaAtual){

    case 5:
        dia = 'sexta'
        break

    case 6:
        dia = 'sabado'
        break

    default:
        dia = ''
        break

}

console.log(diaAtual, dia)