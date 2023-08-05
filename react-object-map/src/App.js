import React, { Component } from 'react';
import cases_time_series from './cases_time_series.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Cases Time Series
        <DataTable cases_time_series={cases_time_series} />
      </div>
    );
  }
}

const DataTable = ({ cases_time_series }) => {
  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Date</th>
          <th>Daily Confirmed</th>
          <th>Daily Recovered</th>
          <th>Daily Decreased</th>
          <th>Total Confirmed</th>
        </tr>
      </thead>
      <tbody>
        {cases_time_series.map((data) => (
          <tr>
            <td>{data.date}</td>
            <td>{data.dailyconfirmed}</td>
            <td>{data.dailyrecovered}</td>
            <td>{data.dailydeceased}</td>
            <td>{data.totalconfirmed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
