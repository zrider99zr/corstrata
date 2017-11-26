import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link, Redirect, Route } from 'react-router-dom'
//import { PostData } from './postData'

import {
    Container, InputBox, HelpmMessage, LoginForm, SubButton, InputGroup,
    AuthPage, WelcomeParagraph, InputField, StackedInputs, SubmitButton
} from '../styleForm';

class loginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: props.error,
            info: props.info,
            password: "",
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
        /*PostData("login", this.state).then((results) => {
            let responseJSON = results;
            console.log(responseJSON);
        });*/
        fetch('165.227.191.245', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userData.email,
                passwo: userData.password,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                alert(res.message);
            })
            .catch((error) => {
                alert(error.message);
            })
            .done();
    }

    render() {

        return (
            <AuthPage subtitle="Navigating to Home Page">
                <StackedInputs>

                    <InputField
                        type="email"
                        name="uname"
                        id="username"
                        value={this.state.email}
                        placeholder="email@gmail.com"
                        onInput={this.setEmail.bind(this)}
                        required
                        autoFocus
                    />

                    <InputGroup>
                        <InputField
                            type="password"
                            name="password"
                            placeholder="Password"
                            onInput={this.setPass.bind(this)}
                            required
                        />

                        <SubmitButton onClick={this.checkInput.bind(this)}>
                        </SubmitButton>

                    </InputGroup>
                </StackedInputs>

                <HelpmMessage>Corstra Navigation Page</HelpmMessage>
            </AuthPage>
        );
    };
}
export default loginPage;