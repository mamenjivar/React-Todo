import React, { useState } from 'react';

// DB TODO
import DUMMY_TODOS from './todo_DB';

// css
import './App.css';

// components
import Form from './components/Form';
import View from './components/View';

function App() {
  const [items, setItems] = useState(DUMMY_TODOS);


  // pass state down
  const addItemHandler = (item) => {
    setItems(prevItems => {
      return [...prevItems, item]
    });
  }

  // remove item
  const removeItemHandler = (removeItem) => {
    console.log("REMOVE ITEM CALLED: " + console.log(removeItem))
    const newList = items.filter(fil => fil.id !== removeItem)
    setItems(newList);
  }

  return (
    <div className="App">
      <header>
        <h1>React - Todo</h1>
        <Form onAddItem={addItemHandler} />

        <View listTodos={items} onRemoveItem={removeItemHandler}/>
      </header>
    </div>
  );
}

export default App;
