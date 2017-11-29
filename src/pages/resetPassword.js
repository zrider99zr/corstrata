import React from 'react';
import '../styling/un.css';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import {navm} from '../styleForm';
const resetPassword = () => (

<div id="class">

     <label id="Header"> PASSWORD RESET </label>
    


  

   
    <form class="mnaform">
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

      

        <label className="label" > Old Password: </label>
        <input type="text" id="res" />
        <br></br>



        <label className="label" > New Password: </label>
      <input  type="text" />

        <br></br>
        <label className="label" >Confirm New Password: </label>
        <input  type="text"  id="res"/>
        
<label>&nbsp;</label>
<br></br>
<label>&nbsp;</label>
        <input id="submit_button" type="submit" value="Submit " />

      </div>


    </form>




 


</div>
)
export default resetPassword