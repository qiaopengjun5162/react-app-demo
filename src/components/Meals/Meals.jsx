import React from 'react'
import Meal from './Meal/Meal'
import classes from './Meals.module.css'

// 食物列表组件
const Meals = (props) => {
    return (
        <div className={classes.Meals}>
            {props.mealsData.map(meal =>
                <Meal
                    key={meal.id}
                    meal={meal}
                />)}
        </div>
    )
}

export default Meals
