import React, { useState } from "react";
import iconImg from "../../assets/bag.png";
import CartContext from "../../store/cartContext";
import classes from "./Cart.module.css";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
    const cartCtx = React.useContext(CartContext);
    // 添加一个state来设置购物车详情是否显示
    const [showCartDetails, setShowCartDetails] = useState(false);

    // 添加一个state用来设置结账页面是否显示
    const [showCheckout, setShowCheckout] = useState(false);

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
