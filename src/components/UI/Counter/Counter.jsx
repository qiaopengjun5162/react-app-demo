import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import CartContext from '../../../store/cartContext'
import classes from './Counter.module.css'

/*
    引入fontawesome
        1. 安装依赖
            - npm i --save @fortawesome/fontawesome-svg-core
            - npm i --save @fortawesome/free-solid-svg-icons
            - npm i --save @fortawesome/free-regular-svg-icons
            - npm i --save @fortawesome/free-brands-svg-icons
            - npm i --save @fortawesome/react-fontawesome@latest
            pnpm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons 
            @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome@latest
    
        2. 引入组件
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        
        3. 引入图标
            import { faPlus } from '@fortawesome/free-solid-svg-icons'

        4. 使用图标
            <FontAwesomeIcon icon={faPlus} />
 */

// 计数器的组件
const Counter = (props) => {
    const cartCtx = React.useContext(CartContext);

    // 添加购物车的函数
    const addToCartHandler = () => {
        // 调用父组件传递过来的函数
        // props.onAdd(props.meal);

        // 调用购物车上下文中的函数
        // cartCtx.addItem(props.meal);

        cartCtx.CartDataDispatch({
            type: 'ADD',
            meal: props.meal
        });
    };

    // 减少购物车的函数
    const removeFromCartHandler = () => {
        // 调用父组件传递过来的函数
        // props.onSub(props.meal);

        // 调用购物车上下文中的函数
        // cartCtx.removeItem(props.meal);

        cartCtx.CartDataDispatch({
            type: 'REMOVE',
            meal: props.meal
        })
    };

    // 返回计数器的组件
    return (
        <div className="Counter">
            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button className={classes.Sub} onClick={removeFromCartHandler}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.Count}>{props.meal.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.Add} onClick={addToCartHandler}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter
