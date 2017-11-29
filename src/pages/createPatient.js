import React, { Component } from 'react'

class createPatient extends Component {
    constructor() {
        super();
        this.state = {
            fName: "",
            lName: "",
        };
    }

    updateText(e) {
        if (e.target.name === "fName") {
            this.setState({ name: e.target.value });

        } else if (e.target.name === "lName") {
            this.setState({ address: e.target.value });

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
                request: 'createPatient',
                firstName: this.state.fName,
                lastName: this.state.lName,
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
                <form id="accountForm" >
                    <br />
                    <div className="row">
                        <input type="text" onInput={this.updateText.bind(this)} name="fname" placeholder="First Name" />First Name <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="lname" placeholder="Last Name" />Last Name <br />
                        
                    </div>
                    <button type="button" onClick={this.submitForm.bind(this)}>Create</button>
                </form>
            </div>
        );
    };
}
export default createPatient