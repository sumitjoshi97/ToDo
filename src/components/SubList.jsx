import React, {Component} from 'react';
import SubInput from './SubInput';
import SubSubList from './SubSubList';
import Remove from './Remove';
import '../css/SubList.css';

class SubList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubInput: false,
            showSubEdit: false,
            subSubInput: '',
            subSubTasks: []
        }
    }

    onShow = () => {
        //const show = this.state;
        this.setState({
            showSubInput: this.state.showSubInput === false ? true : false
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
            showSubInput:false
        });
    }
    removeSubSubItem = (index) => {
        this.setState({
            subSubTasks: this.state.subSubTasks.filter((x, i) => i !== index)
        });

    }
    

    handleEditSubSub = (index) => {
        this.setState({
            showSubEdit: true
        });
           <SubInput value={this.state.subSubInput} />

    }
    render() {
        const subSubList = this.state.subSubTasks.map((item, index) => {
            return <SubSubList key={index} task={item} removeSubSub={() => this.removeSubSubItem(index)} /> 
        });
        
        return (
            <li className="SubList">
            <div className="SubTask">
                {this.props.task}
                 <button style={{backgroundColor:'#8FE48A'}} onClick={this.onShow}><i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                 <Remove remove={this.props.removeSub} />
                </div>
                <br/>
                <ul className="subSubList">
                    {subSubList}
                </ul>
                <br/>
               
                {this.state.showSubInput ? <SubInput input={this.subSubInput} handleInput={this.handleSubSubInput} handleClick={this.handleAddSubSub}/> : null}
            </li>
        );
    }
}


export default SubList;