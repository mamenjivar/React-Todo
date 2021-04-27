import React, { Component } from 'react';

class View extends Component {
    render() {
        return (
            <div>
                <h3>This is View component</h3>
                {this.props.listTodos.map((list) => {
                    return <li>{list}</li>
                })}
            </div>
        )
    }
}

export default View;