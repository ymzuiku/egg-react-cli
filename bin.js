#!/usr/bin/env node

var path = require('path')
var fse = require('fs-extra')
var __root = path.resolve(__dirname, './')
var to = path.resolve(process.cwd(), process.argv[2])

// 需要拷贝的文件列表
let copyFiles = [
  'bin.js',
  'package.json',
  'app',
  'node_modules',
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
    // if (v === 'client-native') {
    //   await fse.emptyDir(__root + '/client-native/node_modules')
    //   await fse.remove(__root + '/client-native/ios')
    //   await fse.remove(__root + '/client-native/android')
    //   await fse.copy(__root + '/config/react-native-backup/ios', __root + '/client-native/ios')
    //   await fse.copy(__root + '/config/react-native-backup/android', __root + '/client-native/android')
    //   await fse.copy(__root + '/' + v, path.resolve(to, v))
    // }
    if (v === 'app-package.json') {
      await fse.copy(
        __root + '/app-package.json',
        path.resolve(to, 'package.json'))
    }
    else {
      await fse.copy(
        __root + '/' + v,
        path.resolve(to, v))
    }
  })
}
movePackage()