import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styling/style.css'
import { Button } from 'react-bootstrap';

class testSelectionPage extends Component {
    render() {
        return (
            <div id="containerb">
                 <label id= "Header">Which test do you wish to perform?</label>
                
                <Link  to='./'> <Button className = "testbutton">Pressure Wound </Button></Link> <br></br>
                <Link  to='./wagnerScaleTest'> <Button className = "testbutton">Wagner Scale Test </Button></Link>
                     <br></br>
                     <Link  to='/MNAtest'><Button className = "testbutton">Mini-Nutritional Assessment</Button> </Link>
                      <br></br> 
                      <Link to='./bates'> <Button className = "testbutton">Bates Jensen Wound Assessment</Button></Link>
                </div>
                
        );
    };
}
export default testSelectionPage