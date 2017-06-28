import React from 'react';
import '../css/Input.css';

const Input = (props) => {
    return (
        <div id="input">
            <input 
                type="text" 
                placeholder={props.placeholder} 
                value={props.input} 
                onChange={props.handleInput} 
            />
            <button id="btn" onClick={props.handleClick}>Add</button>
        </div>
    );
}

export default Input;