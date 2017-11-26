import React, { Component } from 'react'

class response extends Component {
    render(){
        return (
            <h1>{this.props.infoText} {this.props.info}</h1>
        );
    };
}
export default response