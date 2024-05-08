import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import CartContext from "../../../store/cartContext";
import classes from "./Checkout.module.css";
import CheckoutItem from "./CheckoutItem/CheckoutItem";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
    const cartCtx = React.useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div>
                <FontAwesomeIcon
                    onClick={() => props.onHide()}
                    icon={faTimes} className={classes.close} />
            </div>
            <div className={classes.MealsDesc}>
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                </header>

                <div className={classes.meals}>
                    {cartCtx.items.map((item) => <CheckoutItem key={item.id} meal={item} />)}
                </div>

                <footer className={classes.footer}>
                    <p className={classes.totalPrice}>{cartCtx.totalPrice}</p>
                </footer>
            </div>

        </div>,
        checkoutRoot
    )
}

export default Checkout;
