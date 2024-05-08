import React from 'react'
import Counter from '../../../UI/Counter/Counter'
import classes from './CheckoutItem.module.css'

const CheckoutItem = (props) => {
    return (
        <div className={classes.CheckoutItem}>
            <div className={classes.CheckoutItem__img}>
                <img src={props.meal.image} alt="" />
            </div>
            <div className={classes.CheckoutItem__info}>
                <h2 className={classes.CheckoutItem__title}>{props.meal.title}</h2>
                <div className={classes.CheckoutItem__counter_price}>
                    <div className={classes.CheckoutItem__counter}>
                        <Counter meal={props.meal} />
                    </div>
                    <div className={classes.CheckoutItem__price}>{props.meal.price * props.meal.amount} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
