import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import classes from './FilterMeals.module.css'

const FilterMeals = () => {
    return (
        <div className={classes.FilterMeals} >
            <div className={classes.InputOuter} >
                <input className={classes.SearchInput} type="text" placeholder="请输入关键字" />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}
                />
            </div>

        </div>
    )
}

export default FilterMeals
