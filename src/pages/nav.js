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


        );
    };
}
export default nav;