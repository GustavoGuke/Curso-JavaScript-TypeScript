function criaCalc(){

    return{
        display: document.querySelector('.display'),

        inicia(){

            this.clickBotoes()
            this.pressionarEnter()

        },

        pressionarEnter(){
            this.display.addEventListener('keyup', e =>{
                if(e.keyCode === 13){
                    this.realizarConta()
                }
            })
        },

        realizarConta(){
            let conta = this.display.value

            try{
                conta = eval(conta)

                if(!conta){
                    this.display.value.innerText = 'CONTA INVALIDA'
                    return
                }

                this.display.value = conta

            }catch(e){
                this.display.value.innerText = 'CONTA INVALIDA'
                return

            }
        },

        deletar(){
            this.display.value = this.display.value.slice(0, -1)

        },

        clearDisplay(){
            this.display.value = ''
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },

        clickBotoes(){
            document.addEventListener('click', function(event){
                const elemento = event.target

                if (elemento.classList.contains('btn-num')){
                    this.btnParaDisplay(elemento.innerText)
                }

                if (elemento.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if (elemento.classList.contains('btn-del')){
                    this.deletar()
                }

                if (elemento.classList.contains('btn-eq')){
                    this.realizarConta()
                }
            }.bind(this))
        }

        
    }
}

const calculadora = criaCalc()
calculadora.inicia()