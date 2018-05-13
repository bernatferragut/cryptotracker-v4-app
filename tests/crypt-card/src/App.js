import React, { Component } from 'react';
import './App.css';
import CryptoCard from './components/cryptoCard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CryptoCard 
          name="Bitcoin" 
          symbol="BTC"/>
      </div>
    );
  }
}

export default App;
