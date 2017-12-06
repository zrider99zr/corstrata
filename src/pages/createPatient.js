import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import '../styling/style.css'

class createPatient extends Component {
    constructor() {
        super();
        this.state = {
            fName: "",
            lName: "",
            loggedIn: false,
            patientCreated: false,
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
        if(this.state.fName!= "" && this.state.lName != ""){
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
               // alert(res.message);
                this.setState({patientCreated: true});
                }/*else{
                    alert("Test Creation failed");
                    console.log(res.status);
                    this.setState({patientCreated: false});*
                }*/
            })
            .catch((error) => {
                alert(error.message);
                this.setState({patientCreated: false});
            })
            .done();
        }else{
            alert("The input fields are blank, please enter a first name and a last name");
        }
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

        if(this.state.patientCreated === true){
                return (<Redirect to={'/'} />)
        }

        return (


            <div id="class">
           

            <label id="Header">CREATE PATIENT</label>
                <form class="createform" >

                <div id ="labelshort" class= "container">
    <label id ="labelshort">First Name</label>
    
    <input type="text" onInput={this.updateText.bind(this)} name="fName" placeholder="First Name" />
    </div>

    
<div id ="labelshort" class= "container">
    <label id ="labelshort">Last Name</label>
    
    <input type="text" onInput={this.updateText.bind(this)} name="lName" placeholder="Last Name" />
    </div>

    <div>




    
    

      <div> MALE &nbsp;  &nbsp;
      <input type="checkbox"  />
        <br />
      </div>
    <div> FEMALE
        <input type="checkbox"  />
        <br/>
      </div>
    </div>


                    <button type="button" id="submit_button" onClick={this.submitForm.bind(this)}>Create</button>

                </form>
           
            </div>
        );
    };
}
export default createPatient