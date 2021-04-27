import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    // on form submit
    handleSubmit(event) {
        event.preventDefault();

        let newItem = this.state.value;

        this.setState({
            todoItems: [...this.state.todoItems, newItem],
            value: ''
        })
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="item" 
                        placeholder="Write todo here"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;