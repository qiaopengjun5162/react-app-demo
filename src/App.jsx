import React, { useState } from "react";

import './App.css';

const App = () => {
    const [redBorder, setRedBorder] = useState(false);
    const pStyle = {
        color: "red",
        backgroundColor: "yellow",
        fontSize: "20px",
        border: redBorder ? "3px solid red" : "3px solid blue",
    };

    const handleClick = () => {
        setRedBorder(!redBorder);
    }

    return (
        <div>
            <h1 style={{ color: "blue", fontSize: "30px" }}>Hello World</h1>
            {/* <p style={pStyle}>我是一个段落</p> */}
            <p className={`p1 ${redBorder ? '' : 'blueBorder'}`}>我是一个段落</p>
            <button onClick={handleClick}>点我一下</button>
        </div>
    );
};

export default App;
