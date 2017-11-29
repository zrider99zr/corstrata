import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import {slide} from 'react-burger-menu';
import {nav} from './pages/nav.js';

export const Container = styled.div`
display: flex;
font-size: 16px;
-webkit-font-smoothing: antialiased;
-webkit-text-size-adjust: 100%;
color: #2d2d2d;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
* {
  box-sizing: border-box;
}
`;

export const InputBox = styled.div`
width: 100px;
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' }) `
min-width: 40px;
height: 34px;
cursor: pointer;
background-image: linear-gradient(180deg, #fff 0, #e0e0e0);
border: none;
border-radius: 4px;
border-top-left-radius: 0;
border-bottom-left-radius: 0;

&:hover {
  background-color: #e0e0e0;
  background-image: unset;

  &:active {
    background-image: linear-gradient(180deg, #e0e0e0 0, #fff);
  }
}
`;

export const InputGroup = styled.div`
display: flex;
width: 100%;
border-radius: 4px;

${InputField} {
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

${SubmitButton} {
  border-radius: inherit;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
`;

export const StackedInputs = styled.div`
> * {
  margin-bottom: 0;
  border-radius: 0;

  :first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  :last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
`;

export const InputField = styled.input`
flex: 1;
width: 100%;
height: 34px;
font-size: 14px;
padding: 6px 12px;
margin-bottom: 5px;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;

export const HelpmMessage = styled.p`
padding:1em;
`;

export const LoginForm = styled.form`
width: ${props => props.width || '20em'};
padding: 0.25em 1em;
text-align: center;
`;

export const SubButton = styled.div`
`;

export const Contents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 7em;
z-index: 3;
color: white;
min-height: 100vh;
width: 100vw;
position: relative;
word-wrap: break-word;
`;

export const Pattern = styled.div`

z-index: 2;
width: 100%;
position: fixed;
top: 0;
left: 0;
height: 100%;
::before {
  content: " ";
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr='#66000000',
      endColorstr='#00000000',
      GradientType=0
    );
}
`;
export const WelcomeParagraph = styled.h4`
font-size: 26px;
font-weight: normal;
margin: 0.5em 0;
`;

export const AuthPage = ({ children, subtitle }) =>
    <Container>
        <Pattern />
        <Contents>

            <WelcomeParagraph>
                {subtitle}
            </WelcomeParagraph>
            {children}
        </Contents>
    </Container>;


export const sidemenu= styled.menu`
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
</Menu>`;

export const navm= styled.menu` <nav></nav>



`