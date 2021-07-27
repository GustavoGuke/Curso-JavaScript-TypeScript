class Pessoa {
    constructor(nome, sobreNome){
        this.nome = nome,
        this.sobreNome = sobreNome
    }

    mostrarPessoa(){
        console.log(`${this.nome} ${this.sobreNome}`)
    }
}

let p1 = new Pessoa('Gustavo', 'Silva')
p1.mostrarPessoa()