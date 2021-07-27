function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

// congela uma chave para não mexer no valor
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
               throw new TypeError('Não aceita string apenas number')
            }
            estoquePrivado = valor
        },

        configurable: true // configuravel
    })
}
const p1 = new Produto ('camisa', 19.90, 3)
p1.estoque = 'teste'
