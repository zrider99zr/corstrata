import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styling/home.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            login: false,
        };
    }

    componentWillMount() {
        console.log(sessionStorage.getItem("token"));
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
                    this.setState({ login: true });
                }
            })
            .catch((error) => {
                this.setState({ login: false });
                alert(error.message);
            })
            .done();
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