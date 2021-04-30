import React, { useState } from 'react';

// DB TODO
import DUMMY_TODOS from './todo_DB';

// css
import './App.css';

// components
import Form from './Form';
import View from './View';

function App() {
  const [items, setItems] = useState(DUMMY_TODOS);


  // pass state down
  const addItemHandler = (item) => {
    setItems(prevItems => {
      return [...prevItems, item]
    });
  }

  return (
    <div className="App">
      <header>
        <h1>React - Todo</h1>
        <Form onAddItem={addItemHandler}/>

        <View listTodos={items}/>
      </header>
    </div>
  );
}

export default App;
