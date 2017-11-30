import React, { Component } from 'react';
import '../styling/resetPassword.css';

class resetPassword extends Component {
    constructor() {
        super();
        this.state = {
            oldPass: "",
            newPass: "",
            verifyPass: "",

        };
    }

    updateText(e) {
        if (e.target.name === "oldPass") {
            this.setState({ oldPass: e.target.value });

        } else if (e.target.name === "newPass") {
            this.setState({ newPass: e.target.value });

        } else if (e.target.name === "verifyPass") {
            this.setState({ verifyPass: e.target.value });

        }
    }

    submitForm() {
        console.log(this.state);
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'changePassword',
                oldPassword: this.state.oldPass,
                newPassword: this.state.newPass,
                token: sessionStorage.getItem("token"),
            })
        })
            .then((response) => response.json())
            .then((res) => {
                alert(res.message);
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="classContianer">
                    <label id="Header"> PASSWORD RESET </label>
                    
                        <form className="inputform">
                            <div>
                                <label className="label" id="advice"><b>Password must include a minimum of 8 characters.<br></br><br></br>
                                    And one or more of each of the following:</b>
                                    <br></br>
                                    <li> lower-case letter</li>
                                    <br></br>
                                    <li> upper-case letter</li>
                                    <br></br>

                                    <li> number</li>
                                    <br></br>
                                    <li> punctuation mark</li>
                                </label>
                            </div>
                            <div id="oldpassword">
                                <label className="label" id="input-oldpass"> Old Password: </label>
                                <input onInput={this.updateText.bind(this)} className="inputboxpassword" type="password" name="oldPass" id="input" />
                                <br></br>
                                <label className="label" id="input-newpass"> New Password: </label>
                                <input onInput={this.updateText.bind(this)} className="inputboxpassword" type="password" name="newPass" id="input" />
                                <br></br>
                                <label className="label" id="input-confirm">Confirm New Password: </label>
                                <input onInput={this.updateText.bind(this)} className="inputboxpassword" type="password" name="verifyPass" id="input" />
                                <button onClick={this.submitForm.bind(this)} id="changeButton" type="button" >Submit</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        );
    };
}
export default resetPassword