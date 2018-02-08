# egg-react-cli

> 本脚手架支持使用 react 或 vue 配合 egg 开发项目

## 开始
> 下载项目、修改项目名、安装依赖、编译固定npm包至dll、启动egg并且启动webpack watch打包
```bash
git clone git@github.com:ymzuiku/egg-react-cli.git
mv egg-react-cli new-project
cd new-project
npm install
npm run dll
npm run dev 
npm run start  (新开一个终端窗口，编译前端代码至public)
```

### 前端编译
首次开发需要先编译依赖到 client/static/vendor.dll.js
```bash
$ npm run dll   (或则 dll-react、dll-vue)
```

### 默认分离以下 npm 包至 dll.js 文件

如果要修改dll打包，请至config/webpack/webpack.vendor.dll.js* 中修改相应的文件

- 默认 dll: ['polyfill-exp','animejs', 'ramda']
- vue 额外 dll: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react', 'react-motion']
- react 额外 dll: ['vue', 'vuex', 'vue-router']


## Egg.js快速入门

<!-- 在此次添加使用文档 -->

如需进一步了解，参见 [egg 文档][egg]。

### 本地开发
启动egg服务器

```bash
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm build   (打包前端项目)
$ npm prod    (启动egg服务)
$ npm stop    (停止egg服务)
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
