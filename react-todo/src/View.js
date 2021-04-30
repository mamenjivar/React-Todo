import React from 'react';

const View = (props) => {
        const todoStyle= {
            listStyleType: "none",
        }
        return (
            <div>
                <h3>View Todos</h3>
                <ul>
                    {props.listTodos.map(todoList => 
                        <li key={todoList.id} style={todoStyle}>{todoList.task}</li>
                    )}
                </ul>
            </div>
        );
}

export default View;