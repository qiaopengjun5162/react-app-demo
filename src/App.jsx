import React from "react";
import Meals from "./components/Meals/Meals";

// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: "001",
        title: "汉堡包",
        description: "百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 12.99,
        image: "/img/meals/1.png",
    },
    {
        id: "002",
        title: "双层汉堡",
        description: "双层汉堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 34.99,
        image: "/img/meals/2.png",
    },
    {
        id: "003",
        title: "巨无霸汉堡",
        description: "巨无霸汉堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 22.99,
        image: "/img/meals/3.png",
    },
    {
        id: "004",
        title: "麦辣鸡腿汉堡",
        description: "百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 18.99,
        image: "/img/meals/4.png",
    },
    {
        id: "005",
        title: "麦乐鸡",
        description: "百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 15.99,
        image: "/img/meals/5.png",
    },
    {
        id: "006",
        title: "板烧鸡腿堡",
        description: "板烧鸡腿堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 35.99,
        image: "/img/meals/6.png",
    },
    {
        id: "007",
        title: "吉士汉堡包",
        description: "吉士汉堡包，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 25.99,
        image: "/img/meals/7.png",
    },


]

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

    // 创建一个state用来存储食物数据
    const [meals, setMeals] = React.useState(MEALS_DATA);

    // 创建一个函数用来更新state
    const updateMeals = () => {
        setMeals(MEALS_DATA);
    }
    return (
        <div>
            <Meals mealsData={meals} />
        </div>
    );
};

export default App;
