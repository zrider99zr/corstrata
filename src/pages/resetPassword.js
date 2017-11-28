import React from 'react';
import '../styling/resetPassword.css';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import {navm} from '../styleForm';
const resetPassword = () => (

<div class= "container">
<div class= "classContianer">
     <label id="Header"> PASSWORD RESET </label>
    <body className="bodyf">


  

   
    <form class="inputform">
      <div>
        <label className="label" id="advice"><b>Password must include a minimum of 8 characters.<br></br><br></br>
        And one or more of each of the following:</b>
          <br></br>
          <li> lower-case letter</li>
          <br></br>
          <li> upper-case letter</li>
          <br></br>
          <li> number</li>
          <br></br>
          <li> punctuation mark</li>
        </label>
      </div>
      <div id="oldpassword">

      

        <label className="label" id="inlabel"> Old Password: </label>
        <input className="inputboxpassword" type="text" id="input" />
        <br></br>



        <label className="label" id="inlabel"> New Password: </label>
        <input className="inputboxpassword" type="text" id="input" />

        <br></br>
        <label className="label" id="inlabel">Confirm New Password: </label>
        <input className="inputboxpassword" type="text" id="input" />
        <input id="changeButton" type="submit" value="Confirm Password" />

      </div>


    </form>




  
</body>
</div>
</div>
)
export default resetPassword