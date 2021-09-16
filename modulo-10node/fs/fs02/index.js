const path = require('path')
const caminhoArquivo = path.resolve(__dirname,  'texto.json')
const escrever = require('./modulos/escrever')
const ler = require('./modulos/ler')

// const pessoas = [
//     {nome: 'pessoa1'},
//     {nome: 'pessoa2'},
//     {nome: 'pessoa3'},
//     {nome: 'pessoa4'},
// ]

// let jsons = JSON.stringify(pessoas, '', 2)

// escrever(caminhoArquivo, jsons)

async function lerDados(caminho){
    const dados = await ler(caminho)
    return dados
}
lerDados(caminhoArquivo)
    .then( data => console.log(data))
    .catch(e => console.log(e))