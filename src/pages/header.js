import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styling/header.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import {navm} from '../styleForm';
import {slide as Menu} from 'react-burger-menu';
import Nav from './nav.js';
{ /* this will only be here while we are testing all the pages, after page testing is done it will be removed and navigation will only be done through the webpage */}
// The Header creates links that can be used to navigate between routes.
const header = () => (
  
    <header id="bodyf" >

  <button ><Nav/></button>
               
                
               
      
        
    </header>
);

            /*    if (res.status === 1) {
                    this.setState({ logout: true });
                    sessionStorage.setItem("token", null);
                    
                } else {
                    this.setState({ logout: false });
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    render() {
        if (this.state.logout === true ) {
            return (<Redirect to={'/loginPage'} />)
        }
        return (
            <header id="bodyf">
                <Button onClick={this.logout.bind(this)} id="logout">LOGOUT</Button>
                <Link to='/nav'> <Button id="menu">MENU</Button> </Link>
            </header>
        );
    };
}*/
export default header;