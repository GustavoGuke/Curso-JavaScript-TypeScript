function imagem(largura, altura){
    if (largura > altura){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
imagem(320, 1000)



// refatorando
const paisagem = (largura, altura) => largura > altura? true: false
console.log(paisagem(1920,1080))