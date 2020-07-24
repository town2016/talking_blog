# Vue最佳实战-watch高阶应用

## 立即执行

<font color=#3eaf7c>watch</font> 是监听属性发生改变时才会触发，有些时候，我们希望在组件创建之后watch能够立即执行。可能很多人都是会在组件的create生命周期中调用一次，但是这样的写法个人感觉很不优雅，而且造成代码冗余。

其实我们可以尝试这样写：
``` js
export default {
  watch: {
    mode: {
      handler () {},
      immediate: true
    }
  }
}
```
## 触发监听执行多个方法

如果你需要你的监听在被触发的时候执行多个函数呢其实我们可以有很多中玩法，可能我们最常见的就是在handler中写入多个函数的调用；
```  js
export default {
  watch: {
    mode: {
      handler () {
        this.changeStatus()
        this.getNewStatus()
      }
    }
  },
  methods: {
    changeStatus () {},
    getNewStatus () {}
  }
}
```
但是呢？这么写也会存在一定的局限性。那就是如果 <font color=#3eaf7c>getNewStatus</font> 是需要在一进来就立即执行，但是 <font color=#3eaf7c>changeStatus</font>是每次在变化的时候去触发该怎么办呢？难道又要走回原来的路子？在create钩子中去执行 <font color=#3eaf7c>getNewStatus</font>吗？

在你看到这里之前呢，你也许一定会这么干，但是看完这里之后将为你打开一扇新的窗户；

监听的字段属性可以是函数类型，可以是字符串类型，可以是对象类型。那么你有没有想过可以是数组类型的呢？答案是肯定的：

``` js
export default {
  watch: {
    mode: [
      'changeStatus',
      {
        handler: 'getNewStatus',
        immediate: true
      },
      () => {
        this.changeStatus()
      }
    ],
    methods: {
      changeStatus () {},
      getNewStatus () {},
      setStatus () {}
    }
  }
}
```
神奇不，数组中还可以支持函数，对象，字符串三种模式哦；

## watch监听多个变量

<font color=#3eaf7c>watch</font> 本身呢是无法实现通过一个字段监听多个变量的。但是我们我们自己是不是可以奇技淫巧一把。
主要的思路呢就是利用计算属性，我们可以将多个变量关联一个计算属性，然后监听这个计算属性，这样是不是就达到了通过一个字段来监听多个变量的目的呢：
``` js
export default {
  data () {
    return {
      mode: 1,
      status: 2
    }
  },
  computed: {
    modeAndStatus () {
      var { mode, status } = this
      return {
        mode,
        status
      }
    }
  },
  watch: {
    modeAndStatus: {
      handler (newVal) {},
      deep: true
    }
  }
}

```




