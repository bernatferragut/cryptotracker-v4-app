import React, { Component } from 'react';
import './App.css';
import TestComponent from './components/testComponent';

class App extends Component {
  // 1. State
  state = { };

  // 2. Methods

  // 3. Render Method
  render() {
    return (
      <div className="App">
        <TestComponent name="Bernat: "/>
      </div>
    );
  }
}
export default App;
