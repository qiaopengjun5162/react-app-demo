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
