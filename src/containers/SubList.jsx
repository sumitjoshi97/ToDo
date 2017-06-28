import React, { Component } from 'react';

import SubInput from '../components/SubInput';
import SubSubList from '../components/SubSubList';

import '../css/SubList.css';

class SubList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubInput: false,
            subSubInput: '',
            subSubTasks: []
        }
    }

    onShow = () => {
        this.setState({
            showSubInput: !this.state.showSubInput
        });
    }

    handleSubSubInput = (e) => {
        this.setState({
            subSubInput: e.target.value
        });
    }

    handleAddSubSub = () => {
        const { subSubInput, subSubTasks } = this.state;
        this.setState({
            subSubTasks: [...subSubTasks, subSubInput],
            subSubInput: '',
            showSubInput: false
        });
    }

    removeSubSubItem = (index) => {
        this.setState({
            subSubTasks: this.state.subSubTasks.filter((x, i) => i !== index)
        });

    }

    render() {
        const subSubList = this.state.subSubTasks.map((item, index) => {
            return <SubSubList 
                key={index} 
                task={item} 
                removeSubSub={() => this.removeSubSubItem(index)} 
            />
        });

        return (
            <div className="SubList">
                <div className="SubTask">
                    <span className="heading">
                        {this.props.task}
                    </span>
                    
                    <i className="btn fa fa-plus-circle" onClick={this.onShow}></i>
                  
                    <i className="btn fa fa-trash-o" onClick={this.props.removeSub}></i>
                  
                </div>
              
                <br />
              
                <ul className="subSubList">
                    {subSubList}
                </ul>
                <br />

                {this.state.showSubInput ? <SubInput input={this.subSubInput} handleInput={this.handleSubSubInput} handleClick={this.handleAddSubSub} /> : null}
            </div>
        );
    }
}

export default SubList;