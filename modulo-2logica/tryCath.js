function soma(x, y){
    if (typeof x != 'number' || typeof y != 'number'){

        // com throw eu posso fazer meu proprio erro para teste
        // ou tratar um erro de uma forma diferente
        throw new Error ('apenas numero')

    }

    return x + y
}

// tente
try {
    console.log(soma(1,'2'))

} catch (error){
  // pega o meu erro
    console.log(error)
}finally {
    console.log('sempre ira mostrar algo ')
}
