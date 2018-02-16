#!/usr/bin/env node

var path = require('path')
var fs = require('fs-extra')
var __root = path.resolve(__dirname, './')
var to = path.resolve(process.cwd(), process.argv[2])

// 需要拷贝的文件列表
let copyFiles = [
  'bin.js',
  'package.json',
  'app',
  // 'node_modules',
  'client-react',
  'client-native',
  'client-vue',
  'config',
  '.eslintrc',
  '.gitignore',
  'README.md'
]

async function movePackage() {
  console.log(`创建中...`)
  copyFiles.map(async (v, i) => {
    console.log(path.resolve(to, v))
    fs.copySync( __root + '/' + v, path.resolve(to, v))
  })
}
movePackage()
console.log(`创建完毕`)