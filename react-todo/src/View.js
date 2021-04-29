import React from 'react';

const View = (props) => {
        const todoStyle= {
            listStyleType: "none",
        }
        return (
            <div>
                <h3>View Todos</h3>
                <ul>
                    <li style={todoStyle}>{props.listTodos}<button>Remove</button></li>
                </ul>
            </div>
        );
}

export default View;