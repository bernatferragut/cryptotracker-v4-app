import React from 'react';

// using arrow functions instead of classes
const User = (props) => {
    let age = props.age? props.age : 'NA';
    if (props.children){
        return <div>Name: {props.children} | Age: {age}</div>
    } 
    return (
        <div>INSERT A VALID CHILDREN PLEASE</div>
    );
}

export default User;

