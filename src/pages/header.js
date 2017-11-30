import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styling/header.css';
import { Button } from 'react-bootstrap';
import {nav} from '../styleForm';
{ /* this will only be here while we are testing all the pages, after page testing is done it will be removed and navigation will only be done through the webpage */}
// The Header creates links that can be used to navigate between routes.
class header extends Component{
    constructor() {
        super();
        this.state = {
            logout: false,
        };
    }
    logout() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'validateJWT',
                token: sessionStorage.getItem("token"),
            })
        })
            .then((response) => response.json())
            .then((res) => {

                if (res.status === 1) {
                    this.setState({ logout:true });
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
                <Button onClick={this.logout} id="logout">LOGOUT</Button>
                <Link to='/nav'> <Button id="menu">MENU</Button> </Link>
            </header>
        );
    };
}
export default header;