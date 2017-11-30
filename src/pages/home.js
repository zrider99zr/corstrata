import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styling/un.css'
import { Button, ButtonGroup } from 'react-bootstrap';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true,
        };
    }

    componentDidMount() {
        this.validateUser();
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

    render() {
        if (this.state.login === false) {
            return (<Redirect to={'/loginPage'} />)
        }

        return (
            <div id="containerb">
                 <label id= "Header">WELCOME USER </label>
                
                <Link  to='./'> <Button className = "testbutton">Find Patient </Button></Link> <br></br>
                <Link  to='./wagnerScaleTest'> <Button className = "testbutton">Create Account</Button></Link>
                     <br></br>
    
                </div>
                
                
        );
    };
}
export default Home;