import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import CartContext from '../../../store/cartContext';
import Meal from '../../Meals/Meal/Meal';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Confirm from '../../UI/Confirm/Confirm';
import classes from './CartDetails.module.css';


const CartDetails = () => {
    const cartCtx = useContext(CartContext);

    // 设置一个state用来控制是否清空购物车
    const [showConfirm, setShowConfirm] = useState(false);

    // cancelHandle
    const cancelHandle = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    }

    // 清空购物车
    const clearCartHandle = () => {
        // cartCtx.clearCart();

        cartCtx.CartDataDispatch({
            type: 'CLEAR_CART'
        })
    }

    // 显示确认框
    const showConfirmHandle = () => {
        setShowConfirm(true);
    }

    return (
        <Backdrop>
            {showConfirm && <Confirm
                confirmText={"确定清空购物车？"}
                onCancel={cancelHandle} onConfirm={clearCartHandle} />}

            <div onClick={e => e.stopPropagation()}
                className={classes.CartDetails}>
                <header className={classes.CartDetailsHeader}>
                    <h2 className={classes.CartDetailsTitle}>餐品详情</h2>
                    <div onClick={showConfirmHandle}
                        className={classes.CartDetailsClear}>
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
