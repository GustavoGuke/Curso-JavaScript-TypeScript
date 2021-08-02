import ValidaCpf from "./ValidaCpf";


export default class GeraCpf {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max-min) + min))
    }

    formatarCpf(cpfValido){

        return (
            cpfValido.slice(0,3) + '.' +
            cpfValido.slice(3,6) + '.' +
            cpfValido.slice(6,9) + '-' +
            cpfValido.slice(9,11)
        )
    }

    geraNovoCpf(){
        const cpfSemDigito = this.rand()
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1)
        const novoCPF = cpfSemDigito + digito1 + digito2
        return this.formatarCpf(novoCPF)
    }
}