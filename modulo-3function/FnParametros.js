// arguments é uma variavel criada pelo Js para suportar 
// argumentos passado a uma função que nao recebe parametro
function fn(){
    let total = 0
    console.log(arguments)
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}
fn(5,5)


// argumentos com valores pré-definidos
function funcao(a, b = 2, c = 4){
    console.log(a + b + c)
}
funcao(2, undefined, 6)


// restOperator
function rest(...args){
    console.log(args)
}
rest(1, 2, 4, 5, 'Gustavo')