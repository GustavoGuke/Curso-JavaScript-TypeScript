const fs = require('fs').promises
const path = require('path')

// fs.readdir(path.resolve(__dirname))
//     .then(f => console.log(f))
//     .catch(e => console.log(e))


// ler diretorioo
async function lerDiretorio(dir){
    dir = dir || path.resolve(__dirname)
    const files = await fs.readdir(dir)
    walk(files, dir)
}

async function walk(files, dir){
    for (let i of files){
       const fileFullPath = path.resolve(dir, i)
       const stats = await fs.stat(fileFullPath)
       console.log(i, stats.isDirectory())
    }
}
lerDiretorio('/udemy/JavaScript')