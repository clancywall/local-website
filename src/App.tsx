import React from 'react';
import logo from './logo.svg';
import './App.css';
import DateTimeRangeComp from './components/DateTimeRangeComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DateTimeRangeComp />
      </header>
    </div>
  );
}

export default App;
