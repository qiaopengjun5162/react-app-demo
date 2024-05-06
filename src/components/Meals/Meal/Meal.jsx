import React from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./Meal.module.css";

// 食物组件
const Meal = (props) => {
    return (
        <div className={classes.Meal}>
            <div className={classes.ImgBox}>
                <img src={props.meal.image} alt={props.meal.title} />
            </div>
            <div className={classes.DescBox}>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                {props.noDesc ? null : (
                    <p className={classes.Desc}>{props.meal.description}</p>
                )}
                <div className={classes.PriceWrapper}>
                    <span className={classes.Price}>{props.meal.price}</span>
                    <Counter meal={props.meal} />
                </div>
            </div>
        </div>
    );
};

export default Meal;
