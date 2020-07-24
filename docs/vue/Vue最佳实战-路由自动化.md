# Vue最佳实战-路由自动化
在讲路由自动化的之前，我们先来介绍一个webpack的API -- <font color="#3eaf7c">require.context()</font>;
``` js
├── modules
│   ├── CommonSetting
│   │   ├── auth.js
│   │   └── routes.js
│   ├── designBSC
│   │   └── routes.js
│   ├── performanceReview
│   │   └── routes.js
│   └── targetPlan
│       └── routes.js
└── index.js

```
``` js
/**
 * 
 * @param {String} a  // 需要读取文件的路径
 * @param {Boolean} b // 是否遍历该文件下的所有子文件夹
 * @param {Reg} c // 匹配文件的正则表达式
 */
var routes = require.context('./modules', true, /routes.js/)
// 读取同级的modules目录，并且遍历目录下的所有子目录，找出所有的routes.js文件
```
值得注意的是，<font color="#3eaf7c">require.context()</font> 执行之后返回的是一个函数，这个函数有三个属性；
- resolve {Function} -接受一个参数request,request为test文件夹下面匹配文件的相对路径,返回这个匹配文件相对于整个工程的相对路径
- keys {Function} -返回匹配成功模块的名字组成的数组
- id {String} -执行环境的id

我们常用的就是它的 ***keys*** 属性，keys属性是 Function 类型的。所以在使用的时候我们直接执行 ***keys*** 属性就行了，得到的是一个数组，数组中是我们读取到的所有匹配正则的某块的路径和名称。
``` js
var keys = routes.keys()
console.log(keys) // ["./CommonSetting/routes.js", "./designBSC/routes.js", "./performanceReview/routes.js", "./targetPlan/routes.js"]
```

上面说到了，<font color="#3eaf7c">require.context()</font> 返回的是一个函数，既然你是一个函数我们自然就可以想到它是可以接受参数的。很显然，它肯定是可以接收参数的。它和 ***resolve*** 方法的req参数是一样的,即匹配的文件名的相对路径,而 ***routes*** 函数返回的是一个模块,这个模块才是真正我们需要的；
``` js
routes.keys().forEach(e => {
  var module = routes(e).default
  // module 即为每个routes.js要导出的内容
})
```
本来呢，我们一般在项目使用 <font color="#3eaf7c">require.context()</font> 并不是用来做自动化路由的；而是为了方便代码的管理，如果这个项目是多人协作的话，每个人都有自己负责的模块，每个模块都有自己的路由。但是router对外暴露的出口只有一个。总不能让每个新建一个路由模块之后都去 ***index.js*** 中都去引用一次新模块的路由文件吧。很显然这是不合理的。多人协作，每个人都去修改公共的模块，总会造成代码的冲突的。从项目代码的管理上这肯定是不允许的。所以，一开始我们使用 <font color="#3eaf7c">require.context()</font> 其实是为了解决该问题的。

既然 <font color="#3eaf7c">require.context()</font> 这么强大，我们为什么只让它来做这么简单的事呢？这根本体现不了它太大的价值啊。

## 路由自动化

其实真正促使我想用它来做路由自动化的想法源于一次Nuxt框架的使用。用过Nuxt框架的人都应该知道，它是不需要你去写路由的，你只需要在你的pages文件夹下组织好自己的模块文件目录结构就好了。他会根据你的模块文件目录自动为你生成对应的路由；

那么idea来了，我们的webpack项目也可以这么玩的。反正我们手撸前端路由的时候也是依据我们的业务模块的文件目录结构来了，而且我们还有神器 <font color="#3eaf7c">require.context()</font>，说干就干；

``` js
.pages
├── account
│   ├── banks.vue
│   ├── cash.vue
│   └── recharge.vue
├── appNews
│   ├── addNews.vue
│   ├── newsCenter.vue
│   └── newsEdit.vue
├── examroomOrder
│   ├── orderDetail.vue
│   └── refund.vue
├── scheduling
│   ├── addScheduling.vue
│   ├── published.vue
│   └── unpublished.vue
└── users
    ├── roles.vue
    └── seting.vue
```

***Talk is cheap, show me the code***

``` js
/**
 * 在routerd的index.js中添加如下代码
 */

// 读取pages下所有的Vue文件
var pages = require.context('../pages', true, /\.vue/)
var routeList = pages.keys().map(e => {
	let path, component, name
	path = e.slice(1)
	path = path.replace('.vue', '')
	component = pages(e).default
	name = path.split('/').pop()
	return {
		path,
		component,
		name
	}	
})
console.log(routeList)
/**
  0: {path: "/account/banks", component: {…}, name: "banks"}
  1: {path: "/account/cash", component: {…}, name: "cash"}
  2: {path: "/account/recharge", component: {…}, name: "recharge"}
  3: {path: "/appNews/addNews", component: {…}, name: "addNews"}
  4: {path: "/appNews/newsCenter", component: {…}, name: "newsCenter"}
  5: {path: "/appNews/newsEdit", component: {…}, name: "newsEdit"}
  6: {path: "/examroomOrder/orderDetail", component: {…}, name: "orderDetail"}
  7: {path: "/examroomOrder/refund", component: {…}, name: "refund"}
  8: {path: "/scheduling/addScheduling", component: {…}, name: "addScheduling"}
  9: {path: "/scheduling/published", component: {…}, name: "published"}
  10: {path: "/scheduling/unpublished", component: {…}, name: "unpublished"}
  11: {path: "/users/roles", component: {…}, name: "roles"}
  12: {path: "/users/seting", component: {…}, name: "seting"}
*/
```
是不是看起来很眼熟呢？这不就是你手写的前端路由文件吗？

当然，这里我们还可以改造一下，让我们的路由实现组件懒加载的

``` js
var pages = require.context('../pages', true, /\.vue/)
var routeList = pages.keys().map(e => {
	let path, component, name
	path = e.slice(1)
	path = path.replace('.vue', '')
	component = () => import(`../pages${path}`)
	name = path.split('/').pop()
	return {
		path,
		component,
		name
	}	
})
```
还是那句老话，喜欢就get去吧 ！
