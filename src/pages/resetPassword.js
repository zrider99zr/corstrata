import React from 'react';
import '../styling/un.css';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import {navm} from '../styleForm';
const resetPassword = () => (

<div id="class">

     <label id="Header"> PASSWORD RESET </label>
    


  

   
    <form class="mnaform">
      <div class="containerb">
        <div><label className="label" id="advice">Password must include a minimum of 8 characters.
       <br></br> And one or more of each of the following:
          <br></br>
          <label >&nbsp;</label>
          
          <label>&nbsp;</label>
          <li> lower-case letter</li>
          <br></br>
          <li> upper-case letter</li>
          <br></br>
          <li> number</li>
          <br></br>
          <li> punctuation mark</li>
        </label>
        </div>
      
     
     
      
<div class="containerb">

<label id= "labelshort">&nbsp;</label>
<br></br>
<label id= "labelshort">&nbsp;</label>
<br></br>
        <label className="label"  id= "labelshort"> Old Password: </label>
        <input type="text" id="res"  />
        <br></br>


        <label id= "labelshort">&nbsp;</label>
<br></br>

        <label className="label"  id= "labelshort" > New Password: </label>
      <input  type="text" />

      <label id= "labelshort">&nbsp;</label>
<br></br>
        <br></br>
        <label className="label" id= "labelshort" >Confirm New Password: </label>
        <input  type="text"  id="res" />
        
<label id = "labelshort" >&nbsp;</label>
<br></br>
<label id = "labelshort" >&nbsp;</label>



       
      

</div>
 <input id="submit_button" type="submit" value="Submit " />


</div>
    </form>




 


</div>
)
export default resetPassword