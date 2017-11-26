import React from 'react';
import '../styling/createPage.css';
import { Link } from 'react-router-dom'

const createPage = () => (
    
    <div className="container">

        <div className="leftside">
        <div className="logo">LOGO</div>
        <div className="b">
            <label className="lab">Welcome,</label>
            <Link className='button' to='./wagnerScaleTest'>Change Password</Link>
            <button type="button" className="b">Logout</button>
        </div>
        </div>
        <div clasName="buttonArea">
            <Link className='button' to='./createAccount'>Create Administrator</Link>
            <Link className='button' to='./searchPatient'>Search for Patient</Link>
        </div>
       
    </div>
    )
export default createPage