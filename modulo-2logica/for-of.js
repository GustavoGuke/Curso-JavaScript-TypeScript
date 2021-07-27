const nome = 'gustavo'

// tradicional traz o indice 
for ( let i = 0; i < nome.length; i++){
    console.log(i, nome[i])
    
}
console.log('\n')



// for - in  traz o indice 
for (let i in nome){
    console.log(i, nome[i])
}
console.log('\n')




// for - of  não traz o indice apenas os valores
for ( let i of nome){
    console.log(i)
}