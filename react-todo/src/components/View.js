import React from 'react';

const View = (props) => {
        const todoStyle= {
            listStyleType: "none",
        }

        // for deleting item, and passing
        // data upward
        const onClickHandler = (id) => {
            props.onRemoveItem(id);
        }
        return (
            <div>
                <h3>View Todos</h3>
                <ul>
                    {props.listTodos.map(todoList => 
                        <li key={todoList.id} style={todoStyle}>{todoList.task}<button onClick={() => onClickHandler(todoList.id)}>Remove</button></li>
                    )}
                </ul>
            </div>
        );
}

export default View;