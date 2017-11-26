import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Response from './response'
import '../styling/home.css'

class wagnerScaleTest extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            info: " ",
            infoText: "",
        };
    }

    updateInput(e) {
        console.log(e.target.value);
        const input = e.target.value;
        this.displayResponse(input);
    }

    displayResponse(input) {
        var info = "";
        var infoText = "Wound Feedback:";
        this.setState({ input });
        this.setState({ infoText });
        if (input === "0"){
            info = <div>
                <h1 className="bold">Patient is classified with grade 0 diabetes.</h1>
            <ul>
                <li>The Patient has diabetes.</li>
                <li> there are no signs of any damage or ulceration on the feet. </li>
                <li>It is appropriate to evaluate the patient annually with the semmes-Weistein monofilament to determine if there are any changes in sensation</li>
            </ul>
            </div>

        } else if (input === "1") {
            info = <div>
                <h1 className="bold">Patient is classified with grade 1 diabetes.</h1>
                <ul>
                    <li>The patient has developed a superficial ulcer, ulcer does not involve any deep tissue or full-thickness tissue destruction.</li>
                    <li>The patient should be able to close this wound with appropriate management of diabetes, wound care and offloading pressure.</li>
                    <li>The patient should be reassessed every 3 months</li>
                </ul>
            </div>

        } else if (input === "2"){
            info = <div>
                <h1 className="bold">Patient is classified with grade 2 diabetes.</h1>
                <ul>
                    <li>The ulcer involces deep tissue destruction that may involve muscle bone or tendon.</li>
                    <li>Aggressive treatment is necessary to prevent complications such as amputation.</li>
                    <li>The aggressive management of diabetes mellitus includes off-loading and prevention of osteomyelitis.</li>
                    <li>Again, additional assessment for other wounds is necessary</li>
                </ul>
            </div>

        } else if (input === "3"){
            info = <div>
                <h1 className="bold">Patient is classified with grade 3 diabetes.</h1>
                <ul>
                    <li>The ulcer involces gangrene or a deep tissue abscess.</li>
                    <li>There is potential for the loss of a limb.</li>
                    <li>Diabetes control as well as aggressive topical wound care is necessary.</li>
                </ul>
            </div>

        } else if (input === "4"){
            info = <div>
                <h1 className="bold">Patient is classified with grade 4 diabetes.</h1>
                <ul>
                    <li>The ulcer involves gangrene of the forefoot.</li>
                    <li>Limb salvage is the goal of the treatment</li>
                </ul>
            </div>

        } else if (input === "5"){
            info = <div>
                <h1 className="bold">Patient is classified with grade 5 diabetes.</h1>
                <ul>
                    <li>The ulcer invovles gangrene of a major portion of the foot.</li>
                    <li>The possiblity of limb loss increases</li>
                </ul>
            </div>
        }
        
        this.setState({ info });
        console.log(info);
    }

    render() {
        return (
            <div className="container">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                <div className="logo">LOGO</div>

                <form id="wagnerForm" action="#" method="POST" encType="multipart/form-data">
                    <br />
                    <div className="row">
                        <label className="lab">Select the option that best describes the situation</label><br />
                        <input type="radio" onClick={this.updateInput.bind(this)} info="zignewton" name="WSD" value="0" /> Ulcers have intact skin <br />
                        <input type="radio" onClick={this.updateInput.bind(this)} name="WSD" value="1" /> Ulcers are superficial <br />
                        <input type="radio" onClick={this.updateInput.bind(this)} name="WSD" value="2" /> Ulcers are deeper, and may extend to tendons or bones  <br />
                        <input type="radio" onClick={this.updateInput.bind(this)} name="WSD" value="3" /> Ulcers contain an abscess or osteomyelitis <br />
                        <input type="radio" onClick={this.updateInput.bind(this)} name="WSD" value="4" /> Ulcers have gangrene of the forefoot  <br />
                        <input type="radio" onClick={this.updateInput.bind(this)} name="WSD" value="5" /> Ulcers have gangrene of a major portion of the foot<br />
                    </div>
                    {/* potentially swap this submit button out for an actual link button with a function to interface to the backend*/}
                    <input id="submit_button" type="submit" value="Sumbit form" />
                </form>
                <Response input={this.state.input} info={this.state.info} infoText={this.state.infoText} />
                {/* show test feedback here based upon what they select*/}
            </div>

        );
    };
}
export default wagnerScaleTest