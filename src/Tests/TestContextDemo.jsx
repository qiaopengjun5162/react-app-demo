import React from 'react';
import TestContext from '../store/testContext';

/*
    使用方式一：
        1. 引入 context 对象 
        2. 调用 context 对象的 consumer 方法 
               consumer 方法接收一个回调函数作为参数
               回调函数的参数就是 context 对象
        3. 调用 consumer 方法时传入一个回调函数
        4. 回调函数的参数就是 context 对象
        5. 在回调函数中，使用 context 对象中的数据
        6. 注意：在回调函数中，不能使用 context 对象中的方法


*/

const TestContextDemo = () => {
    return (
        <TestContext.Consumer>
            {
                (context) => {
                    return (
                        <div>
                            {context.name}
                            {context.age}
                            {context.address}

                        </div>
                    )
                }}
        </TestContext.Consumer>
    )
}

export default TestContextDemo
