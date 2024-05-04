import React from 'react';
/*
    Context 相当于一个公共的存储空间
    我们可以将多个组件都需要访问的数据统一存储到Context中
    这样无需通过props传递，即便组件层级很深，也可以轻松访问到Context中的数据
    Context相当于一个全局变量，但是它又不是全局变量，因为它只能存储对象，不能存储基本数据类型

    我们可以通过 React.createContext() 创建一个Context对象
    这个对象包含两个组件：Provider 和 Consumer
    Provider 组件可以让其子组件访问到Context中的数据
    Consumer 组件可以订阅到Context中的数据变化

    Context的优点：
    1. Context可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
    2. 当组件树中的某一个组件需要使用到传递给Context的值时，可以通过Consumer组件进行获取

    Context的缺点：
    1. Context的缺点就是Context中的数据是共享的，所以一旦Context中的数据发生变化，所有依赖Context的组件都会重新渲染



*/

const TestContext = React.createContext({
    name: '张三',
    age: 18,
    height: 1.88,
    address: '北京市'
});

export default TestContext;
