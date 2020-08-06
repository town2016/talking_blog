# webpack 打包优化 - DllPlugin
在日常的开发中，项目打包是非常频繁的，所以打包的速度跟我们的日常开发效率是直接相关的。所以今天呢，我们来说一个非常实用并常见的打包优化的方法。

***Dllplugin*** 的主要功能是用来提取开发过程中不会改动或不常改动的的js库，减少webpack的打包范围，从而提升打包速度。本文主要讲述在Vue cli3中配置Dllplugin插件。

## 插件安装
::: warning Note
  webpack-cli@^3.2.3, add-asset-html-webpack-plugin@^3.1.3, clean-webpack-plugin@^1.0.1
:::
- webpack-cli (Vue cli3.x 不提供webpack-cli API,但是Dllplugin是webpack的内置插件，所以这里我们需要先安装webpack-cli)
- add-asset-html-webpack-plugin （将提出的公共库的按制定的路径，注入到打包后的index.html中）
- clean-webpack-plugin （用以在提取公共库之前清空原有公共库的存放地址的文件夹）

## 编写Dllplugin的配置文件
在项目根目录下创建dllplugin配置文件，配置文件尽量语义化；例如：webpack.dll.conf.js
``` js
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const dllPath = 'public/dll'
//  注意，这使用的是module.exports 因为我们的脚本是在webpack环境中运行的，webpack使用require来读取我们的文件的
module.exports = {
  // 入口配置要抽取的公共库
  entry: {
    // 将vue, vue-router, vuex抽离到一个叫Vue的js文件中。注意，这里的vue.js抽取并不是直接的写Vue,应为我们项目中实际使用到的vue文件是在vue/dist目录中的vue.runtime.esm.js
    vue: ['vue/dist/vue.runtime.esm.js', 'vue-router', 'vuex'], 
    axios: ['axios'],
    echarts: ['echarts'],
    ant: ['ant-design-vue']
  },
  // 文件输出配置
  output: {
    path: path.join(__dirname, dllPath), //输入的文件路径
    filename: '[name].dll.js', // 输出的文件名
    library: '[name]_[hash]' // 第三方包的输出命名
  },
  plugins: [
    // 清打dll的打包文件夹
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    // 生产抽取的dll文件
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}
```
配置完了之后我们需要在本地执行我们的dll配置文件，在项目的package.json文件的scripts中配置执行命令;

> "dll": "webpack -p --progress --config ./webpack.dll.conf.js"

执行 ***npm run dll*** ，就可以提取出我们需要的公共库了。到了这里千万不要以为你的任务已经完成了，因为到这里仅仅只是提取公共库，还并没有在打包的时候从模块依赖中抽离这些我们已经提取的库了，所以我们需要另外一个插件 -- DllReferencePlugin。这也是webpack的一些内置插件，无需再额外安装。接下来，我们再改造一下我们的vue.config.js的配置文件。
还是，那句话。***Talk is cheap, show me the code***

## 配置webpack.DllReferencePlugin

``` js

const webpack = require('webpack')
const fs = require('fs')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 因为这里我们打包出来的是过个dll.js文件，所以这里我先用fs读取了所有的文件，然后采用了遍历去像 config.plugins里push多个webpack.DllReferencePlugin插件，从而让webpack打包的时候获取这些我们已经提取的库
      const FILES = fs.readdirSync(path.resolve(__dirname, './public/vendor'))
      let dllReferencePluginList = []
      let addHtmlPluginsList = []
      FILES.forEach(e => {
          if (/.*\-manifest.json/.test(e)) {
              config.plugins.push(new webpack.DllReferencePlugin({
                  context: process.cwd(),
                  manifest: `./public/vendor/${e}` // path.join('./public/vendor/', e)
              }))
          }
          // 我们提取的公共库文件肯定不能是只提取，还要注入到我们的页面中，如果不注入进来我们的项目肯定是存在问题的，但是我们又不想手动的去打包后的html页面里注入这些库，所有我们采用了 add-asset-html-webpack-plugin 插件来帮我们做这件事
          if (/.*\-manifest.js/.test(e)) {
              config.plugins.push(new AddAssetHtmlPlugin({
                  filepath: `./public/vendor/${e}`,
                  publicPath: `./public/vendor`,
                  outputPath: './vendor'
              }))
          }
      })
    }
  }
}
```
好了，到这里我们Vue cli3.0 中配置dllplugin的全过程就结束了。

