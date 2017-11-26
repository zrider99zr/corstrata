import React from 'react';
import { Link } from 'react-router-dom';
{ /* this will only be here while we are testing all the pages, after page testing is done it will be removed and navigation will only be done through the webpage */}
// The Header creates links that can be used to navigate between routes.
const header = () => (
    <header>
        <nav>
            <ul>
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

          </ul>
        </nav>
    </header>
);

export default header;