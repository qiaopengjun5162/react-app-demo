import React from "react";
import Meals from "./components/Meals/Meals";

const App = () => {
    /*
        CSS 模块
            使用步骤：
                1. 创建一个 xxx.module.css
                2. 在组件中引入css import classes from "./App.module.css";
                3. 通过 classes 来设置类 className={classes.p1}
        CSS模块可以动态的设置唯一的class值
        <p class="App_p1__9uzM-" data-relingo-block="true">我是一个段落</p>

        内联样式
        外部样式表
        CSS Module

        React.Fragment 
            - 是一个专门用来作为父容器的组件
                它只会将它里面的子元素直接返回，不会创建任何多余的元素
                等于 空标签 <> </>
            - 当我们希望有一个父容器，但同时又不希望父容器在网页中产生多余的结构时，就可以使用 Fragment
    */

    return (
        <div>
            <Meals />
        </div>
    );
};

export default App;
