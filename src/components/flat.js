// FLAT COMPONENT
import React, { Component } from 'react'
import './flat.css'

class Flat extends Component {
  render() {

    const style = { backgroundImage:   `url('${this.props.flat.imageUrl}')` };
    const title = this.props.flat.price + this.props.flat.priceCurrency + " - " +  this.props.flat.name;
    
    return (
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">{title}</div>
      </div>
    )
  } 
}

export default Flat;
