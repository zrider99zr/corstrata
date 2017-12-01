import React, { Component } from 'react'

class searchPatient extends Component {
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

    searchInstitution() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'getAccountType',
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

    render(){
        return (
            <div>
                <input type="text" name="sPatient" onInput={this.updateText.bind(this)} />
                <button onClick={this.submitForm.bind(this)}></button>
                <button onClick={this.searchInstitution.bind(this)}>Find Institution</button>
            </div>
        );
    };
}
export default searchPatient
