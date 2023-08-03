import React, { Component } from 'react';
import './App.css';
import Add from './Add';

class App extends Component {
  render() {
    return (
      <div>
        Hello
        <Msg />
        <Add />
      </div>
    );
  }
}

class Msg extends Component {
  render() {
    return (
      <p>This is the Msg --{'>'} Class Component</p>
    );
  }
}

export default App;
