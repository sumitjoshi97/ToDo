import React, { Component } from 'react';
import SubInput from './SubInput';
import SubList from './SubList';
import Remove from './Remove';
import Edit from './Edit';
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
            return <SubList key={index} task={item} removeSub={()=> this.removeSubItem(index)}/>
        });

        return (
            <li>
                <div className="taskList">
                    <span className="heading">
                    {this.props.task}
                    </span>
                   
                    
                    <Remove className="remove" remove={this.props.remove} />
                   {this.props.editting===true?<SubInput value={this.props.task} handleInput={this.props.handleChange} handleClick={this.props.onSave} />: null}
                    <br />
                    <ul>
                        {subList}
                    </ul>
                    <br />
                    
                    {this.state.showInput ? <SubInput value={this.subInput} handleInput={this.handleSubInput} handleClick={this.handleAddSub} /> : null}
                    <button className="add" onClick={this.onShow}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                </div>
            </li>
        );
    }
}

//onClick={this.handleEdit}}
					
export default List;
/*
 <input
						ref="editField"
						className="edit"
						value={this.state.editText}
						onBlur={this.handleSubmit}
						onChange={this.handleChange}
						/>
                   */