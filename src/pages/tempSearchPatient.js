import React, { Component } from 'react'

class tempSearchPatient extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
        };
    }

    updateText(e) {
        if (e.target.name === "sPatient") {
            this.setState({ name: e.target.value });

        }
    }

    submitForm() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'patientSearch',
                searchInput: this.state.name,
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

    render(){
        return (
            <div>
                <input type="text" name="sPatient" onInput={this.updateText.bind(this)} />
                <button onClick={this.submitForm.bind(this)}></button>
            </div>
        );
    };
}
export default tempSearchPatient