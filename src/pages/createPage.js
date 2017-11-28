import React from 'react';


const createPage = () => (
    
    <div className="container">

        <div className="leftside">
        <div className="logo">LOGO</div>
        <div className="b">
            <label className="lab">Welcome,</label>
            <button type="button" className="b">Change Password</button>
            <button type="button" className="b">Logout</button>
        </div>
        </div>
        <div clasName="buttonArea">
            <button type="button" className="createClient">Create New Client Administrator</button>
            <button type="button" className="searchPatient">Search for Patient</button>
        </div>
       
    </div>
    )
export default createPage