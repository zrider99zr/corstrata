import React from 'react'; 
//import $ from 'jquery';
import '../styling/style.css'

var x;
const bates = () => (
    


  <div id="classContainer">
         
  <label id="Header">Bates Jensen </label>
  
 
    <form class="createform" action="#" method="POST" encType="multipart/form-data">

<div  >

<label>LOCATION</label>

<select>
  <option  value="Sacrum and coccyx">Sacrum and coccyx</option>
  <option value="Trochanter">Trochanter</option>
  <option value="Ischail">Ischail</option>
  <option value="Lateral Ankle<">Lateral Ankle</option>
  <option value="Medial Ankle">Medial Ankle</option>
  <option value="Heel">Heel </option>
  <option value="Other">Other </option>

</select>

  <label>SHAPE</label>
<select>
<option value="Irregular">Irregular</option>
<option value="Round/Oval">Round/Oval</option>
<option value="Linear/Elongated">Linear/Elongated</option>
<option value="Bowl/Boat">Bowl/Boat</option>
<option value="Square/Rectagle">Square/Rectagle</option>
<option value="Butterfly">Butterfly </option>
<option value="Other"><input type="text" value="If other specify" /></option>

</select>

<label>SIDE</label >
<select>
<option value="left">LEFT</option>
<option value="right">RIGHT</option>

</select>

</div>
<div  id="textes">
  <label>If Other Please Specify</label>
<input type="text" />
<label>&nbsp;</label>
    <input id="sdfds" type="text" />
    <label>&nbsp;</label>
    <label>&nbsp;</label>
</div>

      {/*values || severe decrease in food intake = 0 || moderate dec in food intake = 1 || no dec in food intake = 2 */}
      <div >
      <label id="name">Size (cm)<sup>2</sup> </label>
      <input id="size" type="text" />
      
      <br></br>
      </div>
      
   
      {/*values || weight loss > 3kg = 0 || does not know = 1 || weight loss between 1/3kg = 2 || no weight loss = 3 */}
      <label htmlFor="email"> Depth</label>
      <br></br>
      <div>
      <p></p>
      <input type="radio" class="calc" name="QA" value="1" checked/>Non-blanchable erythema on intact skin 
      <br></br>
      <input type="radio" class="calc" name="QA" value="2" /> Partial thickness skin loss involving epidermis /or dermis 
      <div></div>
      <input type="radio" class="calc" name="QA" value="3" />Full thickness skin loss involving damage or necrosis of subcutaneous tissue;may extend down to but not through underlying fascia 
      <br></br>
      <input type="radio" class="calc" name="QA" value="4" /> Obscured by necrosis 
        <br></br>
        <input type="radio" class="calc" name="QA" value="5" />Full thickness skin loss with extensive destruction, tissue necrosis or damage to muscle, bone or supporting structures
     <p></p>
      </div>

      {/*values || yes = 0 || no = 1 */}
      <label htmlFor="QB">Edges</label>
      <br></br>
      <div>
      <br></br>
    
      <div>
      </div>
      <br></br>
    
      <div class="row">
        
      </div>
      <br></br>
    
      <input type="radio" class="calc" name="QB" value="1" checked/> Indistinct, diffuse, none clearly visible 
      <br></br>
    
      <input type="radio" class="calc" name="QB" value="2" />Distinct, outline clearly visible, attached, even with wound base 
      <br></br>
      <input type="radio" class="calc" name="QB" value="3" />Well-defined, not attached to wound base 
      <br></br>
    
      <input type="radio" class="calc" name="QB" value="4" />Well-defined, not attached to base, rolled under, thickened 
      <br></br>
    
      <input type="radio" class="calc" name="QB" value="5" /> Well-defined, fibrotic, scarred or hyperkeratotic 
      <br></br>
    
      <p></p>
      </div>

      <label htmlFor="QC">Undermining </label>
      <br></br>

      <div>
        <input type="radio" class="calc" name="QC" value="1" checked/> None present 
  <br></br>

  <input type="radio" class="calc" name="QC" value="2" />Undermining less than 2 cm in any area 
  <br></br>
  <input type="radio" class="calc" name="QC" value="3" />Undermining 2-4 cm involving less than 50% wound margins 
  <br></br>

  <input type="radio" class="calc" name="QC" value="4" />Undermining 2-4 cm involving greater than 50% wound margins 
  <br></br>

  <input type="radio" class="calc" name="QC" value="5" /> Undermining greater than 4 cm or Tunneling in any area 
  <p></p>
      </div>

      {/*values || BMI
      < 19=0 || 19 <=B MI < 21=1 || 21 <=B MI < 23=2 || 23 <=B MI=3 */} 
      <label htmlFor="QD">Necrotic Tissue Type </label>
        <br></br>

        <div>
        <input type="radio" class="calc" name="QD" value="1" checked/>
        None visible   
      <br></br>
      <input type="radio" class="calc" name="QD" value="2" />
     White/Gray non viable tissue and or  non-adherent yellow slough
      <br></br>
      <input type="radio" class="calc" name="QD" value="3" />
      Adherent, soft ,black eschar
      <br></br>
      <input type="radio" class="calc" name="QD" value="4" />
        Firmly Adherent, hard,black eschar
      <br></br>
    
      <input type="radio" class="calc" name="QD" value="5" />
        75% to 100% of wound covered   
        <p></p>
        </div>

        <label htmlFor="QE">Necrotic Tissure Amount</label>
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
    <p></p>
        </div>


        <label htmlFor="QF">Exudate Type</label>
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
       <p></p>
        </div>
   
        <label htmlFor="QG">Exudate Amount</label>
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
      <p></p>
        </div>


        <label htmlFor="QH">Skin Color Surrounding Wound</label>
        <br></br>

        <div>
        <input type="radio" class="calc" name="QH" value="1" checked/>
         Pink or normal for ethnic group
      <br></br>
    
      <input type="radio" class="calc" name="QH" value="2" />
      Bright red &/or blanches to touch
      <br></br>
      <input type="radio" class="calc" name="QH" value="3" />
      White or grey pallor or hypopigmented 
      <br></br>
    
      <input type="radio" class="calc" name="QH" value="4" />
      Dark red or purple &/or non-blanchable
      <br></br>
    
      <input type="radio" class="calc" name="QH" value="5" />
      Black or hyperpigmented 
      <br></br>
      <p></p>
        </div>





   
<label htmlFor="QI">Peripheral Tissue Edema</label>
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
<p></p>

</div>







   
<label htmlFor="QJ">Peripheral Tissue Induration</label>
<br></br>

<div>
<input type="radio" class="calc" name="QJ" value="1" checked/>
None present   
<br></br>

<input type="radio" class="calc" name="QJ" value="2" />
Induration, less than 2 cm around wound   
<br></br>
<input type="radio" class="calc" name="QJ" value="3" />
Induration 2-4 cm extending less than 50% around wound   
<br></br>

<input type="radio" class="calc" name="QJ" value="4" />
Induration 2-4 cm extending greater than 50% around wound   
<br></br>
<input type="radio" class="calc" name="QJ" value="5" />
<p></p>

</div>




   
<label htmlFor="QK">Granulation Tissure </label>
<br></br>
<div>
<input type="radio" class="calc" name="QK" value="1" checked/>
Skin intact or partial thickness wound
<br></br>

<input type="radio" class="calc" name="QK" value="2" />
Bright, beefy red; 75% to 100% of wound filled and or tissue overgrowth
<br></br>
<input type="radio" class="calc" name="QK" value="3" />
Bright, beefy red; less than 75% and mmore than 25% of wound filled
<br></br>
<input type="radio" class="calc" name="QK" value="4" />
Pink and or dull , dusky red and or frills less than 25% wound 
<br></br>

<input type="radio" class="calc" name="QK" value="5" />
No granulation
<p></p>
</div>
   
<label htmlFor="QL">Epithelializtion</label>
<br></br>

<div>


<input type="radio" class="calc" name="QL" value="1" checked/>
100% wound covered, surface intact
<br></br>
<input type="radio" class="calc" name="QL" value="2" />
75% to less than 100% wound vonverd or epithelial tissure extends more than .5cm into wound bed
<br></br>

<input type="radio" class="calc" name="QL" value="4" />
25% to less than 50% wound covered 
<br></br>
<input type="radio" class="calc" name="QL" value="5" />
less than 25% wound covered
<p></p>
</div>

<script>
    { /* calculates total sum but does store it yet, order of additon is required */ }
{/*
    $("#submitt").on('change', function() {

   
      alert(parseInt($('input[name="QA"]:checked', '#bate').val()) 
      + parseInt($('input[name="QB"]:checked', '#bate').val())
       + parseInt($('input[name="QC"]:checked', '#bate').val())
        + parseInt($('input[name="QM"]:checked', '#bate').val()) 
        + parseInt($('input[name="QD"]:checked', '#bate').val()) 
        + parseInt($('input[name="QE"]:checked', '#bate').val()) 
        + parseInt($('inpubt[name="QF"]:checked', '#bate').val()) 
        + parseInt($('input[name="QG"]:checked', '#bate').val()) 
        + parseInt($('input[name="QH"]:checked', '#bate').val()) 
        + parseInt($('input[name="QI"]:checked', '#bate').val()) 
        + parseInt($('input[name="QL"]:checked', '#bate').val()) 
        + parseInt($('input[name="QJ"]:checked', '#bate').val()) 
      + parseInt($('input[name="QK"]:checked', '#bate').val()))

    
    });
  */}
  </script>

        {/* Dynamically generate the final submission score on the bottom of the page as they fill it out, so there is some sort of feedback before they submit */}
        <input id="submit_button" type="submit" value="Sumbit form " onclick="displ"/>
    
    </form>

</div>
    ); export default bates;