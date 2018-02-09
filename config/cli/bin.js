#!/usr/bin/env node

var path = require('path')
var fse = require('fs-extra')
var __root = path.resolve(__dirname, '../../')
var to = path.resolve(process.cwd(), process.argv[2])

let copyFiles = ['/app-package.json','app', 'client', 'config',  '.eslintrc', '.gitignore', 'README.md']

// 'app-package.json'
console.log(`创建完成,请执行:`)
console.log(`cd ${process.argv[2]} && npm install && npm run dll && npm run start`)
console.log(`或使用yarn:`)
console.log(`cd ${process.argv[2]} && yarn install && yarn run dll && yarn run start`)
console.log(`详情请阅读: https://github.com/ymzuiku/egg-react-cli`)

async function movePackage() {
  copyFiles.map(async (v, i) => {
    if(v === '/app-package.json'){
      await fse.copy(
        __root + '/app-package.json',
        path.resolve(to, 'package.json'))
    } else {
      await fse.copy(
        __root + '/' + v,
        path.resolve(to, v))
    }
  })
}
movePackage()