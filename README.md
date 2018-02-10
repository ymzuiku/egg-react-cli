# egg-react-cli

> 该脚手架支持使用 react 或 vue 配合 egg 开发项目

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
$ npm run start  (启动client-react文件夹内的前端项目)
$ npm run build  (编译client-react文件夹内的前端项目)
$ npm run dev  (新开一个终端窗口，启动egg开发模式)
$ npm run prod (后台多线程启动egg项目)
$ npm run stop (停止egg后台进程)
```

### 针对某个目录启动

例如需要启动 client-vue 目录：
```bash
$ client=vue npm run start
```
以下命令可以设置目录，默认为 client-react 目录:
```bash
$ client=name npm run dll
$ client=name npm run start
$ client=name npm run build (编译至public/name)
```

### 前端编译
预先编译dll包可以大幅度提高平时webpack的打包速度
```bash
$ npm run dll
```
如果要修改dll打包设定，请修改package.json 中的dll数组, 当前默认设置为react相关的依赖，请根据需要自行修改:
```json
"dll": [
    "polyfill-exp",
    "animejs",
    "ramda",
    "underscore",
    "react",
    "react-dom",
    "react-router-dom",
    "mobx",
    "mobx-react",
    "styled-components"
  ],
```


### 代理
修改 package.json 中的 proxy为您所需的代理路径, 文档参考：
https://github.com/chimurai/http-proxy-middleware

约定，当 proxy 的端口和 prot 一致时，不启用代理, 以下是判断逻辑
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
