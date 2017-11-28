import React, { Component } from 'react'
import Response from './response'

class responseLabel extends Component {

    handleChange(e) {
        const input = e.target.value;
        this.props.changeInput(input);


    }

    render() {
        
        return (
            <div>
                <Response input={this.props.input}  />
                <input onChange={this.handleChange.bind(this)} value={this.props.title} input={this.props.input} />


            </div>
        );
    };
}
export default responseLabel