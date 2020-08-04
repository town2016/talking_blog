# webpack 打包优化 - DllPlugin
在日常的开发中，项目打包是非常频繁的，所以打包的速度跟我们的日常开发效率是直接相关的。所以今天呢，我们来说一个非常实用并常见的打包优化的方法。

***Dllplugin*** 的主要功能是用来提取开发过程中不会改动或不常改动的的js库，减少webpack的打包范围，从而提升打包速度。本文主要讲述在Vue cli3中配置Dllplugin插件。

## 插件安装
> webpack-cli, add-asset-html-webpack-plugin,  clean-webpack-plugin
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
    new CleanWebpackPlugin(['*.*'], {
      root: path.join(__dirname, dllPath)
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}
```

