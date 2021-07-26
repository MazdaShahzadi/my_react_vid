import React, { useState} from 'react'
import './CountButton.css'

const CountButton = (props) => {
    
    
    const [currentCount, setCurrentCount] = useState(0)
    

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    const divStyle = {
        color: "blue",
        border: "1px solid black",
        borderRadius: "10px", // use camel case for xml for two words vairable name.
    }
    
    const buttonStyles = {
        background: props.buttonColor,
        
    }

    return (
    <div style={divStyle}>
        <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
       <div className={'count-display'}>{currentCount}</div>
    </div>
    )
}

export default CountButton