import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link, Redirect } from 'react-router-dom'

//import styled from 'styled-components';

import {
    HelpmMessage, InputGroup,
    AuthPage, InputField, StackedInputs, SubmitButton
} from '../styleForm';

class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: props.error,
            info: props.info,
            password: "",
            login: false,
        };
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setPass(e) {
        this.setState({ password: e.target.value });
    }

    checkInput(e) {
        //loggin in and passing it state, will need to trim or extend the method to show more/less state variables

        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'login',
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                sessionStorage.setItem("token", res.token);

                if (res.status===1) {
                    this.setState({ login: true });
                }
            })
            .catch((error) => {
                alert(error.message);
<<<<<<< HEAD
            });
=======
            })
>>>>>>> f6b397a378b220b995865dbed8006002e4afe902
            
    }

    render() {
        if (this.state.login) {
            return (<Redirect to={'/'} />)
        }

        return ( 
            <AuthPage subtitle="Welcome Please Sign in">
                <StackedInputs>

                    <InputField 
                        type="email"
                        name="uname"
                        id="username"
                        value={this.state.email}
                        onInput={this.setEmail.bind(this)}
                        placeholder="User Name"
                        required
                        autoFocus
                    />
                    <InputGroup>
                        <InputField
                            type="password"
                            name="password"
                            onInput={this.setPass.bind(this)}
                            placeholder="Password"
                            required
                        />
                        <SubmitButton style={{ marginTop: "0px" }}
                            onClick={this.checkInput.bind(this)}>
                            <i className="fa fa-sign-in fa-lg" />
                            <Link to='./'> </Link>
                        </SubmitButton>

                    </InputGroup>
                </StackedInputs>

                <HelpmMessage>Corstra Navigation Page</HelpmMessage>
            </AuthPage>
        );
    };
}
export default loginPage;