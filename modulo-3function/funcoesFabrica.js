function criaPessoa(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        idade : 25,
        fn: function(){
            return `${nome} tem ${this.idade} anos `
        },
        peso, 
        altura,
        imc:function(){
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Gustavo', 'Lima')
const p2 = criaPessoa('eu', 'eu ', 75.5, 1.71)
console.log(p1.fn())
console.log(p2.imc())
console.log(p1.nome)