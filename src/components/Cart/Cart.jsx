import React from "react";
import iconImg from "../../assets/bag.png";
import CartContext from "../../store/cartContext";
import classes from "./Cart.module.css";

const Cart = () => {
    const cartCtx = React.useContext(CartContext);

    return (
        <div className={classes.Cart}>
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
            <button className={`${classes.Button}  ${cartCtx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
};

export default Cart;
