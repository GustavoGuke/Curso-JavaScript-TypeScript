const pessoas = [
    {nome: 'Gustavo', idade: 21},
    {nome: 'Joao', idade: 11},
    {nome: 'Kerolin', idade: 26},
    {nome: 'Gabriel', idade: 9},
    {nome: 'milena', idade: 22},
]

// soma de idades
let soma = pessoas.reduce((acc, valor) => {
    return acc + valor.idade
}, 0)
console.log(soma)

// retorna maior idade
let maiorIdade = pessoas.reduce( (acc, valor) => {
    if(acc.idade >= valor.idade) return acc
    return valor
})
console.log(maiorIdade,'m')

// reduce com map e filter
let filterReduce = pessoas.filter( par => {
    return par.idade % 2 === 0
}).reduce((acc, valor) => {
    return acc + valor.idade
}, 0)

console.log(filterReduce)