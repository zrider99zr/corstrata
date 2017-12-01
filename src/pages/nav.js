import React, { Component } from 'react';
import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            error: props.error,
            info: props.info,
            password: "",
            login: false,
            Admin: "",
        };
    }

    setEmail(e) {
        this.setState({ email: e.target.value });
    }

    setPass(e) {
        this.setState({ password: e.target.value });
    }

    checkInput(e) {
        //loggin in and passing it state, will need to trim or extend the method to show more/less state variables
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'login',
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                sessionStorage.setItem("token", res.token);

                if (res.status===1) {
                    this.setState({ login: true });
                }
            })
            .catch((error) => {
                alert(error.message);
            }); 
    }

   

    render() {

         if (this.state.Admin == 1) {
        return (
            <div>

               <Menu>
                    <Link className='button' to='./searchPatient'>Find Patient</Link>
                    <Link className='button' to='./createAccount'>Create Account</Link>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/loginPage'>Login Page</Link></li>
                    <li><Link to='/resetPassword'>reset Password</Link></li>

                    <li><Link to='/createPage'>Create Admin Page</Link></li>
                    <li><Link to='/MNAtest'>Mini-Nutritional Assessment</Link></li>
                    <li><Link to='/wagnerScaleTest'>Wagner Scale Test</Link></li>
                    <li><Link to='/testSelectionPage'>Test Selection Page</Link></li>
                    <li><Link to='/createAccount'>Create Account Page</Link></li>

                    <li><Link to='/createPage'>Search Admin</Link></li>
                    <li><Link to='/nav'>Nav Bar</Link></li>
                    <li><Link to='/bates'>bates</Link></li>
                    <li><Link to='/linegraph'>linegraph</Link></li>
                    <li><Link to='/createInstitution'>Create Institution</Link></li>
                    <li><Link to='/createPatient'>Create Patient</Link></li>
                    <li><Link to='/tempSearchPatient'>search Institution</Link></li>
                    <li><Link to='/searchPatient'> Search Patient</Link></li>
                    <li><Link to='/patientpage'>Patient Home</Link></li>
                    <li><Link to='/graphTest'>Graph Test</Link></li>
                    
                </Menu>
               
            </div>
       
);
     }
    else{

        return (
            <div>

               <Menu>
                    <Link className='button' to='./searchPatient'>Find Patient</Link>
                    <Link className='button' to='./createAccount'>Create Account</Link>
                    
                    

                </Menu>
               
            </div>
       
);




    }
    
    };

    
} 
export default nav;