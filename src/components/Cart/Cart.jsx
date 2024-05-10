import React, { useEffect, useState } from "react";
import iconImg from "../../assets/bag.png";
import CartContext from "../../store/cartContext";
import classes from "./Cart.module.css";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

// 添加一个购物车组件
const Cart = () => {
    const cartCtx = React.useContext(CartContext);
    // 添加一个state来设置购物车详情是否显示
    const [showCartDetails, setShowCartDetails] = useState(false);

    // 添加一个state用来设置结账页面是否显示
    const [showCheckout, setShowCheckout] = useState(false);

    // 在组件每次重新渲染的时候，检查一下商品的总数量，如果数量为0，则修改 showCartDetails 的状态为false
    // 组件每次重新渲染，组件的函数体都会重新执行一遍
    // 以下代码会报错 (Too many re-renders. React limits the number of renders to prevent an infinite loop.)
    // if (cartCtx.totalAmount === 0) {
    //     setShowCartDetails(false);
    // }

    // useEffect 是一个 React Hook，它允许我们在组件中执行副作用操作 (比如发送网络请求，手动修改 DOM 等等)
    // useEffect 接收一个函数作为参数，该函数会在组件每次重新渲染的时候执行
    // useEffect(() => {
    // 检查一下商品的总数量，如果数量为0，则修改 showCartDetails 的状态为false
    // if (cartCtx.totalAmount === 0) {
    //     setShowCartDetails(false);
    // }
    // }, [cartCtx.totalAmount]);

    /*
        默认情况下，useEffect() 中的函数，会在组件渲染完成后调用，并且是每次渲染完成后都会调用
        在 useEffect() 中，我们可以通过第二个参数来指定 useEffect() 中的函数，会在什么情况下被调用
        第二个参数是一个数组，数组中的每个元素，都是 useEffect() 中的函数的依赖项
        如果依赖项发生变化，useEffect() 中的函数，就会重新执行
        如果依赖项不发生变化，useEffect() 中的函数，就不会重新执行
        如果依赖项为空数组，useEffect() 中的函数，只会执行一次
        如果依赖项为 undefined，useEffect() 中的函数，会每次渲染完成后都会重新执行
        如果依赖项为 null，useEffect() 中的函数，会每次渲染完成后都会重新执行
        如果依赖项为 false，useEffect() 中的函数，会每次渲染完成后都会重新执行
        通常情况下，我们都会将依赖项设置为空数组 []
        如果依赖项为空数组，useEffect() 中的函数，只会执行一次

        通常会将  useEffect() 中使用的所有局部变量，都添加到依赖项中，以避免不必要的重新执行
        像 setState() 是由钩子函数 useState() 创建的
        useState() 会确保组件每次重新渲染的时候，都会重新执行 setState() function， 获取到相同的值
        所以 setState() function 中的值，不会发生变化，可以不添加到依赖项中
    */

    // 添加一个useEffect来监听购物车数量的变化
    useEffect(() => {
        // 检查一下商品的总数量，如果数量为0，则修改 showCartDetails 的状态为false
        if (cartCtx.totalAmount === 0) {
            setShowCartDetails(false);
            setShowCheckout(false);
        }
    }, [cartCtx.totalAmount]);


    // 添加一个点击事件来切换购物车详情是否显示
    const showCartDetailsHandler = () => {
        // 添加一个判断，当购物车数量为0时，不显示购物车详情
        if (cartCtx.totalAmount === 0) {
            setShowCartDetails(false);
            return;
        }
        setShowCartDetails((prevState) => !prevState);
    }

    // 添加一个点击事件来切换结账页面是否显示
    const showCheckoutHandler = () => {
        if (cartCtx.totalAmount === 0) {
            return;
        }
        setShowCheckout((prevState) => !prevState);
    }

    // 添加一个点击事件来关闭结账页面
    const closeCheckoutHandler = () => {
        setShowCheckout(false);
    }

    return (
        <div className={classes.Cart} onClick={showCartDetailsHandler}>
            {showCheckout && <Checkout onHide={closeCheckoutHandler} />}


            {/* 引入购物车的详情 */}
            {showCartDetails && <CartDetails />}

            {/* 购物车图标 */}
            <div className={classes.Icon}>
                <img src={iconImg} alt="cart" />
                {cartCtx.totalAmount === 0 ? null : (
                    <span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>
                )}
            </div>

            {cartCtx.totalAmount === 0 ? (
                <p className={classes.NoMeal}>未选购商品</p>
            ) : (
                <p className={classes.Price}>{cartCtx.totalPrice}</p>
            )}
            <button
                onClick={showCheckoutHandler}
                className={`${classes.Button}  ${cartCtx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
