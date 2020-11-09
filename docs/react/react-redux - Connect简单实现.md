# react-redex - connect的简单实现
<font color="#3eaf7c">connect</font> 是react-redux最核心的API，看名字就应该知道它的作用了。是的，它就是链接react和redux之间的桥梁，真正将redux的store注册为组件的props的方法。

connect(mapStateToProps, mapDispatchToProps, mergeOptions, options) 参数：
- mapStatwToProps:
    1. 必须是Function类型的，作用就是绑定 <font color="#3eaf7c">state</font> 的指定值到组件的props中
        - <font color="#3eaf7c">state</font>: 监听Redux store的变化。任何时候只要 Redux store发生改变，mapStateToProps 函数就会被调用,该回调函数必须返回一个纯对象，该对象会与相应展示组件的 props 合并

- mapDispatchToProps： 
    1. 