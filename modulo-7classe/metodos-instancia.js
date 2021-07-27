class ControleRemoto{
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }

    // método de instancia
    aumentarVolume(){
        if(this.volume === 20){
            return
        }
        this.volume++
    }
    abaixarVolume(){
        if(this.volume < 0 )return
        this.volume--
    }

    // método estatico
    // metodo da classe global 
    static info(){
        console.log('Volume máximo 20 - Volume minino 0')
    }
}

let lg = new ControleRemoto('Lg')
ControleRemoto.info()
lg.aumentarVolume()
lg.aumentarVolume()
lg.aumentarVolume()
lg.abaixarVolume()
console.log(lg)

let samsung = new ControleRemoto('Samsung')
samsung.aumentarVolume()
samsung.aumentarVolume()
samsung.aumentarVolume()
samsung.aumentarVolume()
samsung.aumentarVolume()
samsung.aumentarVolume()
samsung.abaixarVolume()
console.log(samsung)