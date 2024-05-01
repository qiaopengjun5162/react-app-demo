import React from 'react'
import classes from './Counter.module.css'

// 计数器的组件
const Counter = (props) => {
    return (
        <div className="Counter">
            {
                (props.amount && props.amount !== 0) ? (
                    <>
                        <button className={classes.Sub}>
                            <span>-</span>
                        </button>
                        <span className={classes.Count}>{props.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.Add}>
                <span>+</span>
            </button>
        </div>
    )
}

export default Counter
