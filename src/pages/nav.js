import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';
import '../styling/un.css';
import { Link } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
 /* export const ButtonGroup = styled.div`

  
  `;*/
 

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
</Menu>

<button >dfadfds </button>
</div>
);

export default nav;