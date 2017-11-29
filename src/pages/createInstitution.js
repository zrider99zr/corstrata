import React, { Component } from 'react'

class createInstitution extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            address: "",
            state: "",
            city: "",
            zCode: "",
            pNumber: "",
        };
    }

    updateText(e) {
        if (e.target.name === "name") {
            this.setState({ name: e.target.value });

        } else if (e.target.name === "address") {
            this.setState({ address: e.target.value });

        } else if (e.target.name === "state") {
            this.setState({ state: e.target.value });

        } else if (e.target.name === "city") {
            this.setState({ city: e.target.value });

        } else if (e.target.name === "zCode") {
            this.setState({ zCode: e.target.value });

        } else if (e.target.name === "number") {
            this.setState({ pNumber: e.target.value });

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
                request: 'createInstitution',
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zipCode: this.state.zCode,
                phoneNumber: this.state.pNumber,
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
                <form id="accountForm">
                    <br />
                    <div className="row">
                        <input type="text" onInput={this.updateText.bind(this)} name="name" placeholder="email@gmail.com" />Name <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="address" placeholder="First Name" />Address <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="state" placeholder="state" />State <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="city" placeholder="city" />City <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="zCode" placeholder="Zip Code" />Zip Code <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="number" placeholder="Phone Number" />Zip Code <br />
                        <button type="button" onClick={this.submitForm.bind(this)}>Submit</button>
                    </div>
                </form>
            </div>
        );
    };
}
export default createInstitution