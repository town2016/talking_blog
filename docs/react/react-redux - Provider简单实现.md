# react-redux 的 Provider简单实现
相信学习react 的小火伴就大多数人都是从react, redux入手的。redux作为一个优秀的状态管理库它不仅仅是为react而生的，跟vux不太一样，vux就是专门为vue框架量身打造的。所以，redux在react项目中使用的时候我们一般还需要建立一个沟通的桥梁。那就是react-redux，react-redux的作用就是将redux管理的状态全局的注入到react中，使得每一个react组件都可以访问到redux中管理的状态。

react-redux 为react提供了两大核心API：
- Provide
- connect
这两大核心api使得react和redux无障碍沟通，今天我们就来看一下Provider。

## Provider的作用
- Provider是一个react组件，一个容器组件。用以包裹整个react的根组件
- 接收<font color="#3eaf7c"> redux </font>的 <font color="#3eaf7c">store</font> 作为 <font>props</font>；并将其声明为 <font color="#3eaf7c">context</font> 的属性之一；
- 先通过childContextType定义要传递给子组件的数据，在通过 <font color="#3eaf7c">getChildContext</font> 返回定义好的数据，子组件就可以通过 <font color="#3eaf7c">this.context</font> 来访问传递的数据，且没有层级限制。

我们来看看Provider的核心源码：
``` js
import { Component, childContextTypoe, Children } from 'react'
// 导入store验证规则以及警告提示方法
import storeShape from '../utils/storeShape'
import PropTypes from 'prop-types'

class Provider extends Component {
    constructor (props, context) {
        super(props, context)
        this.store = props.store
    }
    // 返回从构造方法传递的store，将store传递给子孙component
    getChildContext () {
        return {
            store: this.store
        }
    }
    render () {
        /* 
            *返回仅有的一个子元素，否则（没有子元素或超过一个子元素）
            * 报错且不渲染任何东西。 这也说明Provider下必须只能是一个子元素
        */
        return Children.only(this.props.Children)
    }

}
// 给Provider组件设置propTypes验证。storeShape是一个封装的方法。
Provider.propTypes = {
    store: storeShape.isRequired,
    children: PropTypes.element.isRequired
}
// 验证childContextTypes, 它的作用就是让Provider下面的子组件能够访问到store
Provider.childContextType: {
    store: storeShape.isRequired
}

```

