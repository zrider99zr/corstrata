import React, { Component } from 'react';
import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Button,ButtonGroup } from 'react-bootstrap';

class nav extends Component {
    render() {
        return (
            <div>
                <li><Link to='/createPage'>Search Admin</Link></li>
                <li><Link to='/nav'>Nav Bar</Link></li>
                <li><Link to='/bates'>bates</Link></li>
                <li><Link to='/linegraph'>linegraph</Link></li>
                <li><Link to='/createInstitution'>Create Institution</Link></li>
                <li><Link to='/createPatient'>Create Patient</Link></li>
                <li><Link to='/tempSearchPatient'>search Institution</Link></li>
                <li><Link to='/searchPatient'> Search Patient</Link></li>
                <li><Link to='/patientpage'>Patient Home</Link></li>
                <li><Link to='/pressureWoundTest2'>Pressure Wound Test</Link></li>
            </div>
  

        );
    };
}
export default nav;