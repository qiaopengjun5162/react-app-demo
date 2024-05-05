import React from "react";
import Cart from "./components/Cart/Cart";
import FilterMeals from "./components/FilterMeals/FilterMeals";
import Meals from "./components/Meals/Meals";
import CartContext from "./store/cartContext";

// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: "001",
        title: "汉堡包",
        description: "百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 12.92,
        image: "/img/meals/1.png",
    },
    {
        id: "002",
        title: "双层汉堡",
        description: "双层汉堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 34.00,
        image: "/img/meals/2.png",
    },
    {
        id: "003",
        title: "巨无霸汉堡",
        description: "巨无霸汉堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 22.29,
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
        price: 15.90,
        image: "/img/meals/5.png",
    },
    {
        id: "006",
        title: "板烧鸡腿堡",
        description: "板烧鸡腿堡，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 35.90,
        image: "/img/meals/6.png",
    },
    {
        id: "007",
        title: "吉士汉堡包",
        description: "吉士汉堡包，百分百纯牛肉，加上奶酪、番茄、生菜和洋葱，再沾上美乃滋酱",
        price: 25.19,
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

    // 创建一个过滤meals的方法
    const filterMealsHandler = (keyword) => {
        // 判断是否为空
        if (keyword.trim().length === 0) {
            // 如果是空，则返回所有的数据
            setMeals(MEALS_DATA);
            return;
        }
        // 过滤数据
        const newMeals = MEALS_DATA.filter(meal => meal.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        // 更新数据
        setMeals(newMeals);
    }

    // 向购物车中添加商品
    const addItem = (meal) => {
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
    const removeItem = (meal) => {
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
        <CartContext.Provider value={{ ...cartData, addItem, removeItem }}>
            <div>
                <FilterMeals onFilter={filterMealsHandler} />
                <Meals
                    mealsData={meals}
                />
                <Cart />
                {/* <Backdrop /> */}
            </div>
        </CartContext.Provider>

    );
};

export default App;
