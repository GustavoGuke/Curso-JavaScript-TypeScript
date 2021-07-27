function fizzBuzz(numero){
    if (typeof numero !== 'number') return NaN
    if (numero % 3 == 0 && numero % 5 == 0) return 'FizzBuzz'
    if (numero % 3 == 0) return 'Fizz'
    if (numero % 5 == 0)  return 'Buzz'
    else return numero
}

console.log(fizzBuzz('a'))
/*
for (let i = 0; i <=30; i++){
    console.log(i, fizzBuzz(i))
}*/