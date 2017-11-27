import React, { Component } from 'react'
import '../styling/createAccount.css'

class createAccount extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            isClient:false,
            isAdmin: false,
            institution:"",
        };
    }

    updateText(e) {
        if (e.target.name == "email") {
            this.setState({ email: e.target.value });

        } else if (e.target.name == "fname"){
            this.setState({ fname: e.target.value });

        } else if (e.target.name == "lname") {
            this.setState({ lname: e.target.value });

        } else if (e.target.name == "institution") {
            this.setState({ institution: e.target.value });

        } else if (e.target.name == "password") {
            this.setState({ password: e.target.value });

        }
    }

    checkStatus(e) {
        if (e.target.checked == true) {
            if (e.target.name == "client") {
                this.setState({ isClient: true });
            } else if (e.target.name == "admin") {
                this.setState({ isAdmin: true });
            }
        } else{
            if (e.target.name == "client") {
                this.setState({ isClient: false });
            } else if (e.target.name == "admin") {
                this.setState({ isAdmin: false });
            }
        }
    }

    submitForm() {
        console.log(this.state);
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                request: 'register',
                email: this.state.email,
                firstName: this.state.fname,
                lastName: this.state.lname,
                password: this.state.password,
                isClient: this.state.isClient,
                isAdmin: this.state.isAdmin,
                institutionID: this.state.institution,
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
            <div>
            <form id="accountForm" action="#" method="POST" encType="multipart/form-data">
                <br />
                <div className="row">
                    <input type="text" onInput={this.updateText.bind(this)} name="email" placeholder="email@gmail.com" />Email <br />
                    <input type="text" onInput={this.updateText.bind(this)} name="fname" placeholder="First Name" />First Name <br />
                    <input type="text" onInput={this.updateText.bind(this)} name="lname" placeholder="Last Name" />Last Name <br />
                    <input type="password" onInput={this.updateText.bind(this)} name="password" placeholder="password" />Password <br />
                    <input type="checkbox" onClick={this.checkStatus.bind(this)} name="client" />is this account a client?(if no don't click)<br />
                    <input type="checkbox" onClick={this.checkStatus.bind(this)} name="admin" />is this account an admin?(if no don't click)<br />
                    <input type="text" onInput={this.updateText.bind(this)} name="institution" placeholder="Institution" />What is the name of the institution that you work for?<br />
                </div>
                {/* potentially swap this submit button out for an actual link button with a function to interface to the backend*/}
                <button type="button" onClick={this.submitForm.bind(this)}>Create</button>
            </form>
            </div>
        );
    };
}
export default createAccount