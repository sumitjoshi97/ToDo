import React, { Component } from 'react';

import SubInput from '../components/SubInput';
import SubList from './SubList';

import '../css/List.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showInput: false,
            subInput: '',
            subTasks: []
        }
    }

    onShow = () => {
        //const show = this.state;
        this.setState({
            showInput: this.state.showInput === false ? true : false
        });
    }

    handleSubInput = (e) => {
        this.setState({
            subInput: e.target.value
        });
    }
    handleAddSub = () => {
        const { subInput, subTasks } = this.state;
        this.setState({
            subTasks: [...subTasks, subInput],
            subInput: '',
            showInput: false
        });
    }

    removeSubItem = (index) => {
        this.setState({
            subTasks: this.state.subTasks.filter((x, i) => i !== index)
        });
    }

    render() {
        const subList = this.state.subTasks.map((item, index) => {
            return <SubList 
                key={index} 
                task={item} 
                removeSub={() => this.removeSubItem(index)} 
            />
        });

        return (

            <div className="taskList">
                <div className="title">
                    <span className="heading">
                        {this.props.task}
                    </span>

                    <i className="btn fa fa-trash-o" onClick={this.props.remove} />
                </div>
                <br />
                <ul>
                    {subList}
                </ul>
                <br />

                {this.state.showInput ? <SubInput value={this.subInput} handleInput={this.handleSubInput} handleClick={this.handleAddSub} /> : null}
                <i className="fa fa-plus-circle add" onClick={this.onShow} aria-hidden="true"></i>

            </div>
        );
    }
}

export default List;
