import React, { useState } from 'react';

const Form = (props) => {
    const [todoItem, setTodoItem] = useState('');

    // on form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // pass state up
        props.onAddItem(todoItem);
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