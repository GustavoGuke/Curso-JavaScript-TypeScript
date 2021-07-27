// copia de um objeto sem trazer a referencia de memoria


const prod = {nome:'caneca',preco:10.90}
const prod2 = {...prod} //spread operator
prod2.nome = 'cafeteira'
prod2.preco = 59.60

console.log(prod)
console.log(prod2)

// iterar sobre o objeto
for(let [chave, valor] of Object.entries(prod2)){
    console.log(chave, valor)
}