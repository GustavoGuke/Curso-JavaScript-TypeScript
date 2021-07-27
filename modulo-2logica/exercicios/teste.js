let n = []
function num(number){
    console.log(number)
    for (i of number){
        if (i > 0 ){
            n.push(i)
            
        }
    }
    console.log(n.length, 'numeros positivos')
}

number = [7, -5, 6, -3.4, 4.6, 12]

num(number)


let numero = gets()
par = 2
while(par <= numero){
    console.log(par)
    par = par +2

}
  
