import React from 'react';

class Car extends React.Component {
    render(){
        return <h1> Hi, I am {this.props.color} a Car</h1>
    }
}

export default Car;