import React, { Component } from 'react';
import '../styling/mna.css';

class MNAtest extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            info: " ",
            total: "0",
        };
    }

    

    render() {

        return (

        <div id="class" className="classContainer" >
         
  <label id="Header">Mini Nutritional  </label>
  <div class="container">

    <form class="mnaform" action="#" method="POST" encType="multipart/form-data">



      {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
      <label htmlFor="name">Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label>
      
      <br></br>

      <div>
        <input type="radio" name="appetite" value="0" />severe decrease in food intake
        <br></br>

        <input type="radio" name="appetite" value="1" />modarate decrease in food intake
        <br></br>
        <input type="radio" name="appetite" value="2" />no decrease in food intake
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
      </div>


      {/*values || yes = 0 || no = 1 */}
      <label htmlFor="QD">Has suffered psychological stress or acute disesease in the last 3 months</label>
      <br></br>
      <div>
        <input type="radio" name="stress" value="0" />yes
        <br></br>
        <input type="radio" name="stress" value="1" />no

      </div>

      <label htmlFor="QC">Neuropsycologial problems </label>
      <br></br>

      <div>
        <input type="radio" name="neuro" value="0" />severe dementia or depression
        <br></br>
        <input type="radio" name="neuro" value="1" />mild dementia
        <br></br>
        <input type="radio" name="neuro" value="2" />no psychological problems

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
        </div>







        {/*values || less than 31 = 0 || 31 or greater = 3 */}
        <label htmlFor="QE">Calf circumference (CC) in cm </label>
        <br></br>

        <div>
          <input type="radio" name="CC" value="0" />CC less than 31
          <br></br>
          <input type="radio" name="CC" value="3" />CC 31 or greater

        </div>


        {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
        <input id="submit_button" type="submit" value="Sumbit form " />
    </form>

 
</div>
</div>


        );
    };
}
export default MNAtest