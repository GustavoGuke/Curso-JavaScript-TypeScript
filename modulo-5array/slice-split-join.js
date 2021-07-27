// slice fatia o array
// não mexe no array original
//
let numero = [1,2,3,4,5,10,15,20,25]
let novo = numero.slice(4, 7)
let maisNovo = novo.slice(0, -1) 
console.log(maisNovo)


// split transforma uma string em array
let nome = 'gustavo,silva,lima'
let nomeSplit = nome.split(',')
console.log(nomeSplit)


// join transforma um array em string
let nomeJoin = nomeSplit.join(' ')
console.log(nomeJoin)