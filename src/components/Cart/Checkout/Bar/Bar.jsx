import React from 'react'
import classes from './Bar.module.css'

const Bar = (props) => {
    return (
        <div className={classes.bar}>
            <div className={classes.totalPrice}>{props.totalPrice}</div>
            <button className={classes.button}>去支付</button>
        </div>
    )
}

export default Bar
