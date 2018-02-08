
var path = require('path')
var fse = require('fs-extra')
var __root = path.resolve(process.argv[1], '../../../')
var to = path.resolve(process.cwd(), process.argv[2])

let copyFiles = ['app', 'client', 'config', 'test', '.eslintrc', '.gitignore', 'package.json', 'README.md']

copyFiles.map(async (v) => {
  await fse.copy(
    __root+'/'+v,
    path.resolve(to, v))
})