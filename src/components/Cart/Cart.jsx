import React from 'react'
import iconImg from '../../assets/bag.png'
import CartContext from '../../store/cartContext'
import classes from './Cart.module.css'

const Cart = () => {
    const cartCtx = React.useContext(CartContext);

    return (
        <div className={classes.Cart}>
            <div className={classes.Icon}>
                <img src={iconImg} alt="cart" />
                <span className={classes.TotalAmount}>{cartCtx.totalAmount}</span>
            </div>

            <p className={classes.Price}>{cartCtx.totalPrice}</p>
            <button className={classes.Button}>去结算</button>
        </div>
    )
}

export default Cart
