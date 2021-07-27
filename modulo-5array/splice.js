// mexe no array original
// array.splice(indice, deletar, adicionar)


let numero = [1,2,3,4,5,10,15,20,25]

// pegar um intervalo do array e retorna um outro array com esses dados (mexe no original)
let removidos = numero.splice(4, 5)


// metodo pop  array.splice(-1,1)
numero.splice(-1, 1)

// metodo push array.splice(array.length, 0, 1)
removidos.splice(removidos.length, 0, 30)


console.log(removidos)
console.log(numero)
