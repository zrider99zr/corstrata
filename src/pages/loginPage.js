import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import { Link, Redirect } from 'react-router-dom'

//imorts buttons and other assets from styleForm.js
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

    //updates state
    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    //updates state 
    setPass(e) {
        this.setState({ password: e.target.value });
    }

    checkInput(e) {
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
                if (res.status === 1) {
                    sessionStorage.setItem("token", res.token);
                    this.setState({ login: true });
                } else {
                    sessionStorage.setItem("token","");
                }
            })
            .catch((error) => {
                alert(error.message);
            }); 
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

                <HelpmMessage>Corstrata Navigation Page</HelpmMessage>
            </AuthPage>
        );
    };
}
export default loginPage;