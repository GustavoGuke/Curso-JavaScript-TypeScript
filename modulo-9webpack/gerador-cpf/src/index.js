import GeraCpf from './modules/GeraCpf'

import './assets/css/style.css'

(function(){
    const gerar = new GeraCpf()
    
    const cpfGerado = document.querySelector('.cpf-gerado')
    
    cpfGerado.insertAdjacentText('afterbegin',gerar.geraNovoCpf())
    
    
})()