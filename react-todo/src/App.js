import React, { useState } from 'react';

// css
import './App.css';

// components
import Form from './Form';
import View from './View';

function App() {
  const [item, setItem] = useState('');


  // pass state down
  const addItemHandler = (item) => {
    console.log('in App.js')
    console.log(item);
    setItem(item);
  }

  return (
    <div className="App">
      <header>
        <h1>React - Todo</h1>
        <Form onAddItem={addItemHandler}/>

        <View listTodos={item}/>
      </header>
    </div>
  );
}

export default App;
