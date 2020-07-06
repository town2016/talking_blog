# 规范

## 项目目录结构规范


```
project
| src
  |__ components  // 公共组件
  |__ pages // 路由页面
      |__ components // 页面内业务组件
      |__ ....... // 路由组件
      |__ ....... // 每个业务模块下都应建立readme文档，命名为模块中文名，文档内容为模块需求简介
  |__ router // 路由
      |__ ...... // 路由目录结构请依照pages 目录结构，路由path 请使用目录路径加文件名
      |__ index.js // 路由总出口
  |__ store // 状态管理库
      |__ modules //  状态模块
          |__ type // getters , mutations, actions的命名，使用const常量声明，避免命名耦合
          |__ ...... // 状态模块js
      |__ index.js // 状态导出总出口
  
  |__ utils // 公共js库
      |__ plugins // 全局插件
  |__ assets // 静态资源库
  
```
## git分支管理规范

> GIT工作流是团队协作积累的代码治理经验。在敏捷开发中，选择合理的、灵活的、可靠的代码管理方式，可优化产研各阶段的在制品数量限制并提高协作效率，保障生产安全。

这里我们采用的是 git 工作流管理规范

<div>
  <img src="https://img-blog.csdnimg.cn/2020042518174011.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2tpc2Nvbg==,size_16,color_FFFFFF,t_70"/>
</div>

+ Workspace：工作区
+ Index / Stage：暂存区
+ Repository：仓库区（或本地仓库）
+ Remote：远程仓库

工作区：就是你在电脑上看到的目录，比如目录下testgit里的文件(.git隐藏目录版本库除外)。或者以后需要再新建的目录文件等等都属于工作区范畴。

版本库(Repository)：工作区有一个隐藏目录.git，这个不属于工作区，这是版本库。其中版本库里面存了很多东西，其中最重要的就是stage(暂存区)，还有Git为我们自动创建了第一个分支master,以及指向master的一个指针HEAD。

## 功能开发工作流

> 这种工作流关注功能开发，不直接往master提交代码保证它是稳定并且干净的，而是从master拉取feature分支进行功能开发，团队成员根据分工拉取不同的功能分支来进行不同的功能开发，这样就可以完全隔离开每个人的工作。当功能开发完成后，会向master分支发起Pull Request，只有审核通过的代码才真正允许合入master，这样就加强了团队成员之间的代码交流，也就是我们常说的Code Review。

#### 常驻分支

+ master  --> 代码备份分支
+ prod --> 生产分支（生产代码分支）
+ pord-pre -->分支 （预发布分支，代码上生产之前的最后一次验证分支，分子管理员负责检查合并的内容是否有漏或多余）
+ uat --> 测试分支 （测试人员用来验证需求分支）
+ dev --> 开发分支 （开发人员自测分支）
+ prod-bug --> 生产bug修复分支 （用以验证生产bug的修复情况）


#### 基本工作流程及分支权限说明


1. 开发分之命名规范— dev + 需求英文名称
2. 新建分之后需在wiki里写对应的分之说明
3. 分支管理流程
    1. 从prod 拉取开发分支—>开发自测—>提交测试
    2. 测试完成之后—> 开发提交分支合并请求（开发分支—>prod-pre），测试进行发布前的最后一次回归测试—>验收成果之后—>prod-pre合并到prod (此步操作由仓库管理员进行，生产发布之后由管理员将生产分支合并到常驻分支)

4. 项目上线之后的bug修复：
    1. 修复生产bug 需从生产分支拉取bug修复分支，命名规则bug + ‘bug描述’
    2. 修复完成后发起分支合并需求bug分支到uat分支,测试验证
    3. 测试验证完成之后，发起分支合并需求(bug —> prod-bug)
    4. bug验证完成之后由仓库管理员将prod-bug分支合并到prod
5. prod-pre —> prod ,  prod-bug —> prod前必须打tag，必须写tag描述，描述内容为本次合并的主要内容


## 项目命名规范
> 文件夹命名 - 大驼峰法（UserInfo）

> 文件命名 - 小驼峰法（userInfo）

> 变量名命名规范
必须使用小驼峰命名法，变量名应当使用名词，例如：
``` js
var userInfo = {}
var maxLength = 10

```

> 常量命名
必须使用全部大写的下划线命名法，例如：
``` js
const USER_INFO = {}
const MAX_LENGTH = 10

```

>函数命名
必须使用camel命名法，例如：
``` js
function getList () {
  ......
}
```
> 私有属性
下划线 + 小驼峰，例如：
``` js
methods: {
  _dataFormData () {
    ......
  },
  _initEvent () {
    ......
  }
}
```
>与关键字或框架私有属性冲突的方法命或属性命名
$ + 下划线 + 关键字 例如：
``` js
methods: {
  $_cancel () {
    ......
  }，
  $_render () {
    ......
  }
  
}

```
>样式class命名
用中划线分隔，例如：
``` html
<div class="user-info-wrapper">
  <div class="head-box"></div>
  <div class="content-box"></div>
  <div class="foot-box"></div>
</div>
```



## 代码风格规范
js代码规范主要采用 eslint:recommended 推荐规则
``` js
 "rules": {
    "indent": ["error", 2], // 两个缩进，不符合规则的报错
    "semi": ["error", "never"], // 禁止使用分号
    "no-unused-vars": 0, // 变量未使用提示
    "no-trailing-spaces": 2, // 禁用行尾空格
    "quotes": [2, "single", "avoid-escape"], // 强制使用一致的反勾号、双引号或单引号 
    "space-before-blocks": [2, "always"], // 强制在块之前使用一致的空格
    "space-before-function-paren": [2, "always"], // 强制在 function的左括号之前使用一致的空格
    "space-in-parens": [2, "never"], // 强制在圆括号内使用一致的空格
    "space-infix-ops": 2, // 要求操作符周围有空格
    "comma-spacing": [2, {"before": false, "after": true}] // 控制逗号前后的空格
    "eol-last": 2, // 文件末尾强制换行
}
```
具体更多规则请参考[eslint 规则文档](http://eslint.cn/docs/rules/)

## 组件封装规范 
 ### vue组件封装三要素
  + props 
  + slot
  + events
 1. 父组件传值子组件采用props
 2. 子组件传递数据给父组件 events
 3. slot提供给用户自定义内容接口，使得组件高度自定义化
 
 ### 组件的定义
  + 可复用的模块，完成既定功能
  + 有明确的接口规定
  + 有上下文依赖、外部依赖资源的定义
  + 可以独立发布
  
 ### 组件设计的原则
  + 适用单一职责原则
  + 适用开放封闭原则（对扩展是开放的，而对修改是封闭的）
  + 避免太多参数
  + 追求无副作用 （无侵入式组件）
  + 避免暴露组件内部实现（组件内部的数据通过提供数据暴露的接口对外暴露）
  + 避免直接操作DOM
  + 组件无强制依赖
  + 入口处检查参数的有效性，出口处检查返回的正确性 (vue 组件的props数据类型校验)
  + 控制反转，依赖注入
 
 ### 组件封装灵魂5问
 在组件封装的时候，从如下几方面去考虑，引导完善组件的设计
 
 + 组件是否有必要再拆分（组件颗粒度的问题）
 + 组件依赖是否可再缩减（对应上述的无强制依赖）
 + 是否对其他组件造成入侵（对应上述的无副作用）
 + 这个组件可否复用于其它类似场景中 (组件的复用性)
 + 这个组件当别人用时，会怎么想 （尽量让别人用起来简单易上手）
  
  
