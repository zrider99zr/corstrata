import React from 'react';
import '../styling/resetPassword.css';
//import Logo from './Logo.jpg';

const resetPassword = () => (

    <body>

       
    <div class="container">
    
    
        <form class="inputform"  >
        <div><label className= "label" id="advice" ><b>Password must include a minimum of 8 characters.<br></br><br></br>
        And one or more of each of the following:</b><br></br>
<li> lower-case letter</li><br></br>
<li> upper-case letter</li><br></br>
<li> number</li><br></br>
<li> punctuation mark</li></label></div>    
            <div  id="oldpassword" >
               
            <label id="Header"> PASSWORD RESET </label>
            <label> &nbsp; </label>
                <label className="label" id="inlabel">     Old Password: </label>
                <input className="inputboxpassword" type="text" id= "input" /><br></br>
            

            
                <label className="label" id="inlabel">     New Password: </label>
                <input className="inputboxpassword" type="text" id= "input" />
                
                <br></br>
                <label className= "label" id="inlabel" >Confirm New Password: </label>
                <input className="inputboxpassword" type="text" id= "input" />
                <input id="changeButton" type="submit" value="Confirm Password" />
             
             </div>
             
              
         </form>
  
             <button type="button" class="bChange">CHANGE PASSWORD</button>

    </div >
 </body>
)
export default resetPassword