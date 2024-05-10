import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('')

    // 通过 useEffect 实现过滤
    useEffect(() => {
        props.onFilter(keyword)

    }, [keyword, props])

    const keywordHandler = (e) => {
        // props.onFilter(e.target.value)
        setKeyword(e.target.value.trim())
    }



    return (
        <div className={classes.FilterMeals} >
            <div className={classes.InputOuter} >
                <input
                    value={keyword}
                    onChange={keywordHandler}
                    className={classes.SearchInput} type="text" placeholder="请输入关键字" />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}
                />
            </div>

        </div>
    )
}

export default FilterMeals
