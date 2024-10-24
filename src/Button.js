import React from 'react';

function Button (props){
    const changeColor = () => {
        props.setColor(props.color === 'blue' ? 'red' : 'blue');
    };
    return (
        <button onClick={changeColor} style={{backgroundColor:props.color}}>Click Me</button>
    )
}

export default Button;