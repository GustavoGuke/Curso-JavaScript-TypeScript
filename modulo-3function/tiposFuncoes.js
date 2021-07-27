// declaração de função (function hoisting)

falarOi()
function falarOi(){
    console.log('\nDeclaração classica (hoisting)\n')
}


// function expression 
const variavelComofuncao = function(){
    console.log('Passando uma função a uma variavel\n')
}
variavelComofuncao()


// arrow function
const funcaoArrow = () => {
    console.log('Nova declaração de fazer uma função\n')
}
funcaoArrow()



// dentro de um objeto
const obj = {
    falar: function(){
        console.log('função dentro de um objeto')
    }
}
obj.falar()