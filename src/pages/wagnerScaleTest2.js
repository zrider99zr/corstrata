import React from 'react';
import '../styling/searchPatient.css';
import { Link } from 'react-router-dom';

const searchPatient = () => (
  <div id="class" className="classContainer" >
         
  <label id="Header">Mini Nutritional  </label>
  <div class="container">

    <form class="mnaform" action="#" method="POST" encType="multipart/form-data">



      {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
      <label htmlFor="name">Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?</label>
      Has Food intake declined over the past 3 months due to loss of appetite, digestive problems, chewing or swalloing diffculites?
      <br></br>

      <div>
      <input type="radio" class="calcs" name="QA" value="1" checked/>Length x width less than 25%4 sq cm
      <br></br>
      <input type="radio" class="calc" name="QA" value="2" /> 2 = Length x width 4-- less than 25%16 sq cm 
      <br></br>
      <input type="radio" class="calc" name="QA" value="3" /> Length x width 16.1-- less than 25%36 sq cm 
      <div> </div>
      <input type="radio" class="calc" name="QA" value="4" /> Length x width 36.1-- less than 25%80 sq cm 
      <br></br>
      <input type="radio" class="calc" name="QA" value="5" /> Length x width >80 sq cm 
      <br></br>
    
      </div>

      {/*values || weight loss > 3kg = 0 || does not know = 1 || weight loss between 1/3kg = 2 || no weight loss = 3 */}
      <label htmlFor="email"> Weight loss during the last 3 months</label>
      <br></br>
      <div>
      <input type="radio" class="calc" name="QB" value="1" checked/>Non-blanchable erythema on intact skin 
      <br></br>
      <input type="radio" class="calc" name="QB" value="2" /> Partial thickness skin loss involving epidermis /or dermis 
      <div></div>
      <input type="radio" class="calc" name="QB" value="3" />Full thickness skin loss involving damage or necrosis of subcutaneous tissue; may extend down to but not through underlying fascia; and/or mixed partial and full thickness and/or tissue layers obscured bygranulation tissue 
      <br></br>
      <input type="radio" class="calc" name="QB" value="4" /> Obscured by necrosis 
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
      <input type="radio" class="calc" name="QB" value="5" />
      <label> Full thickness skin loss with extensive destruction, tissue necrosis or damage to muscle, bone or supporting structures
      </label>
      <br></br>
    
      <div>
      </div>
      <br></br>
    
      <div class="row">
        <label for="message">Edges </label>
      </div>
      <br></br>
    
      <input type="radio" class="calc" name="QC" value="1" checked/> Indistinct, diffuse, none clearly visible 
      <br></br>
    
      <input type="radio" class="calc" name="QC" value="2" />Distinct, outline clearly visible, attached, even with wound base 
      <br></br>
      <input type="radio" class="calc" name="QC" value="3" />Well-defined, not attached to wound base 
      <br></br>
    
      <input type="radio" class="calc" name="QC" value="4" />Well-defined, not attached to base, rolled under, thickened 
      <br></br>
    
      <input type="radio" class="calc" name="QC" value="5" /> Well-defined, fibrotic, scarred or hyperkeratotic 
      <br></br>
    

      </div>

      <label htmlFor="QC">Neuropsycologial problems </label>
      <br></br>

      <div>
        <input type="radio" class="calc" name="QM" value="1" checked/> None present 
  <br></br>

  <input type="radio" class="calc" name="QM" value="2" />Undermining less than 2 cm in any area 
  <br></br>
  <input type="radio" class="calc" name="QM" value="3" />Undermining 2-4 cm involving less than 50% wound margins 
  <br></br>

  <input type="radio" class="calc" name="QM" value="4" />Undermining 2-4 cm involving greater than 50% wound margins 
  <br></br>

  <input type="radio" class="calc" name="QM" value="5" /> Undermining greater than 4 cm or Tunneling in any area 
  
      </div>


      {/*values || BMI
      < 19=0 || 19 <=B MI < 21=1 || 21 <=B MI < 23=2 || 23 <=B MI=3 */} 
      <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
        <br></br>

        <div>
        input type="radio" class="calc" name="QE" value="1" checked/>
        None visible   
      <br></br>
      <input type="radio" class="calc" name="QE" value="2" />
        less than 25% of wound bed covered   
      <br></br>
      <input type="radio" class="calc" name="QE" value="3" />
        less than 50% and more 75% of wound covered   
      <br></br>
      <input type="radio" class="calc" name="QE" value="4" />
        less than 50% and more than 75% of wound covered   
      <br></br>
    
      <input type="radio" class="calc" name="QE" value="5" />
        75% to 100% of wound covered   
    
        </div>

        <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
        <br></br>

        <div>
          <input type="radio" class="calc" name="QE" value="1" checked/>
    None visible   
  <br></br>
  <input type="radio" class="calc" name="QE" value="2" />
    less than 25% of wound bed covered   
  <br></br>
  <input type="radio" class="calc" name="QE" value="3" />
    less than 50% and more 75% of wound covered   
  <br></br>
  <input type="radio" class="calc" name="QE" value="4" />
    less than 50% and more than 75% of wound covered   
  <br></br>

  <input type="radio" class="calc" name="QE" value="5" />
    75% to 100% of wound covered   

        </div>


        <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
        <br></br>

        <div>
        <input type="radio" class="calc" name="QF" value="1" checked/>
        None   
      <br></br>
    
      <input type="radio" class="calc" name="QF" value="2" />
        Bloody   
      <br></br>
      <input type="radio" class="calc" name="QF" value="3" />
        Serosanguineous: thin, watery, pale red/pink   
      <br></br>
    
      <input type="radio" class="calc" name="QF" value="4" />
        Serous: thin, watery, clear   
      <br></br>
    
      <input type="radio" class="calc" name="QF" value="5" />
       Purulent: thin or thick, opaque, tan/yellow, with or without odor   
    
    
        </div>

{dfsdfdsfasddfsdfasdafds}
        <label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
        <br></br>

        <div>
        <input type="radio" class="calc" name="QG" value="1" checked/>
        None   
      <br></br>
    
      <input type="radio" class="calc" name="QG" value="2" />
        Scant, wound moist but no observable exudate   
      <br></br>
      <input type="radio" class="calc" name="QG" value="3" />
        Small   
      <br></br>
    
      <input type="radio" class="calc" name="QG" value="4" />
        Moderate   
      <br></br>
    
      <input type="radio" class="calc" name="QG" value="5" />
        Large   
      <br></br>
    
        </div>

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}


{dfsdfdsfasddfsdfasdafds}
<label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
<br></br>

<div>
<input type="radio" class="calc" name="QI" value="1" checked/>
No swelling or edema   
<br></br>

<input type="radio" class="calc" name="QI" value="2" />
Non-pitting edema extends less than 4 cm around wound   
<br></br>
<input type="radio" class="calc" name="QI" value="3" />
Non-pitting edema extends less 4 cm around wound   
<br></br>
<input type="radio" class="calc" name="QI" value="4" />
Pitting edema extends less than 4 cm around wound   
<br></br>

<input type="radio" class="calc" name="QI" value="5" />
Crepitus and/or pitting edema extends greater than 4 cm around wound   


</div>

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}


