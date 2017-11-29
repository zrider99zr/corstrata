import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/header.css';
import { Button } from 'react-bootstrap';
import {nav} from '../styleForm';
{ /* this will only be here while we are testing all the pages, after page testing is done it will be removed and navigation will only be done through the webpage */}
// The Header creates links that can be used to navigate between routes.
const header = () => (
    <header id="bodyf">  
        <Link to='/loginPage'> <Button id="logout">LOGOUT</Button> </Link>
        <Link to='/nav'> <Button id="menu">MENU</Button> </Link>
    </header>
);
export default header;