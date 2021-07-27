const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i of numeros){

    if (i === 4){
        console.log('pula o numero 4')
        continue
    }
    console.log(i)
    
   
    if (i === 7){
        console.log('para no numero 7')
        break
    }
    
}