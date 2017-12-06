import React, { Component } from 'react';
import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Button,ButtonGroup } from 'react-bootstrap';

class nav extends Component {
    render() {
        return (
        
  <ButtonGroup vertical >
  <Link to='./'><Button>HOME</Button></Link>
  <Link to='./wagnerScaleTest'><Button >CHANGE PASSWORD</Button></Link>
  
  <Link to='./createPatient'><Button >Create PATIENT</Button></Link>

  <Link to='./wagnerScaleTest'><Button > LOGOUT</Button></Link>
</ButtonGroup>


{/*<<<<<<< HEAD
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
                    
                    
                </Menu>
            </div>
=======
>>>>>>> 34f0e87a16694a18e0f80b604e45c55825ef3e34*/}
        );
    };
}
export default nav;