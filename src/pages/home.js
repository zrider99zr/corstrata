import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styling/home.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") != null) {
            this.validateUser();
        }else{
            this.setState({ loggedIn: false });
        }
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
            <div className='classContainer' >
                <h1>Welcome Whoever to the Corstrata Website!</h1>
                <Link className='button' to='./searchPatient'>Find Patient</Link>
                <Link className='button' to='./createAccount'>Create Account</Link>
            </div>
        );
    };
}
export default Home;