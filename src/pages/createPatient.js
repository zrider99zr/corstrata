import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
class createPatient extends Component {
    constructor() {
        super();
        this.state = {
            fName: "",
            lName: "",
            patientCreated: false,
        };
    }

    updateText(e) {
        if (e.target.name === "fName") {
            this.setState({ fName: e.target.value });
        } else if (e.target.name === "lName") {
            this.setState({ lName: e.target.value });

        } 
    }

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
                if(res.status===1){
                alert(res.message);
                this.setState({patientCreated: true});
                }else{
                    alert("Test Creation failed");
                    console.log(res.status);
                    this.setState({patientCreated: false});
                }
            })
            .catch((error) => {
                alert(error.message);
                this.setState({patientCreated: false});
            })
            .done();
    }

    render() {
        if(this.state.patientCreated === true){
                return (<Redirect to={'/'} />)
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