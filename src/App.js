import React, { Component } from 'react';
import './App.css';
import Tickers from './components/tickers'

class App extends Component {
  // constructor
  // setState
  // render
  render()   {
    return (
      //APP
      <div className="app">
        <div className="header">
          <Tickers/>          
        </div>
        <div className="body"></div>
        <div className="footer"></div>    
      </div>
    )
  }
}

export default App;