{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}


{dfsdfdsfasddfsdfasdafds}
<label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
<br></br>

<div>
<input type="radio" class="calc" name="QL" value="1" checked/>
None present   
<br></br>

<input type="radio" class="calc" name="QL" value="2" />
Induration, lrss than 2 cm around wound   
<br></br>
<input type="radio" class="calc" name="QL" value="3" />
Induration 2-4 cm extending less than 50% around wound   
<br></br>

<input type="radio" class="calc" name="QL" value="4" />
Induration 2-4 cm extending greater than 50% around wound   
<br></br>
<input type="radio" class="calc" name="QL" value="5" />


</div>

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}


{dfsdfdsfasddfsdfasdafds}
<label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
<br></br>

<div>
<input type="radio" class="calc" name="QI" value="1" checked/>
No swelling or edema   
<br></br>

<input type="radio" class="calc" name="QI" value="2" />
Non-pitting edema extends less than 4 cm around wound   
<br></br>
<input type="radio" class="calc" name="QI" value="3" />
Non-pitting edema extends less 4 cm around wound   
<br></br>
<input type="radio" class="calc" name="QI" value="4" />
Pitting edema extends less than 4 cm around wound   
<br></br>

<input type="radio" class="calc" name="QI" value="5" />
Crepitus and/or pitting edema extends greater than 4 cm around wound   


</div>

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}



{dfsdfdsfasddfsdfasdafds}
<label htmlFor="QE">Body Mass index BMI wieght in kg/(height in m)^2 </label>
<br></br>

<div>
<input type="radio" class="calc" name="QL" value="2" />
Induration, lrss than 2 cm around wound   
<br></br>
<input type="radio" class="calc" name="QL" value="3" />
Induration 2-4 cm extending less than 50% around wound   
<br></br>

<input type="radio" class="calc" name="QL" value="4" />
Induration 2-4 cm extending greater than 50% around wound   
<br></br>
<input type="radio" class="calc" name="QL" value="5" />

</div>

{dsafadsfadsfadsfdsafdsafsadfadfasdfdas}











        {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
        <input id="submit_button" type="submit" value="Sumbit form " />
    </form>

 
</div>
</div>

    ) 

export default searchPatient