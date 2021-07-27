let numero = [1,20,3,4,5,10,15,20,25]

// dobrar valores

let dobro = numero.map( valor => valor * 2)
console.log(dobro)

const pessoas = [
    {nome: 'Gustavo', idade: 26},
    {nome: 'Joao', idade: 11},
    {nome: 'Kerolin', idade: 26},
    {nome: 'Gabriel', idade: 9},
    {nome: 'milena', idade: 22},
]

let nome = pessoas.map( n => n.nome)
console.log(nome)

let semNome = pessoas.map( s => {
    return {idades:s.idade}
})
console.log(semNome)

let id = pessoas.map( (id, i) => {

    // spread para passar o obj e não mexer no original
    let newObj = {...id}
    newObj.id = i
    return newObj
})
console.log(id)