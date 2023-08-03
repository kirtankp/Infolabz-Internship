import React from 'react';
import './App.css';
import Add from './Add';

function App() {
  return (
    <div>
      Hello
      <Msg />
      <Add />
    </div>
  );
}

const Msg = () => {
  return (
    <p>
      This is the Msg --{'>'} Functional Component
    </p>
  )
}

export default App;
