import React from 'react';
import TestContext from '../store/testContext';

/*
    使用Context的方式二
        1. 引入 Context 组件
        2. 使用钩子函数 useContext 获取 Context 中的数据
            useContext(Context) 需要一个 Context 组件作为参数
            它会返回 Context 中的数据

            const ctx = React.useContext(TestContext);

        3. 使用数据
            <div>{ctx.data}</div>
    
    xxx.Provider
        - 表示数据的生产者，可以使用它来指定 Context 中的数据
        - 通过 value 属性来指定 Context 中存储的数据
            这样一来，在该组件的子组件中，就可以使用 useContext 钩子函数来获取 Context 中的数据了
        
        <TestContext.Provider value={{name: '张三', age: 18}}>
    
    当我们通过 Context 访问数据时，会先从当前组件开始向上查找，直到找到最近的 Context.Provider 为止
    然后，从该 Provider 中获取数据，并使用它
    如果没有找到 Provider， 则会读取 Context中的默认值
*/

const TestContextDemo2 = () => {
    // 使用 useContext 获取 Context 中的数据
    const ctx = React.useContext(TestContext);
    return (
        <div>
            {ctx.name} -- {ctx.age} -- {ctx.address}
        </div>
    )
}

export default TestContextDemo2
