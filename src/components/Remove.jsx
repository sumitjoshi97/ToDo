import React from 'react';
import '../css/Remove.css';
const Remove = (props) => {
    return (
        <button className="btn" onClick={props.remove}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
    );
}

export default Remove;