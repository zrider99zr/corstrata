import React from 'react';
import Header from "./header";
import Main from "./main";
import './App.css';
import Nav from './nav.js';

const App = () => (
    <div>
   <Nav/>
        <Header />
       
        <Main /> 
    </div>
);

export default App;