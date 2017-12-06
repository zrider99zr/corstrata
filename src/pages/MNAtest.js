import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import '../styling/mna.css';
import Response from './response'

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

            <div id="class" className="classContainer" >

                <label id="Header">Mini Nutritional  </label>
                <div className="container">

                    <form className="mnaform" >

                        {/*radio button group for the appetite section */}
                        <label htmlFor="name">Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label>
                        <div>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="0" />Severe decrease in food intake
                            <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="1" />Modarate decrease in food intake
                            <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="2" />No decrease in food intake
                            </div>

                        {/*radio button group for the weightloss section */}
                        <label htmlFor="email"> Weight loss during the last 3 months</label>
                        <div>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="0" />Weight loss greater thean 3kg (6.6 lbs)
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="1" />Does not know
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="2" />Weight loss between 1 and 3 kg (2.2 and 6.6 lbs)
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="3" />No weight loss
                                <br></br>
                        </div>


                        {/*radio button group for mobility section */}
                        <label htmlFor="message">Mobility</label>
                        <div>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="Mobility" value="0" />Bed or chair bound
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="Mobility" value="1" />Able to get out of bed/chair but doesnt no go out
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="Mobility" value="2" />Goes out
                                <br></br>
                        </div>

                        {/*radio button group for stress section*/}
                        <label htmlFor="QD">Has suffered psychological stress or acute disesease in the last 3 months</label>
                            <br></br>
                        <div>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="stress" value="0" />Yes
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="stress" value="2" />No
                        </div>

                        <label htmlFor="QC">Neuropsycologial problems </label>
                        <div>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="0" />Severe dementia or depression
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="1" />Mild dementia
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="2" />No psychological problems
                        </div>

                        {/*Question for the user to decide if they are doing the calfcircumference test or BMI test*/}
                        <div>
                            <label>Do you wish to perform BMI check or a Calf Circumference</label>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="hasBMI" value="0" />Check B.M.I.
                                <br></br>
                            <input type="radio" onChange={this.updateVal.bind(this)} name="hasBMI" value="1" />Check Calf Circumference
                        </div>

                        {/* refer to response.js  */}
                        <Response info={this.state.info} />
                        <button type="button" onClick={this.submitTest.bind(this)}>Create</button>
                        </form>   
                </div>
            </div>
        );
    };
}
export default MNAtest