// escrever uma função com 2 numeros e retornar o maior deles

function maiorNumero(num1, num2){
    if (num1 > num2){
        console.log(num1)
    }else if( num2 > num1){
        console.log(num2)
    }else{
        console.log(num1, num2, 'sao iguais')
    }
}

maiorNumero(10,10)

// codigo rafatorado 
const max2 = (x, y) => x > y ? x: y
console.log(max2(10,5))