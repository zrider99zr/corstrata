import React, { Component } from 'react';
import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Button,ButtonGroup } from 'react-bootstrap';

class nav extends Component {
    render() {
        return (
         <div >
  <ButtonGroup vertical>
  <Button>FIND PATIENT</Button>
  <Button>LOGOUT</Button>
  <Button>HOME PAGE</Button>
  
</ButtonGroup>
  </div>
        );
    };
}
export default nav;