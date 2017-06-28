import React from 'react';
import '../css/SubInput.css';

const SubInput = (props) => {
    return (
        <div id="subInput">
            <input 
                type="text" 
                placeholder={props.placeholder} 
                value={props.input} 
                onChange={props.handleInput} 
            />
            
            <i className="subAdd fa fa-check" onClick={props.handleClick} aria-hidden="true"></i>
        </div>
    );
}

export default SubInput;