import React, { Component } from 'react';
import Users from './users/Users';
import './App.css';


// JSX funtime

class App extends Component {
  render() {
    // You can only render one ROOT tag
    return (
      <div>
        <Users title="USERS LIST"/>
      </div>
    );
  }
}

export default App;