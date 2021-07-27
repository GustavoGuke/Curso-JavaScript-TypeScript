// passando valores de uma lista para outra
let numeros = [0, 1, 2, 3, 4, 5]
[0, 1, 2, 3, 4, 5] = ['a', 'b', 'c', 'd', 'e', 'f']




// passando valores de uma strings para outra
let a = 'a' // b
let b = 'b' // c
let c = 'c' // a
const letras =  [b,c,a];
[a,b,c] = letras




// operador ...rest pega o resto 
const numDois = [100, 200, 300, 400, 500, 600]
const [primeiroNum, segundoNum, ...resto] = numDois





// pegando valores dentro de listas
const listas = [ [1, 3, 6 ], [9, 12, 15 ], [18, 21, 24 ] ]
// percorrendo a lista 
const [, , [, vinteUm, ]] = listas
const [l1, l2, l3] = listas




// saidas
console.log(numeros)
console.log(a,b,c)
console.log(resto, primeiroNum)
console.log(l1[2], l2[0], l3[1])
console.log(vinteUm)