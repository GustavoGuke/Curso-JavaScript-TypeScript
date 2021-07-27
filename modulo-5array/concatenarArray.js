let nome = ['gustavo']
let sobreNome = ['Lima']

// concat junta arrays
// let nomeCompleto = nome.concat(sobreNome)


//  spread espalha o que tem em uma array no outro
let  nomeCompleto = [...nome, ...sobreNome]
console.log(nomeCompleto)