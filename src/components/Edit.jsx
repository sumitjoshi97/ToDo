import React from 'react';

const Edit = (props) => {
    return (
        <button onClick={props.edit}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
    );
}

export default Edit;