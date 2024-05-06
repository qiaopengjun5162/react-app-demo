import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import CartContext from '../../../store/cartContext';
import Meal from '../../Meals/Meal/Meal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './CartDetails.module.css';

const CartDetails = () => {
    const cartCtx = useContext(CartContext);

    return (
        <Backdrop>
            <div onClick={e => e.stopPropagation()}
                className={classes.CartDetails}>
                <header className={classes.CartDetailsHeader}>
                    <h2 className={classes.CartDetailsTitle}>餐品详情</h2>
                    <div className={classes.CartDetailsClear}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.CartDetailsMeals}>
                    {cartCtx.items.map((item) => (
                        <Meal noDesc key={item.id} meal={item} />
                    ))}
                </div>
            </div>
        </Backdrop>
    )
}

export default CartDetails
