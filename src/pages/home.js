import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styling/home.css'

class Home extends Component {
    render() {
        return (
            <div className='classContainer'>
                <h1>Welcome to the Corstrata Home Page!</h1>
                <Link className='button' to='./searchPatient'>Find Patient</Link>
                <Link className='button' to='./createAccount'>Create Account</Link>
            </div>
        );
    };
}
export default Home;