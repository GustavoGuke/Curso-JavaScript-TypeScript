// revisão de Objetos
const pessoa1 = {
    nome: 'Gustavo',
    sobreNome: 'Lima',
    nasc: '10/09/1994',
    dado: function dados(){
        console.log(`Perfil 1: ${this.nome} ${this.sobreNome}, nasceu em ${this.nasc}`)
    }
}
// pessoa1.dado()

// //ver chaves
// for(let i in pessoa1){
//     console.log(i)
// }
// // ver os dados
// for(let i in pessoa1){
//     console.log(pessoa1[i])
// }

/////////////////////////////////////////////////////
// factory functions
function criarTime(nome, fundacao){
    return {
        nome,
        fundacao,
        mostrarTime(){
            return `${this.nome} fundado em ${this.fundacao}`
        }
    }
}
let p1 = criarTime('Palmeiras', 1914)
console.log(p1.mostrarTime())