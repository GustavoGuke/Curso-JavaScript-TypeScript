import gerarSenha from "./geradores";

const senhaGerada = document.querySelector('.senha')
const quantidade = document.querySelector('.quantidade')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMminusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const btnGerarSenha = document.querySelector('.gerarSenha')

export default () => {
    btnGerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
    function gera(){
       const senha = gerarSenha( 
            quantidade.value,
            chkMaiusculas.checked,
            chkMminusculas.checked,
            chkNumeros.checked,
            chkSimbolos.checked)
        return senha || 'Nada selecionado'
    }
}