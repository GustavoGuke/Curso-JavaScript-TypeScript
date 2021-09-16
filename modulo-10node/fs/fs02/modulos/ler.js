const fs = require('fs').promises
//const path = require('path')

// const caminho = path.resolve(__dirname,'..', 'texto.json')

// fs.readFile(caminho, {encoding: 'utf-8'})
//     .then(f => console.log(f))
//     .catch(e => console.log(e))

module.exports = (caminho) => fs.readFile(caminho, 'utf-8')
