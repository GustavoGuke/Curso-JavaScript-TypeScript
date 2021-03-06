// 705.484.450-52 070.987.720-03
class ValidaCpf {
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g,'')
        })
    }

    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo
    }

    gerarNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1)
        
        this.novoCpf = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){
        let total = 0 
        let reverso = cpfSemDigitos.length + 1
        
        for (let n of cpfSemDigitos) {
            total += reverso * Number(n)
            reverso--
        }
        
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
        
    }

    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.isSequencia()) return false
        this.gerarNovoCpf()
        return this.cpfLimpo === this.novoCpf
    }
}

let validaCpf = new ValidaCpf('070.987.720-03')
//validaCpf = new ValidaCpf('99.999.999-99')

if(validaCpf.valida()){
    console.log('CPF valido')
} else {
    console.log('CPF invalido')
}
