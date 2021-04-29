import React, { useState } from 'react';
import View from './View';

const Form = () => {
    const [todoItem, setTodoItem] = useState('');
    const [submitItem, setSubmitItem] = useState('');

    // on form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitItem(todoItem);

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

                <View listTodos={submitItem}/>
            </div>
        );
}

export default Form;