let frutas = ['amora', 'pera', 'manga']

let pessoa = {
    nome: 'Gustavo',
    sobreNome: 'Silva',
    idade: 25
}

// sintaxe normal
for ( let i = 0; i < frutas.length; i++){
    console.log( frutas[i])
}

console.log('\n')

// for - in

for (let i in frutas){
    console.log(frutas[i])
}

console.log('\n')


for (let i in pessoa){
    console.log(i, pessoa[i])
}


