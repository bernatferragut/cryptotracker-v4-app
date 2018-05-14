import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: " 1.this is a state text"
    }
  }
  // setState Method
  changeState = (e)=> {
    console.log('changeState has been clicked')
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="app">
        <input 
        type="text"
        onChange={this.changeState}
        />
        <h1>{this.state.text}</h1>
      </div>
    )
  }
}

export default App;