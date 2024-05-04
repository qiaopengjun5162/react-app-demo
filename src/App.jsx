import React from "react";
import TestContextDemo from "./Tests/TestContextDemo";
import TestContextDemo2 from "./Tests/TestContextDemo2";
import Meals from "./components/Meals/Meals";
import TestContext from "./store/testContext";

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

    // 创建一个state用来存储购物车的数据
    /*
        1. 商品 []
        2. 商品总数 totalAmount
        3. 商品总价 totalPrice
    */
    const [cartData, setCartData] = React.useState({
        items: [],
        totalAmount: 0,
        totalPrice: 0,
    });

    // 向购物车中添加商品
    const addMealHandler = (meal) => {
        // meal 要添加进购物车的商品
        // 对购物车进行复制
        const newCartData = { ...cartData };
        // 判断购物车中是否存在该商品
        if (newCartData.items.indexOf(meal) === -1) {
            // 如果不存在，则添加
            newCartData.items.push(meal);
            // 修改商品的数量
            meal.amount = 1;
        } else {
            // 如果存在，则修改商品的数量
            meal.amount++;
        }
        // 计算商品总数
        newCartData.totalAmount += 1;
        // 计算商品总价
        newCartData.totalPrice += meal.price;

        // 更新购物车数据
        setCartData(newCartData);
    }

    // 删除购物车中的商品
    const deleteMealHandler = (meal) => {
        // 对购物车进行复制
        const newCartData = { ...cartData };
        // 获取购物车中该商品的索引
        const index = newCartData.items.indexOf(meal);
        // 删除该商品
        meal.amount--;
        // 如果等于0，则删除该商品
        if (meal.amount === 0) {
            // 如果等于1，则删除该商品
            newCartData.items.splice(index, 1);
        }

        // 计算商品总数
        newCartData.totalAmount -= 1;
        // 计算商品总价
        newCartData.totalPrice -= meal.price;

        // 更新购物车数据
        setCartData(newCartData);
    }


    return (
        <TestContext.Provider value={{ name: "林黛玉", age: 14 }}>

            <div>
                <TestContextDemo />
                <TestContext.Provider value={{ name: "薛宝钗", age: 16 }}>
                    <TestContextDemo2 />
                </TestContext.Provider>

                <Meals
                    mealsData={meals}
                    onAdd={addMealHandler}
                    onSub={deleteMealHandler}
                />
            </div>
        </TestContext.Provider>
    );
};

export default App;
