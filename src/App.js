import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // 1. Constructor Method + State
  constructor(){
    super();
    this.state = {
      name: "BERNAT",
      count:0
      }
  }
  // 2. Extra Methods
  addOne = () => {
    this.setState({ count: this.state.count+1 });
  }
  // 3. Render Method
  render() {
    return (
      <div className="App">
        <h1>GOOD MORNING {this.state.name}</h1>
        <button onClick={this.addOne}> ADD ONE </button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}
export default App;