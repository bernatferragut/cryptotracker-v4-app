import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  // 1. State
  state = { };

  // 2. Methods

  // 3. Render Method
  render() {

    const flat = {
        "name": "Charm at the Steps of the Sacre Coeur/Montmartre",
        "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
        "price": 164,
        "priceCurrency": "EUR",
        "lat": 48.884211,
        "lng": 2.346890
    };  

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            <Flat flat={flat}/>
            <Flat flat={flat}/>
            <Flat flat={flat}/>         
            <Flat flat={flat}/>               
          </div>
        </div>
        <div className="map"></div>
      </div>
    );
  }
}
export default App;
