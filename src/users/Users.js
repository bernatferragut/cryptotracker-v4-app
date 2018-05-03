import React, { Component } from 'react';
import User from './User';

class Users extends Component{
    render(){
        return (
            <div >
                <h1>{this.props.title}</h1>
                <User >Bernat</User>
                <User age="30">LLorenc</User>
                <User age="40">Miquel</User>
                <User age="50">Elisenda</User>
            </div>
        );
    }
}

export default Users;