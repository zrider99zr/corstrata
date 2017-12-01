import React, { Component } from 'react';
import '../styling/mna.css';

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
            info: " ",
        };
    }

    submitTest() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'createMinNutitionalTest',
                testID: sessionStorage.getItem(""),
                questionA: this.state.i1,
                questionB: this.state.i2,
                questionC: this.state.i3,
                questionD: this.state.i4,
                questionE: this.state.i5,
                questionF1: this.state.i6,
                questionF2: this.state.i6,
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if (res.status === 1) {
                    alert("Test Succesfully Created!");
                    
                } else {
                    alert("Test Creation Failed");
                }
            })
            .catch((error) => {
                alert(error.message);
            }); 
    }

    updateVal(e) {
        if (e.target.name === "appetite"){
            this.setState({ i1: e.target.value });

        } else if (e.target.name === "WL"){
            this.setState({ i2: e.target.value });

        } else if (e.target.name === "Mobility") {
            this.setState({ i3: e.target.value });

        } else if (e.target.name === "stress") {
            this.setState({ i4: e.target.value });

        } else if (e.target.name === "neuro") {
            this.setState({ i5: e.target.value });

        } else if (e.target.name === "BMI") {
            this.setState({ i6: e.target.value });

        } else if (e.target.name === "CC"){
            this.setState({ i6: e.target.value });
        }
    }

    calculateTotal() {
        var total = 0;
        if (this.state.i1 != -1 && this.state.i2 != -1 && this.state.i3 != -1 && this.state.i4 != -1 && this.state.i5 != -1) {
            total = Number(this.state.i1) + Number(this.state.i2) + Number(this.state.i3) + Number(this.state.i4) + Number(this.state.i5) + Number(this.state.i6);
            total = Number(this.state.i1) + Number(this.state.i2) + Number(this.state.i3) + Number(this.state.i4) + Number(this.state.i5) + Number(this.state.i6); 
            this.setState({ total: total });
            console.log(this.state);
        } else {
            alert("Please fill out the rest of the survey before submitting");
        }
    }

    render() {

        return (

        <div id="class" className="classContainer" >
         
  <label id="Header">Mini Nutritional  </label>
  <div className="container">

        <form className="mnaform" >



      {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
      <label htmlFor="name">Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label>
      <div>
        <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="0" />severe decrease in food intake
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="1" />modarate decrease in food intake
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="appetite" value="2" />no decrease in food intake
      </div>

      {/*values || weight loss > 3kg = 0 || does not know = 1 || weight loss between 1/3kg = 2 || no weight loss = 3 */}
      <label htmlFor="email"> Weight loss during the last 3 months</label>
      <div>
          <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="0" />weight loss greater thean 3kg (6.6 lbs)
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="1" />does not know
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="2" />weight loss between 1 and 3 kg (2.2 and 6.6 lbs)
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="WL" value="3" />no weight loss
        <br></br>
      </div>


      {/*values || bed/chair bound = 0 || able to get out of bed/chair = 1 || weight loss between 1/3kg = 2 */}
      <label htmlFor="message">Mobility</label>
      <div>
        <input type="radio" onChange={this.updateVal.bind(this)}name="Mobility" value="0" />bed or chair bound
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="Mobility" value="1" />able to get out of bed/chair but doesnt no go out
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="Mobility" value="2" />weight loss between 1 and 3 kg (2.2 and 6.6 lbs)
        <br></br>
      </div>


      {/*values || yes = 0 || no = 1 */}
      <label htmlFor="QD">Has suffered psychological stress or acute disesease in the last 3 months</label>
      <br></br>
        <div>
        <input type="radio" onChange={this.updateVal.bind(this)} name="stress" value="0" />yes
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="stress" value="2" />no
      </div>

      <label htmlFor="QC">Neuropsycologial problems </label>
      <div>
        <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="0" />severe dementia or depression
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="1" />mild dementia
        <br></br>
        <input type="radio" onChange={this.updateVal.bind(this)} name="neuro" value="2" />no psychological problems
      </div>

      <div>
          <label>Do you wish to perform BMI check or a Calf Circumference</label>
          <input type="radio" name="hasBMI" value="0" />Check B.M.I.
          <br></br>
          <input type="radio" name="hasBMI" value="1" />Check Calf Circumference
      </div>

      <div>
          < label htmlFor="QE" > Body Mass index BMI wieght in kg / (height in m) ^ 2 </label >
          <div>
              <input type="radio" name="BMI" value="0" /> B.M.I. less that 19
                    <br></br>
              <input type="radio" name="BMI" value="1" /> BMI greater than 19 to less than 21
                    <br></br>
              <input type="radio" name="BMI" value="2" /> BMI less 21 to less than 23
                    <br></br>
              <input type="radio" name="BMI" value="3" /> BMI 23 or greater
                    </div>
      </div>

        {/*values || less than 31 = 0 || 31 or greater = 3 */}
        <label htmlFor="QE">Calf circumference (CC) in cm </label>
        <div>
          <input type="radio" name="CC" value="0" />CC less than 31
          <br></br>
          <input type="radio" name="CC" value="3" />CC 31 or greater
        </div>


        {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
        <button id="submit_button" onClick={this.calculateTotal.bind(this)} type="button">Submit</button>
    </form>

 
</div>
</div>


        );
    };
}
export default MNAtest