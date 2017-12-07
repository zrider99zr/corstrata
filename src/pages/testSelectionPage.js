import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'
import '../styling/style.css'

import { Button } from 'react-bootstrap';

class testSelectionPage extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,

        };
    }

    validateUser() {
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
                    this.setState({ loggedIn: true });

                } else if (res.status === 0) {
                    this.setState({ loggedIn: false });
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    componentDidMount() {
        if (sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === "") {
            this.setState({ loggedIn: false });
        } else {
            this.validateUser();
        }
    }

    render() {
        if (this.state.loggedIn === false) {
            return (<Redirect to={'/loginPage'} />)
        }

        return (
            <div id="containerb">
                 <label id= "Header">Which test do you wish to perform?</label>
                
                <Link  to='./'> <Button className = "testbutton">Pressure Wound </Button></Link> <br></br>
                <Link  to='./wagnerScaleTest'> <Button className = "testbutton">Wagner Scale Test </Button></Link>
                     <br></br>
                     <Link  to='/MNAtest'><Button className = "testbutton">Mini-Nutritional Assessment</Button> </Link>
                      <br></br> 
                      <Link to='./bates'> <Button className = "testbutton">Bates Jensen Wound Assessment</Button></Link>
                </div>
                
        );
    };
}
export default testSelectionPage