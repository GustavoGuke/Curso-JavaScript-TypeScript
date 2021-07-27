// function constructor
function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

// congela uma chave para não mexer no valor
    Object.defineProperty(this, 'estoque',{
        enumerable: false, // mostra a chave
        value: estoque, // valor 
        writable: false, // pode alterar
        configurable: true // configuravel
    })
}
const p1 = new Produto ('camisa', 19.90, 3)
p1.estoque = 10
console.log(p1)
console.log(Object.keys(p1))
