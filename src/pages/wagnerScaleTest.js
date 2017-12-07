import React, { Component } from 'react'
import Response from './response'

import '../styling/style.css'

class wagnerScaleTest extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            info: " ",
        };
    }

    updateInput(e) {
        const input = e.target.value;
        this.changeInput(input);
    }

    submitForm() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'createWagnerTest',
                patientID: this.state.fName,
                grade: this.state.input,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                alert(res.message);
            })
            .catch((error) => {
                alert(error.message);
            })
            .done();
    }

    changeInput(input) {
        var info="";
        this.setState({ input });
        if (input==="0"){
            info = <ul>
                <label>Wound Feedback: </label>
                <li>The Patient has diabetes.</li>
                <li> there are no signs of any damage or ulceration on the feet. </li>
                <li>It is appropriate to evaluate the patient annually with the semmes-Weistein monofilament to determine if there are any changes in sensation</li>
            </ul>

        } else if (input==="1"){
            info = <ul>
                <li>The patient has developed a superficial ulcer, ulcer does not involve any deep tissue or full-thickness tissue destruction.</li>
                <li>The patient should be able to close this wound with appropriate management of diabetes, wound care and offloading pressure.</li>
                <li>The patient should be reassessed every 3 months</li>
            </ul>

        } else if (input==="2"){
            info = <ul>
                <label>Wound Feedback: </label>
                <li>The ulcer involces deep tissue destruction that may involve muscle bone or tendon.</li>
                <li>Aggressive treatment is necessary to prevent complications such as amputation.</li>
                <li>The aggressive management of diabetes mellitus includes off-loading and prevention of osteomyelitis.</li>
                <li>Again, additional assessment for other wounds is necessary</li>
            </ul>

        } else if (input==="3"){
            info = <ul>
                <label>Wound Feedback: </label>
                <li>The ulcer involces gangrene or a deep tissue abscess.</li>
                <li>There is potential for the loss of a limb.</li>
                <li>Diabetes control as well as aggressive topical wound care is necessary.</li>
            </ul>

        } else if (input==="4"){
            info = <ul>
                <label>Wound Feedback: </label>
                <li>The ulcer involves gangrene of the forefoot.</li>
                <li>Limb salvage is the goal of the treatment</li>
            </ul>

        } else if (input==="5"){
            info = <ul>
                <label>Wound Feedback: </label>
                <li>The ulcer involes gangrene of a major portion of the foot.</li>
                <li>The possiblity of limb loss increases</li>
            </ul>
        }
        this.setState({ info });
    }

    render() {
        return (
   
            <div id="class">

  <label id="Header">Wagner</label>
  <br></br>

  <form class="mnaform" action="#" method="POST" encType="multipart/form-data">

    <div class="containerb">






      <div>
        <label>Select the option that best describes the situation</label>
        <input type="radio" id="rb" onClick={this.updateInput.bind(this)} info="zignewton" name="WSD" value="0" /> Ulcers have intact skin
        <br></br>
        <input type="radio" id="rb" onClick={this.updateInput.bind(this)} name="WSD" value="1" /> Ulcers are superficial
        <br></br>
        <input type="radio" id="rb" onClick={this.updateInput.bind(this)} name="WSD" value="2" /> Ulcers are deeper, and may extend to tendons or bones
        <br></br>
        <input type="radio" id="rb" onClick={this.updateInput.bind(this)} name="WSD" value="3" /> Ulcers contain an abscess or osteomyelitis
        <br></br>
        <input type="radio" id="rb" onClick={this.updateInput.bind(this)} name="WSD" value="4" /> Ulcers have gangrene of the forefoot
        <br></br>
      </div>
      <div class="containerb">
        <div>
          <Response input={this.state.input} info={this.state.info} />
        </div>

      </div>

    </div>
    {/* potentially swap this submit button out for an actual link button with a function to interface to the backend*/}


    <br></br>


    <button id="submit_button" type="submit">Submit</button>
  </form>

</div>

        );
    };
}
export default wagnerScaleTest