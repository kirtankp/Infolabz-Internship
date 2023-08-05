import React, { Component } from 'react';
import spacecrafts from './spacecrafts.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        ISRO Spacecrafts
        <CraftTable s={spacecrafts}/>
      </div>
    );
  }
}

const CraftTable = ({s}) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {s.map((crafts) => (
          <tr>
            <td>{crafts.id}</td>
            <td>{crafts.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default App;
