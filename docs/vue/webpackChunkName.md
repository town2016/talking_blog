# webpackChunkName

## SPA按需加载的必要性

 首屏白屏是前端性能优化的一个老生常谈的问题，通常的优化方法是通过减少首页资源请求与加载，降低加载的资源的体积。这在移动端web项目中几乎是必做的。
 当然，这在PC web中并不是不用去考虑。尤其是在目前的SPA中，因为是单页的，基本上所有的模块通过依赖关系进行关联的。如果未使用按需加载，那么基本会在页面初始化的时候会一股脑的把所有模块的资源文件全部架子啊出来，这不仅仅是请求并发的问题，占用带宽。还会严重阻塞那些必要资源的加载，阻塞前端页面的渲染。这势必会造成前端首屏白屏的时间更长。所以模块的按需加载肯定是势在必行的。

### 组件按需加载
webpack为我们提供了两种按需加载的方法

1. webpack1.x中提供了require.enrequire.ensure()
2. webpack2.x中提供了import()

**require.ensure()**

``` js
require.ensure(
  dependencies: String[],
  callback: function(require),
  errorCallback: function(error),
  chunkName: String
)
```
- dependencies: 是一个字符串数组，这里定义的都是当前代码块执行之前所有的依赖模块
- callback: 回调函数是在依赖模块加载完成之后所要执行的真正代码块，所以我们的异步加载代码就写在这个回调中。
- errorCallback: 错误回调
- chunkName: 打包的chunk名

其实这里还有一个坑就是，无论你怎么设置chunkName你会发现都没有生效，主要是因为单单只在这里设置是不够的，还需去修改 webpack 配置文件的<font color=#3eaf7c>output</font>中的<font color=#3eaf7c>chunkFilename</font>属性，以及<font color=#3eaf7c>publicPath</font>属性。

**举个例子**
``` js
require.ensure([], require => {
  require('./a.js')
})
```


**import**
import是es6中的提供的模块加载API，说到import了就讲一下import命令跟import()函数的异同点吧

- import 和import() 都是es6 的模块加载API
- import命令能够接受什么参数，import()函数就能接受什么参数
- import是静态记载资源，语句必须放在代码块最顶层
- import()是动态的加载资源（也就是我们说的异步加载），返回的是promise对象。
- import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用
- import()函数它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。

**举个例子**
``` js
var component = import('./a.js).then(res => {
  console.log(res.default)
  // 针对export default的资源模块，default是当前模块的实例
})
```

- - -

_*讲到这里，我们开始进入我们的主角 webpackChunkName 的介绍了*_
  

## 什么是webpackChunkName

首先我们要知道webpackChunkName是什么。从字面翻译就可以理解了webpack 块 名称。众所周知的是webpack是一个模块打包工具，将我们的的项目资源文件根据依打包成一个个独立的模块。每个模块都有肯定都有一个对应的名称，在没有设置chunkName的时候，webpack会自动的给我们生成一个名称，像什么， a.js, b.js...。这样打包完成之后根据名称基本上完全看不出跟我们项目中的资源文件的一一对应关系。尤其在我们调试的时候，根据报错信息查看报错文件的代码块的时候，如果不是自己开发模块，根据代码基本看不出是项目中的哪一块出现了问题。

上面我们讲了require.ensure() 的chunkName的配置方法，这里我们再讲一下import()方法设置chunkName的方法。简答的看个例子吧，上代码最直接了。
``` js
  import(/* webpackChunkName: 'user' */, '@/components/user/user')
```
是的，es6中采用这种注解的方式来设置模块的chunkName,号称魔法注释，webpack通过增加内联注释来告诉runtime,该有怎样的行为。通过向import中添加注释，我们可以执行诸如命名chunk或选择不同模式之类的操作。


