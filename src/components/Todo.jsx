import React, { Component } from 'react';
import SubInput from './SubInput';
import Input from './Input';
import List from './List';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTask: false,
            inputValue: '',
            items: []
        }
    }
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }
    handleClick = () => {
        const { inputValue, items } = this.state;
        this.setState({
            items: [...items, inputValue],
            inputValue: ''
        });
    }
    removeItem = (index) => {
        this.setState({
            items: this.state.items.filter((x, i) => i !== index)
        });

    }
    
    render() {
        const { inputValue, items } = this.state;

        let list = items.map((item, index) => {
            return <List key={index} task={item} remove={() => this.removeItem(index)} />
        });

        return (
            <div>
                <Input
                    input={inputValue}
                    handleInput={this.handleChange}
                    handleClick={this.handleClick}
                    placeholder="Add a new Task"
                />
                <div className="container">
                    <ul>
                        {list}
                    </ul>
                </div>

            </div>
        );
    }
};
export default Todo;