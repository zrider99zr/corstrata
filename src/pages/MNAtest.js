import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Response from './response'

class MNAtest extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            info: " ",
            infoText: "",
            total: 0,
            grp1Val: 0,
            grp2Val: 0,
            grp3Val: 0,
            grp4Val: 0,
            grp5Val: 0,
            grp6Val: 0,
            grp7Val: 0,
        };
    }

    updateInput(e) {
        console.log("target value " + e.target.value);
        console.log("target name " + e.target.name);
        const input = e.target.value;
        var grp1Val, grp2Val, grp3Val, grp4Val, grp5Val, grp6Val, grp7Val;

        if (e.target.name === "appetite") {
            grp1Val = Number.parseInt(e.target.value, 10);
            console.log("grp1Val inside loop " + grp1Val);
            this.setState({ grp1Val });
            this.displayResponse(input);

        } else if (e.target.name === "WL") {
            grp2Val = Number.parseInt(e.target.value, 10);
            console.log("grp2Val inside loop " + grp2Val);
            this.setState({ grp2Val });
            console.log("grp2Val inside loop, after setState " + grp2Val);
            this.displayResponse(input);

        } else if (e.target.name === "Mobility") {
            grp3Val = e.target.value;
            console.log(grp3Val);
            this.setState({ grp3Val });
            this.displayResponse(input);

        } else if (e.target.name === "stress"){
            grp4Val = e.target.value;
            console.log(grp4Val);
            this.setState({ grp4Val });
            this.displayResponse(input);

        } else if (e.target.name === "neuro") {
            grp5Val = e.target.value;
            console.log(grp5Val);
            this.setState({ grp5Val });
            this.displayResponse(input);

        } else if (e.target.name === "BMI") {
            grp6Val = e.target.value;
            console.log(grp6Val);
            this.setState({ grp6Val });
            this.displayResponse(input);

        } else if (e.target.name === "CC") {
            grp7Val = e.target.value;
            console.log(grp7Val);
            this.setState({ grp7Val });
            this.displayResponse(input);

        }
        
    }

    displayResponse(input){
        var info = "";
        var infoText = "Your score is: " + total;
        console.log("grp1Val in displayResponse " + this.state.grp1Val);
        var total = this.state.grp2Val;
        console.log("total: " + total);
        this.setState({ input });
        this.setState({ infoText });
        this.setState({ total });
    }

    render() {

        return (
            <div className="container">
                <form id="contact_form" action="#" method="POST" encType="multipart/form-data">
                    <div className="row">
                        {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
                        <label htmlFor="name">Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="appetite" value="0" />severe decrease in food intake <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="appetite" value="1" />modarate decrease in food intake<br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="appetite" value="2" />no decrease in food intake
            </div>
                    <br />

                    <div className="row">
                        {/*values || weight loss > 3kg = 0 || does not know = 1 || weight loss between 1/3kg = 2 || no weight loss = 3 */}
                        <label htmlFor="email"> Weight loss during the last 3 months</label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="WL" value="0" />weight loss greater thean 3kg (6.6 lbs) <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="WL" value="1" />does not know <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="WL" value="2" />weight loss between  1 and 3 kg  (2.2 and 6.6 lbs)<br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="WL" value="3" />no weight loss
            </div>
                    <br />
                    <br />

                    <div className="row">
                        {/*values || bed/chair bound = 0 || able to get out of bed/chair = 1 || weight loss between 1/3kg = 2 */}
                        <label htmlFor="message">Mobility</label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="Mobility" value="0" />bed or chair bound <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="Mobility" value="1" />able to get out of bed/chair but doesnt no go out <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="Mobility" value="2" />weight loss between  1 and 3 kg  (2.2 and 6.6 lbs)
	    </div>
                    <br />

                    <div className="row">
                        {/*values || yes = 0 || no = 1 */}
                        <label onClick={this.updateInput.bind(this)} htmlFor="QD">Has suffered psychological stress or acute disesease in the last 3 months</label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="stress" value="0" />yes <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="stress" value="1" />no <br />
                        <br />
                        {/*values || dementia = 0 || mild dementia = 1 || no probs = 2 */}
                        <label htmlFor="QC">Neuropsycologial problems </label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="neuro" value="0" />severe dementia or depression<br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="neuro" value="1" />mild dementia <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="neuro" value="2" />no psychological problems
                <br />
                        <br />

                        {/*values || BMI < 19 = 0 || 19 <= BMI < 21 = 1 || 21 <= BMI < 23 = 2 || 23 <= BMI = 3 */}
                        <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="BMI" value="0" /> BMI less that 19 <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="BMI" value="1" /> BMI greater than 19 to less than 21<br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="BMI" value="2" /> BMI less 21 to less than 23  <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="BMI" value="3" /> BMI 23 or greater
                <br />
                        <br />

                        {/* potentially add a switch statement here if there is no BMI, maybe above. Ex: check box, !BMI = checked box, display bottom, else disp above */}
                        <label htmlFor="message">IF BMI ISNOT AVAILABLE, REPLACE QUESTION F1 WITH QUESTION F2. DO NOT ANSWER QUESTION F2 IF QUESTION F1 IS ALREADY COMPLETED</label><br />
                        <br />
                        {/*values || less than 31 = 0 || 31 or greater = 3 */}
                        <label htmlFor="QE">Calf circumference (CC) in cm </label><br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="CC" value="0" />CC less than 31 <br />
                        <input onClick={this.updateInput.bind(this)} type="radio" name="CC" value="3" />CC 31 or greater<br />
                        <br />
                    </div>

                    {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
                    <input id="submit_button" type="submit" value="Sumbit form " />
                </form>
                <Response input={this.state.input} info={this.state.info} infoText={this.state.infoText} total={this.state.total} />
            </div>
        );
    };
}
export default MNAtest