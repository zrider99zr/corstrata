import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class createPatient extends Component {
    constructor() {
        super();
        this.state = {
            fName: "",
            lName: "",
            loggedIn: false,
        };
    }

    //when there is input in the inputbox updates state 
    updateText(e) {
        if (e.target.name === "fName") {
            this.setState({ fName: e.target.value });

        } else if (e.target.name === "lName") {
            this.setState({ lName: e.target.value });

        } 
    }

    //sends the user input to the backend
    submitForm() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'createPatient',
                firstName: this.state.fName,
                lastName: this.state.lName,
                token: sessionStorage.getItem("token"),
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

    //validates user && jwt on the backend
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

    //called on page load
    componentDidMount() {
        console.log(sessionStorage.getItem("token"));
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
            <div>
                <form id="accountForm" >
                    <br />
                    <div className="row">
                        <input type="text" onInput={this.updateText.bind(this)} name="fName" placeholder="First Name" />First Name <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="lName" placeholder="Last Name" />Last Name <br />
                    </div>
                    <button type="button" onClick={this.submitForm.bind(this)}>Create</button>
                </form>
            </div>
        );
    };
}
export default createPatient