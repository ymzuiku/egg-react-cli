var path = require('path')
var fse = require('fs-extra')
var __root = path.resolve(__dirname, '../../')
console.log(__root)
console.log(path.resolve(__root, 'app'))
console.log(path.resolve(__root, 'test/'))
let copyFiles = ['app', 'client', 'config', 'test', '.eslintrc', '.gitignore', 'package.json', 'README.md']

fse.ensureDirSync(__root+'/test/')
// copyFiles.map((v) => {
//   fse.copySync(
//     path.resolve(__root, v),
//     path.resolve(__root, 'test/'+v))
// })

let copys = async ()=>{

}

// var arguments = process.argv.splice(2);
console.log(process.argv[1])
let b = path.resolve(process.argv[1], '../../../')
console.log(b)

copyFiles.map(async (v) => {
  await fse.copy(
    __root+'/'+v,
    path.resolve(__root, 'test/'+v))
})

// fse.copy(
//   __root,
//   path.resolve(__root, '../test001/'),)
//   .then(() => { 

//   })
//   .catch(err => console.error(err))

