import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Write todo here"
                    />
                </form>
            </div>
        )
    }
}

export default Form;