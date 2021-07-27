class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.camposEstaoPreenchidos()
        const senhasvalidas = this.senhasEstaoPreenchidas()

        if(camposValidos && senhasvalidas){
            alert('enviado')
            this.formulario.submit()
        }
    }

    senhasEstaoPreenchidas(){
        let valid = true
        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetirsenha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criarErro(senha, 'Senha precisa ser igual a repetir senha')

            this.criarErro(repetirSenha,'Repetir senha deve ser igual a senha')
        }

        const senhaLength = senha.value.length
        if(senhaLength < 6 || senhaLength > 12){
            valid = false
            this.criarErro(senha, 'deve ter entre 6 a 12 caracteres')
        }
        return valid
    }

    camposEstaoPreenchidos(){
        let valid = true

        for( let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText
            if(!campo.value){
                this.criarErro(campo,`'${label}' Não pode ficar em branco`)
                valid = false
            }

            if (campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) return valid = false 
            }

            if (campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) return valid = false 
            }
        }

        return valid
        
    }

    validaCPF(campo){
        const cpf = new ValidaCpf(campo.value)

        if(!cpf.valida()){
            this.criarErro(campo, 'cpf invalido')
            return false
        }
        return true

    }

    validaUsuario(campo) {
        let userLength = campo.value
        if( userLength.length < 3 || userLength.length > 12){
            this.criarErro(campo, 'deve ter entre 3 a 12 caracteres')
            return false
        }
        return true
    }

    criarErro(campo, msg){
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida  = new ValidaFormulario()