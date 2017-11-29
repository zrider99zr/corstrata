import React, { Component } from 'react';
import nav from './nav'
import '../styling/splitWindow.css'

class splitWindow extends Component {
    render() {
        return (
            <div id="main">
                <div id="left">
                    <nav />
                </div>
                <div id="right">
                    <nav />
                </div>
            </div>
        );
    };
}
export default splitWindow