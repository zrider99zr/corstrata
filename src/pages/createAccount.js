import React, { Component } from 'react'
import './createAccount.css'

class createAccount extends Component {
    render() {

       /* function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }*/
    

        return (
            <div>
                <div className="dropdown">
                <button onClick="myFunction()" className="dropbtn">Dropdown</button>
                <div id="myDropdown" className="dropdown-content">
                    <a>Create Clinician Account</a>
                    <a>Create Client Admin Account</a>
                    <a>Create Corstrat Admin Account</a>
                </div>
            </div>
            
            <form id="accountForm" action="#" method="POST" encType="multipart/form-data">
                <br />
                <div className="row">
                    <input type="text" name="fname" />First Name <br />
                    <input type="text" name="lname" />Last Name <br />
                </div>
                {/* potentially swap this submit button out for an actual link button with a function to interface to the backend*/}
                <input id="submit_button" type="submit" value="Sumbit form" />
            </form>
            </div>
        );
    };
}
export default createAccount