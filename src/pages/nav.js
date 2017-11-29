import React from 'react';
import '../styling/nav.css';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

const nav = () =>(
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
            
</Menu>
</div>
);

export default nav;