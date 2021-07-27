function ValidarCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
            return cpfEnviado.replace(/\D+/g,'')
        }
    })
}
ValidarCpf.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false 
    if(this.cpfLimpo.length !== 11) return false
    return true
}

const cpf = new ValidarCpf('705.484.450-52')
console.log(cpf.valida())