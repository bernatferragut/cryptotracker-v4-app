import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  // 1. State
  state = {
    flats : []
  }

  // 2. Fetching
  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
    fetch(url) // AJAX
    .then(response=> response.json())
    .then(data => {
      console.log(data);
      this.setState({
        flats: data
      })
    })
  }

  // 3. Render Method
  render() {

  // Map Info
  const center = {
    lat: 48.856,
    lng: 2.3522
  }

    return (
      <div className="app">
        <div className="main">
          <div className="search"></div>
          <div className="flats">
            {this.state.flats.map( (flat) => <Flat flat={flat} /> )}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={11}
          >
          {this.state.flats.map( (flat) => <Marker lat={flat.lat} lng={flat.lng} text={flat.price} /> )}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
export default App;
