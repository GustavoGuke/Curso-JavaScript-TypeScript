// filter

let numero = [1,20,3,4,5,10,15,20,25]
let nums = []


// com for
for( let i = 0; i < numero.length; i++){
    if(numero[i] >= 10){
        nums.push(numero[i])
    }
}
console.log(nums)

// filter
let maiorQueDez = numero.filter( n => {
    return n >= 10
}).sort((a,b) => a - b)

console.log(maiorQueDez)


/*

// FILTER USADO EM OBJETOS
const pessoas = [
    {nome: 'Gustavo', idade: 26},
    {nome: 'Joao', idade: 11},
    {nome: 'Kerolin', idade: 26},
    {nome: 'Gabriel', idade: 9},
    {nome: 'milena', idade: 22},
]

let cincoLetras = pessoas.filter( letras => {
    return letras.nome.length < 5
})
console.log(cincoLetras)

let maiorQueVinte = pessoas.filter( n => n.idade > 20)
console.log(maiorQueVinte)


let terminaComA = pessoas.filter( p => {
    return p.nome.toLowerCase().endsWith('a')
})
console.log(terminaComA)


*/













