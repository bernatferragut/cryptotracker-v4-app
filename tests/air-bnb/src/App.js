import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Flat from './components/flat';
import Marker from './components/marker';

class App extends Component {
  // 1. State
  state = {
    flats : [],
    allFlats: [],
    selectedFlat:null,
    search: ""
  }

  // 2. Fetching
  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
    fetch(url) // AJAX
    .then(response=> response.json())
    .then(data => {
      // console.log(data);
      this.setState({
        flats: data,
        allFlats: data
      })
    })
  }

  // 2.5. Methods
  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat : flat
    });
  }

  handleSearch = (e) => {
    // console.log(e);
    this.setState({
      search: e.target.value,
      flats: this.state.allFlats.filter(flat => new RegExp(e.target.value, "i").exec(flat.name))
    })
  }

  // 3. Render Method
  render() {

  // Map Info
  let center = {
    lat: 48.856,
    lng: 2.3522
  }

  if (this.state.selectedFlat) {
    center = {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    }
  }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.input}
              onChange={this.handleSearch}
            />
          </div>
          <div className="flats">
            {this.state.flats.map( (flat) => <Flat 
              key={flat.name} 
              flat={flat} 
              selectFlat = {this.selectFlat}
               /> )}
          </div>x
        </div>
        <div className="map">
          <GoogleMapReact center={center} zoom={13}>
          {this.state.flats.map((flat) => <Marker 
          key={flat.name} 
          lat={flat.lat} 
          lng={flat.lng} 
          text={flat.price +' '+flat.priceCurrency}
          selected = {flat === this.state.selectedFlat}
          /> )}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}
export default App;
