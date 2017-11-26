import React, { Component } from 'react'
import { Link, Redirect, Route, withRouter } from 'react-router-dom'
import '../styling/home.css'

class testSelectionPage extends Component {
    constructor() {
        super();
        this.state = {
            redirectToReferrer: false,
        };
    }

    changePage() {
        const redirect = true;
        this.setState({ redirectToReferrer : true });
    }

    render() {

        if (this.state.redirectToReferrer == true) {
            return (
                <Redirect to="./" />
                )
        }

        return (
            <div className="classContainer">
                <label>Which test do you wish to perform?</label>
                    <Link className='button' to='./'>Pressure Wound Test</Link>
                    <Link className='button' to='./wagnerScaleTest'>Wagner Scale Test</Link>
                    <Link className='button' to='./MNAtest'>Mini-Nutritional Assessment</Link>
                    <button onClick={this.changePage.bind(this)} >Mini-Nutritional Assessment</button>
            </div>
        );
    };
}
export default testSelectionPage