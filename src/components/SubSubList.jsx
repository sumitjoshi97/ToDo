import React from 'react';

import '../css/SubSubList.css';

const SubSubList = (props) => {
    return (
        <div class="subSubList">
            <div className="subSub">
                <span className="subSubTitle">
                    {props.task}
                </span>

                <i className="btn fa fa-trash-o" onClick={props.removeSubSub} />
            </div>
        </div>
    );
}

export default SubSubList;