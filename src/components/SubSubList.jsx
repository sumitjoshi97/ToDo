import React, { Component } from 'react';
import Remove from './Remove';
import Edit from './Edit';

class SubSubList extends Component {
    render() {
        return (
            <li>
                {this.props.task}

                <Remove remove={this.props.removeSubSub} />
            </li>
        )
    }
}

export default SubSubList;