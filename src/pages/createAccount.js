import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import '../styling/style.css'


class createAccount extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            fname: "",
            lname: "",
            password: "",
            isClient: false,
            isAdmin: false,
            institution: "",
            loggedIn: false,
        };
    }

    //updates state when input is changed
    updateText(e) {
        if (e.target.name==="email") {
            this.setState({ email: e.target.value });

        } else if (e.target.name==="fname") {
            this.setState({ fname: e.target.value });

        } else if (e.target.name==="lname") {
            this.setState({ lname: e.target.value });

        } else if (e.target.name==="institution") {
            this.setState({ institution: e.target.value });

        } else if (e.target.name==="password") {
            this.setState({ password: e.target.value });

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

    //calls functions on page load
    componentDidMount() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") === null || sessionStorage.getItem("token") === "") {
            this.setState({ loggedIn: false });
        } else {
            this.validateUser();
        }
    }

    //checks to see user input for client or admin
    checkStatus(e) {
        if (e.target.checked===true) {
            if (e.target.name==="client") {
                this.setState({ isClient: 1 });
            } else if (e.target.name==="admin") {
                this.setState({ isAdmin: 1 });
            }
        } else {
            if (e.target.name==="client") {
                this.setState({ isClient: 0 });
            } else if (e.target.name==="admin") {
                this.setState({ isAdmin: 0 });
            }
        }
    }

    //sends user input to the backend
    submitForm() {
        console.log(this.state);
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
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
        if (this.state.loggedIn === false) {
            return (<Redirect to={'/loginPage'} />)
        }


        return (<div id="class">

                <label id="Header">CREATE ACCOUNT</label>
  <form class="createform" action="#" method="POST" encType="multipart/form-data">


<div id ="labelshort" class= "container">
    <label id ="labelshort">First Name</label>
    
      <input type="text" onInput={this.updateText.bind(this)} id="input-email" name="email" placeholder="email@gmail.com" />
    </div>
    <div class ="container" id ="labelshort"><label id ="labelshort">Last Name</label>
    
      <input type="text" onInput={this.updateText.bind(this)} id="input-name" name="fname" placeholder="First Name" />
    </div>
   <div class ="container" id ="labelshort" > <label id ="labelshort">Email</label>
    
      <input type="text" onInput={this.updateText.bind(this)} id="input-lastname" name="lname" placeholder="Last Name" />
    </div>

    <div class ="container" id ="labelshort"> <label id ="labelshort">Password</label>
    
    <input type="password" onInput={this.updateText.bind(this)} id="input-password" name="password" placeholder="password" />
    </div>

    <div class ="container" id ="labelshort"> <label id ="labelshort"> Institution </label>
    
    <input type="text" onInput={this.updateText.bind(this)} name="institution" placeholder="Institution" />
    </div>

    <div class ="container" id ="labelshort"> <label id ="labelshort"> &nbsp; </label>
    
 
    </div>
    
    <div>




    
    

      <div> is this account a client?(if no don't click)
      <input type="checkbox" onClick={this.checkStatus.bind(this)} name="client" />
        <br />
      </div>
    <div> is this account an admin?(if no don't click)
        <input type="checkbox" onClick={this.checkStatus.bind(this)} name="admin" />
        <br/>
      </div>
    </div>

   

    <button type="button" id="submit_button" onClick={this.submitForm.bind(this)}>Create</button>
    
  </form>
</div>


        );
    };
}
export default createAccount