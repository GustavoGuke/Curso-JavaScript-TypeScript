class ProdutoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} ja ligado `);
            return;
        }else{
            this.ligado = true
            console.log(`${this.nome} foi ligado`)
        }
    }

    desligar(){
        if(this.ligado === false){
            console.log(`${this.nome} ja desligado`)
            return;
        }
        else{
            this.ligado = false
            console.log(`${this.nome} foi desligado`)
        }
    }
}

class SmartPhone extends ProdutoEletronico {
    constructor (nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo
    }
}

const d1 = new SmartPhone('Samsung', 'preto', 'j7')
d1.ligar()
console.log(d1)
d1.ligar()