#!/usr/bin/env node

var path = require('path')
var fse = require('fs-extra')
var __root = path.resolve(__dirname, '../../')
var to = path.resolve(process.cwd(), process.argv[2])

let copyFiles = ['app', 'client', 'config', 'test', '.eslintrc', '.gitignore', 'app-package.json', 'README.md']

copyFiles.map(async (v, i) => {
  await fse.copy(
    __root + '/' + v,
    path.resolve(to, v))
  if (i === copyFiles.length - 1) {
    await fs.move(to + '/app-package.json', to + '/package.json')
    console.log('创建成功')
  }
})
