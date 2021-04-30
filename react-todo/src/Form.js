import React, { useState } from 'react';

const Form = (props) => {
    const [todoItem, setTodoItem] = useState('');

    // on form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        const todoObject = {
            task: todoItem,
            id: Math.random()
        }

        // pass state up
        props.onAddItem(todoObject);
        setTodoItem('');
    }

    const handleChange = (event) => {
        setTodoItem(event.target.value);
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="item" 
                        placeholder="Write todo here"
                        value={todoItem}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
}

export default Form;