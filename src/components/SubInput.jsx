import React from 'react';
import '../css/SubInput.css';

const SubInput = (props) => {
    return (
        <div id="subInput">
            <input type="text" placeholder={props.placeholder} value={props.input} onChange={props.handleInput} />
            <button id="btn" onClick={props.handleClick}><i className="fa fa-check" aria-hidden="true"></i></button>
        </div>
    );
}

export default SubInput;