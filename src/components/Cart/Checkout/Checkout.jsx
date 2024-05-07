import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";

const checkoutRoot = document.getElementById("checkout-root");

const Checkout = (props) => {
    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div>
                <FontAwesomeIcon
                    onClick={props.onHide}
                    icon={faTimes} className={classes.close} />
            </div>
        </div>,
        checkoutRoot
    )
}

export default Checkout;
