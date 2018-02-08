# egg-react-cli

> 本脚手架支持使用 react 或 vue 配合 egg 开发项目

> 使用了 [react-hot-loader](https://github.com/gaearon/react-hot-loader/tree/next) 和 vue-loader 进行热更新


> 使用了 webpack.DllPlugin 对常用npm包进行预编译，减少开发时的重复编译时间

## 开始
```bash
$ npm install -g egg-react-cli
$ egg-react-cli new-project
$ cd new-project
$ yarn install && npm run dll && npm run start
```

## 常用命令
> 下载项目、修改项目名、安装依赖、编译固定npm包至dll、启动egg并且启动webpack watch打包
```bash
$ npm run dll  (预先打包前端固定依赖)
$ npm run start  (使用webpackServer编译前端项目)
$ npm run build  (使用webpackServer编译用于发布的项目)
$ npm run dev  (新开一个终端窗口，启动egg开发模式)
$ npm run prod (后台多线程启动egg项目)
$ npm run stop (停止egg后台进程)
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

### 代理
修改 package.json 中的 proxy为您所需的代理路径, 文档参考：
https://github.com/chimurai/http-proxy-middleware

约定，当 proxy 的端口和 prot 一致时，不启用代理
```js
var ignoreHost = [
  'http://0.0.0.0:' + package.port,
  'http://127.0.0.1:' + package.port,
  'http://localhost:' + package.port,
]
if (package.proxy['/']) {
  ignoreHost.map((v)=>{
    if(package.proxy['/'].target === v) {
      package.proxy['/'] = {}
    }
  })
}
```


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
