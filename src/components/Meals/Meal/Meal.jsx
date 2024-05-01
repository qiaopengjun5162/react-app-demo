import React from 'react'
import Counter from '../../UI/Counter/Counter'
import classes from './Meal.module.css'

// 食物组件
const Meal = () => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src="/img/meals/1.png" alt="汉堡包" />
            </div>
            <div>
                <h2 className={classes.Title}>汉堡包</h2>
                <p className={classes.Desc}>百分百纯牛肉，香甜可口美味十足</p>
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>12</span>
                    <Counter amount={1} />
                </div>
            </div>

        </div>
    )
}

export default Meal
