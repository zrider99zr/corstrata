import React, { Component } from 'react';

import '../styling/style.css';

import { Redirect } from 'react-router-dom'


import Response from './response'
import { Redirect } from 'react-router-dom'

class MNAtest extends Component {
    constructor() {
        super();
        this.state = {
            i1: "-1",
            i2: "-1",
            i3: "-1",
            i4: "-1",
            i5: "-1",
            i6: "-1",
            i7: "-1",
            info: " ",
            loggedIn: false,
            testCreated: false,
        };
    }

    //sends the users input to the backend for storage.
    submitTest() {
        if((this.state.i1 !== "-1" && this.state.i2 !== "-1" && this.state.i3 !== "-1" && this.state.i4 !== "-1" && this.state.i5 !== "-1") && ((this.state.i6 !== "-1" && this.state.i7 === "-1") || (this.state.i6 === "-1" && this.state.i7 !== "-1"))){
            fetch('http://165.227.191.245/corstrata/api/index.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/.json',
                },
                body: JSON.stringify({
                    request: 'createMiniNutritionalTest',
                    token: sessionStorage.getItem("token"),
                    patientID: sessionStorage.getItem("patientID"),
                    A: this.state.i1,
                    B: this.state.i2,
                    C: this.state.i3,
                    D: this.state.i4,
                    E: this.state.i5,
                    F1: this.state.i6,
                    F2: this.state.i7,
                })
            })
                .then((response) => response.json())
                .then((res) => {
                    
                    if (res.status === 1) {
                        alert("Test Succesfully Created!");
                        this.setState({testCreated: true});
                        
                    } else {
                        alert("Test Creation Failed");
                        this.setState({testCreated: false});
                    }
                })
                .catch((error) => {
                    alert(error.message);
                    this.setState({testCreated: false});
                }); 
            
        }
        else{
            console.log(this.state.i1,this.state.i2,this.state.i3,this.state.i4,this.state.i5,this.state.i6,this.state.i7)
        }   
    }

    //function to validate, with the backened, that the user is who they say they area
    validateUser() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'validateJWT',
                token: sessionStorage.getItem("token"),
            })
        })
            .then((response) => response.json())
            .then((res) => {

                if (res.status === 1) {
                    this.setState({ loggedIn: true });

                } else if (res.status === 0) {
                    this.setState({ loggedIn: false });
                }
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    //calls functions after the page is loaded
    componentDidMount() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") == null || sessionStorage.getItem("token") === "") {
            this.setState({ loggedIn: false });
        } else {
            this.validateUser();
        }
    }

    updateHidden(e) {
        if (e.target.value === 0) {
            this.setState({
                i7: -1,
                showBMI: true,
                showCC: false,
            });
        }
        else if (e.target.value === 1) {
            this.setState({
                i6: -1,
                showBMI: false,
                showCC: true,
            });
        }
    }

    //function that updates the state value based upon which button group was pressed
    updateVal(e) {
        if (e.target.name === "appetite") {
            this.setState({ i1: e.target.value });

        } else if (e.target.name === "WL") {
            this.setState({ i2: e.target.value });

        } else if (e.target.name === "Mobility") {
            this.setState({ i3: e.target.value });

        } else if (e.target.name === "stress") {
            this.setState({ i4: e.target.value });

        } else if (e.target.name === "neuro") {
            this.setState({ i5: e.target.value });

        } else if (e.target.name === "BMI") {
            this.setState({ i6: e.target.value });

        } else if (e.target.name === "CC") {
            this.setState({ i6: e.target.value });

        } else if (e.target.name === "hasBMI") {
            var info = ""
            if (e.target.value === "0") {
                info = <div>
                    < label htmlFor="QE" > Body Mass index BMI wieght in kg / (height in m) ^ 2 </label >
                    <div>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="BMI" value="0" /> B.M.I. less that 19
                    <br></br>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="BMI" value="1" /> B.M.I. greater than 19 to less than 21
                    <br></br>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="BMI" value="2" /> B.M.I. less 21 to less than 23
                    <br></br>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="BMI" value="3" /> B.M.I. 23 or greater
                    </div>
                </div>
            } else if (e.target.value === "1") {
                info = <div>
                    <label htmlFor="QE" > Calf circumference (CC) in cm </label >
                    <div>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="CC" value="0" />C.C. less than 31
                            <br></br>
                        <input type="radio" onChange={this.updateVal.bind(this)} name="CC" value="3" />C.C. 31 or greater
                        </div>
                </div>
            }
            this.setState({ info: info });
        }
    }

    //function to test if the functionality of the page works, while not connected to the database
    calculateTotal() {
        if (this.state.i1 !== -1 && this.state.i2 !== -1 && this.state.i3 !== -1 && this.state.i4 !== -1 && this.state.i5 !== -1 && this.state.i6 !== -1) {
            console.log(this.state);
        } else {
            alert("Please fill out the rest of the survey before submitting");
        }
    }

    render() {
        {/*Boots user back to login page, if they are not logged in or Validated*/}
        if (this.state.loggedIn === false) {
            return (<Redirect to={'/loginPage'} />)
        }
            if(this.state.testCreated===true){

            return (<Redirect to={'/'} />)
            }
        return (

            <div id="class"  >
         
  <label id="Header">Mini Nutritional  </label>
  

    <form class="mnaform" action="#" method="POST" encType="multipart/form-data">




      {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
      <label >Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label>
      
      <br></br>

      <div class="g">
        <input type="radio" name="appetite" value="0" />severe decrease in food intake
        <br></br>

        <input type="radio" name="appetite" value="1" />modarate decrease in food intake
        <br></br>
        <input type="radio" name="appetite" value="2" />no decrease in food intake
        <p></p>
      </div>

      {/*values || weight loss > 3kg = 0 || does not know = 1 || weight loss between 1/3kg = 2 || no weight loss = 3 */}
      <label htmlFor="email"> Weight loss during the last 3 months</label>
      <br></br>
      <div>
        <input type="radio" name="WL" value="0" />weight loss greater thean 3kg (6.6 lbs)
        <br></br>
        <input type="radio" name="WL" value="1" />does not know
        <br></br>
        <input type="radio" name="WL" value="2" />weight loss between 1 and 3 kg (2.2 and 6.6 lbs)
        <br></br>
        <input type="radio" name="WL" value="3" />no weight loss
        <br></br>

        <p></p>
      </div>


      {/*values || bed/chair bound = 0 || able to get out of bed/chair = 1 || weight loss between 1/3kg = 2 */}
      <label htmlFor="message">Mobility</label>
      <br></br>
      <div>
        <input type="radio" name="Mobility" value="0" />bed or chair bound
        <br></br>
        <input type="radio" name="Mobility" value="1" />able to get out of bed/chair but doesnt no go out
        <br></br>
        <input type="radio" name="Mobility" value="2" />weight loss between 1 and 3 kg (2.2 and 6.6 lbs)
        <br></br>
        <p></p>
      </div>


      {/*values || yes = 0 || no = 1 */}
      <label htmlFor="QD">Has suffered psychological stress or acute disesease in the last 3 months</label>
      <br></br>
      <div>
        <input type="radio" name="stress" value="0" />yes
        <br></br>
        <input type="radio" name="stress" value="1" />no
        <p></p>
      </div>

      <label htmlFor="QC">Neuropsycologial problems </label>
      <br></br>

      <div>
        <input type="radio" name="neuro" value="0" />severe dementia or depression
        <br></br>
        <input type="radio" name="neuro" value="1" />mild dementia
        <br></br>
        <input type="radio" name="neuro" value="2" />no psychological problems
        <p></p>
      </div>


      {/*values || BMI
      < 19=0 || 19 <=B MI < 21=1 || 21 <=B MI < 23=2 || 23 <=B MI=3 */} <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
        <br></br>

        <div>
          <input type="radio" name="BMI" value="0" /> BMI less that 19
          <br></br>
          <input type="radio" name="BMI" value="1" /> BMI greater than 19 to less than 21
          <br></br>
          <input type="radio" name="BMI" value="2" /> BMI less 21 to less than 23
          <br></br>
          <input type="radio" name="BMI" value="3" /> BMI 23 or greater
          <p></p>
        </div>







        {/*values || less than 31 = 0 || 31 or greater = 3 */}
        <label htmlFor="QE">Calf circumference (CC) in cm </label>
        <br></br>

        <div>
          <input type="radio" name="CC" value="0" />CC less than 31
          <br></br>
          <input type="radio" name="CC" value="3" />CC 31 or greater
          <p></p>
        </div>

        {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
        <input id="submit_button" type="submit" value="Sumbit form " />
    </form>

 

</div>


                       
        );
    };
}
export default MNAtest