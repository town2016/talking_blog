# Vue最佳实战-hook
看到hook你肯定知道，是的，Vue3.0的一大亮点。但是请放心，本文是基于Vue2.X版本的。但是该title并不是用来装 13 的。

这里的hook其实就是一个组件生命周期的监听器。没有很复杂的功能。但是却可以在应用到实际的项目开发中，使你的代码更加的简洁，优雅。

废话不多说，上代码，我们来看看几种可以用到的场景。例如：

## 父组件监听子组件的生命周期
像这种场景呢，我们通常都是在父组件给子组件传递自定事件，然后再子组件的生命周期钩子函数中触发自定义事件；例如：
``` js
// 父组件
<template>
  <CHildComp @listenMounted="listenMounted"></ChildComp>
</template>
<script>
  export default {
    methods: {
      listenMounted () {}
    }
  }
</script>

// 子组件
export default {
  mounted () {
    this.$emit('listenMounted')
  }
}
```
现在，我们来看看如何使用hook来改造这种场景

``` js
//  父组件
<template>
  <CHildComp @hook:mounted="listenMounted"></ChildComp>
</template>
```
是的，就是这么简单，子组件无需做任何的操作。同一样的，对其他的生命周期钩子一样有效。

接下来，我们来看第二种使用场景；
比如在当前组件内，你想在内部的任何钩子里想做某些事情的话，这个 <font color=#3eaf7c>hook</font> 就大有用处;

如果你在 created 或 mounted 的钩子中定义自定义事件监听器或第三方插件，并且需要在 beforeDestroy 钩子中删除它以避免引起任何内存泄漏，那么这是一个很好的特性。下面是一个典型的设置：

``` js
mounted () {
  window.addEventListener('resize', this.resizeHandler);
  this.$on("hook:beforeDestroy", () => {
    window.removeEventListener('resize', this.resizeHandler);
  })
}
```

再看一种场景，比如说你的页面定义定时器，同样的是你需要在组件销毁的时候清除定时器；如果页面只有一个定时器还好，如果有多个定时器的时候，你对应在组件的data 中需要定义多个的定时器变量，但是这个定时器变量唯一的用处就是在销毁的时候用来作为定时器的编号，用以清除定时器。
``` js
export default {
  data () {
    return {
      timer1: null,
      timer2: null,
    }
  },
  mounted () {
    this.timer1 = setTimeOut(() => {}, 100)
    this.timer2 = setTimeOut(() => {}, 100)
  },
  beforeDestroy () {
    window.clearTimeOut(this.timer1)
    window.clearTimeOut(this.timer2)
  }
}
```
遇到这种定时器多的情况真的是比较糟糕，这个定时器变量真的毫无实际用处，而且还必须多次声明，切且存在内存中。下面我们来看看使用 <font color=#3eaf7c>hook</font> 之后的情况：
 ``` js 
 export default {
  data () {
    return {}
  },
  mounted () {
    this.createTimeout(() => {}, 100)
    this.createTimeout(() => {}, 100)
  },
  methods: {
    createTimeout (fn, duration) {
      let timer = setTimeout(fn, duration)
      this.$on('hook:beforeDestroy', () => {
        window.clearTimeout(timer)
      })
    }
  }
}
 ```
是不是使用起来非常的方便呢？如果觉得不错，就在你的项目中去实践吧；
