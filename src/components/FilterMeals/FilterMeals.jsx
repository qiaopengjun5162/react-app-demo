import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import classes from './FilterMeals.module.css'

const FilterMeals = (props) => {
    const [keyword, setKeyword] = useState('')

    // 通过 useEffect 实现过滤
    // useEffect(() => {
    //     props.onFilter(keyword)

    // }, [keyword, props])

    // 通过 useEffect 实现过滤
    useEffect(() => {
        // 降低数据过滤的次数，提高用户体验
        // 用户输入完成后再过滤，用户输入过程中不进行过滤
        // 当用户输入完成1秒后，再进行过滤
        const timer = setTimeout(() => {
            props.onFilter(keyword)
        }, 1000)

        // 清除定时器
        return () => {
            clearTimeout(timer)
        }
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
