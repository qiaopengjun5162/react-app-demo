import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";

const Confirm = (props) => {
    return (
        <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
            <div className={classes.ConfirmInner}>
                <p className={classes.ConfirmText}>{props.confirmText}</p>
                <div>
                    <button
                        onClick={(e) => {
                            props.onCancel(e);
                        }}
                        className={classes.CancelButton}
                    >
                        取消
                    </button>
                    <button
                        onClick={(e) => {
                            props.onConfirm(e);
                        }}
                        className={classes.ConfirmButton}
                    >
                        确认
                    </button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;
