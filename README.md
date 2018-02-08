# egg-react-cli

> 本脚手架支持使用 react 或 vue 配合 egg 开发项目

## 前端编译
先编译依赖到client/static/vendor.dll.js
```bash
$ npm run dll   (或则 dll-react、dll-vue)
```

## 默认分离以下 npm 包至 dll.js 文件

如果要修改dll打包，请至config/webpack/webpack.vendor.dll.js* 中修改相应的文件

- 默认 dll: ['polyfill-exp','animejs', 'ramda']
- vue 额外 dll: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react', 'react-motion']
- react 额外 dll: ['vue', 'vuex', 'vue-router']


## Egg.js快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发
启动egg服务器，并且使用webpack打包client文件夹至public

```bash
$ npm run start
$ open http://localhost:7001/
```

### 部署

```bash
$ npm prod
$ npm stop
```

### 单元测试

- [egg-bin] 内置了 [mocha], [thunk-mocha], [power-assert], [istanbul] 等框架，让你可以专注于写单元测试，无需理会配套工具。
- 断言库非常推荐使用 [power-assert]。
- 具体参见 [egg 文档 - 单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm test` 来执行单元测试。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
