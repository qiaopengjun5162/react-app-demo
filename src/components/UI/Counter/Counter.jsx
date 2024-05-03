import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
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
    return (
        <div className="Counter">
            {
                (props.amount && props.amount !== 0) ? (
                    <>
                        <button className={classes.Sub}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.Count}>{props.amount}</span>
                    </>
                ) : null
            }
            <button className={classes.Add}>
                {/* <span>+</span> */}
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter
