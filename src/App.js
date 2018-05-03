import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // 1. State
  state = {
    name: "BERNAT",
    count:0,
    addOne : () => {
      this.setState({ count: this.state.count+1 });
      console.log('ONE ADDED!!!');
    }
  }
  // 2. Render Method
  render() {
    return (
      <div className="App">
        <h1>GOOD MORNING {this.state.name}</h1>
        <button onClick={this.state.addOne}> ADD ONE </button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
export default App;
