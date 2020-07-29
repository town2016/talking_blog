# Vue最佳实战-observable

Vue.observable 是Vue2.6新增的特性

### 参数
- <font color=#d63200>{Object} object</font>

接收一个对象并返回一个对象，并使返回的这个对象可反应。并可以直接在 ***render函数*** 和 ***计算属性*** 中使用。当数据发生变化时，触发适当的更新。在你的项目规模比较小，感觉使用Vuex有点大材小用的时候，可以尝试使用 ***Vue.Observable*** 来替代；

来看一个简单的 Demo ：

### store.js
``` js
import Vue from 'vue'

export default {
  observer: Vue.observable({
    name: 'hello'
  }),
  setName (name) {
    this.observer.name = name
  }
}

```

### Test Component

``` js
<template>
  <div>{{name}}</div>
</template>

<script>
import store from './store.js'
export default {
  computed: {
    name () {
      return store.observer.name
    }
  },
  mounted () {
    setTimeout(() => {
      store.setName('hello world')
    }, 5000)
  }
}
</script>
```

我们在 ***mounted*** 钩子中设置了一个五秒的定时器，五秒钟之后可以在视图中的 hello 更新为 hello world;

这是不是很像我们Vuex呢？

其实我们也可以像Vuex通过this来访问store;我们只需要改造一下我们的store.js，然后将它挂载到Vue实例上；

``` js
import Vue from 'vue'

const store = {
  observer: Vue.observable({
    name: 'town'
  }),
  setName (name) {
    this.observer.name = name
  }
}

export default {
  install (Vue) {
    Vue.prototype.$store = store
  }
}

```
改造完成之后，我们在main.js中 use 一下就可以了；
### main.js
``` js
import Vue from 'vue'
import store from './store/store.js'
Vue.use(store)

```
OK ,到这里就大功告成了。我们就可以在我们任意组件中使用this.$tore了。




