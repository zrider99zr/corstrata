import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";

ReactDOM.render(
    <BrowserRouter  style="background-color: red">
        <App />
    </BrowserRouter>,
    document.getElementById("root")  );
     document.body.style.backgroundColor=" rgba(0, 0, 0, .7)";
   
    document.body.style.backgroundImage = "url('https://www.nesta.org.uk/sites/default/files/styles/thumbnail_280x200/public/medical-cross-symbols-against-blue-background.jpg?itok=4d6KCMMY')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize ="cover";
 
    
    registerServiceWorker();
