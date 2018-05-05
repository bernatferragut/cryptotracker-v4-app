import React, { Component } from 'react'


// TEST COMPONENT
class TestComponent extends Component {
    // STATES
    state = {
        library: "REACT"
    }
    // RENDER FUNCTION
    render(){

        console.log('this is a test component');

        return(
            <h1> {this.props.name} THIS IS A TEST { this.state.library } COMPONENT !!!! </h1>
        );    
    } 
}

export default TestComponent;
