import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // constructor
  // setState
  // render
  render()   {
    console.log('rendering...')
    return (
      //APP
      <div className="app">
        <div className="header"></div>
        <div className="body"></div>
        <div className="footer"></div>    
      </div>
    )
  }
}

export default App;