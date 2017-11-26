import React from 'react'; 
//import $ from 'jquery';

const bates = () => (
    
<form id="bate" action="#" method="POST" encType="multipart/form-data">


  <div class="row">
    <label for="name">Size</label>
    <br></br>
  </div>

  <input type="radio" class="calcs" name="QA" value="1" checked/>
  <label>1 = Length x width less than 25%4 sq cm</label>
  <br></br>
  <input type="radio" class="calc" name="QA" value="2" />
  <label> 2 = Length x width 4-- less than 25%16 sq cm </label>
  <br></br>
  <input type="radio" class="calc" name="QA" value="3" />
  <label> 3 = Length x width 16.1-- less than 25%36 sq cm </label>
  <div> </div>
  <input type="radio" class="calc" name="QA" value="4" />
  <label> 4 = Length x width 36.1-- less than 25%80 sq cm </label>
  <br></br>
  <input type="radio" class="calc" name="QA" value="5" />
  <label> 5 = Length x width >80 sq cm </label>
  <br></br>

  <br></br>

  <div class="row">
    <label for="email"> Depth </label>
  </div>
  <br></br>

  <input type="radio" class="calc" name="QB" value="1" checked/>
  <label> Non-blanchable erythema on intact skin </label>
  <br></br>
  <input type="radio" class="calc" name="QB" value="2" />
  <label> Partial thickness skin loss involving epidermis /or dermis </label>
  <div></div>
  <input type="radio" class="calc" name="QB" value="3" />
  <label> Full thickness skin loss involving damage or necrosis of subcutaneous tissue; may extend down to but not through underlying fascia; &/or mixed partial & full thickness &/or tissue layers obscured bygranulation tissue </label>

  <br></br>
  <input type="radio" class="calc" name="QB" value="4" />
  <label> Obscured by necrosis </label>

  <br></br>

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

  <input type="radio" class="calc" name="QC" value="1" checked/>
  <label> Indistinct, diffuse, none clearly visible </label>
  <br></br>

  <input type="radio" class="calc" name="QC" value="2" />
  <label> Distinct, outline clearly visible, attached, even with wound base </label>
  <br></br>
  <input type="radio" class="calc" name="QC" value="3" />
  <label> Well-defined, not attached to wound base </label>
  <br></br>

  <input type="radio" class="calc" name="QC" value="4" />
  <label> Well-defined, not attached to base, rolled under, thickened </label>
  <br></br>

  <input type="radio" class="calc" name="QC" value="5" />
  <label> Well-defined, fibrotic, scarred or hyperkeratotic </label>
  <br></br>

  <div>
  </div>
  <br></br>

  <label for="QC">undermining </label>
  <br></br>
  <input type="radio" class="calc" name="QM" value="1" checked/>
  <label> None present </label>
  <br></br>

  <input type="radio" class="calc" name="QM" value="2" />
  <label> Undermining less than 2 cm in any area </label>
  <br></br>
  <input type="radio" class="calc" name="QM" value="3" />
  <label> Undermining 2-4 cm involving less than 50% wound margins </label>
  <br></br>

  <input type="radio" class="calc" name="QM" value="4" />
  <label> Undermining 2-4 cm involving greater than 50% wound margins </label>
  <br></br>

  <input type="radio" class="calc" name="QM" value="5" />
  <label> Undermining greater than 4 cm or Tunneling in any area </label>
  <br></br>
  <br></br>

  <label for="QC">Necrotic Tissue Type </label>
  <br></br>
  <input type="radio" class="calc" name="QD" value="1" checked/>
  <label> None visible </label>
  <br></br>

  <input type="radio" class="calc" name="QD" value="2" />
  <label> White/grey non-viable tissue or non-adherent yellow slough </label>
  <br></br>
  <input type="radio" class="calc" name="QD" value="3" />
  <label> Loosely adherent yellow slough </label>
  <br></br>

  <input type="radio" class="calc" name="QD" value="4" />
  <label> Adherent, soft, black eschar </label>
  <br></br>

  <input type="radio" class="calc" name="QD" value="5" />
  <label> Firmly adherent, hard, black eschar </label>
  <br></br>

  <br></br>

  <label for="QE">Necrotic Tissure Amounts </label>
  <br></br>
  <input type="radio" class="calc" name="QE" value="1" checked/>
  <label> None visible </label>
  <br></br>
  <input type="radio" class="calc" name="QE" value="2" />
  <label> less than 25% of wound bed covered </label>
  <br></br>
  <input type="radio" class="calc" name="QE" value="3" />
  <label> less than 50% and more 75% of wound covered </label>
  <br></br>
  <input type="radio" class="calc" name="QE" value="4" />
  <label> less than 50% and more than 75% of wound covered </label>
  <br></br>

  <input type="radio" class="calc" name="QE" value="5" />
  <label> 75% to 100% of wound covered </label>
  <br></br>

  <br></br>

  <label for="QC">Exudate Type </label>
  <br></br>
  <input type="radio" class="calc" name="QF" value="1" checked/>
  <label> None </label>
  <br></br>

  <input type="radio" class="calc" name="QF" value="2" />
  <label> Bloody </label>
  <br></br>
  <input type="radio" class="calc" name="QF" value="3" />
  <label> Serosanguineous: thin, watery, pale red/pink </label>
  <br></br>

  <input type="radio" class="calc" name="QF" value="4" />
  <label> Serous: thin, watery, clear </label>
  <br></br>

  <input type="radio" class="calc" name="QF" value="5" />
  <label>Purulent: thin or thick, opaque, tan/yellow, with or without odor </label>

  <br></br>

  <br></br>

  <label for="QC">Exudate Amount </label>
  <br></br>
  <input type="radio" class="calc" name="QG" value="1" checked/>
  <label> None </label>
  <br></br>

  <input type="radio" class="calc" name="QG" value="2" />
  <label> Scant, wound moist but no observable exudate </label>
  <br></br>
  <input type="radio" class="calc" name="QG" value="3" />
  <label> Small </label>
  <br></br>

  <input type="radio" class="calc" name="QG" value="4" />
  <label> Moderate </label>
  <br></br>

  <input type="radio" class="calc" name="QG" value="5" />
  <label> Large </label>
  <br></br>

  <br></br>

  <label for="QC">Skin Color Surrrounding Wound </label>
  <br></br>
  <input type="radio" class="calc" name="QH" value="1" checked/>
  <label> Pink or normal for ethnic group </label>
  <br></br>

  <input type="radio" class="calc" name="QH" value="2" />
  <label> Bright red or blanches to touch </label>
  <br></br>
  <input type="radio" class="calc" name="QH" value="3" />
  <label> White or grey pallor or hypopigmented </label>
  <br></br>

  <input type="radio" class="calc" name="QH" value="4" />
  <label> Dark red or purple or non-blanchable </label>
  <br></br>

  <input type="radio" class="calc" name="QH" value="5" />
  <label> Black or hyperpigmented </label>
  <br></br>
  <br></br>

  <label for="QC">Peripheral Tissue Edema </label>
  <br></br>
  <input type="radio" class="calc" name="QI" value="1" checked/>
  <label> No swelling or edema </label>
  <br></br>

  <input type="radio" class="calc" name="QI" value="2" />
  <label> Non-pitting edema extends less than 4 cm around wound </label>
  <br></br>
  <input type="radio" class="calc" name="QI" value="3" />
  <label> Non-pitting edema extends less 4 cm around wound </label>
  <br></br>
  <input type="radio" class="calc" name="QI" value="4" />
  <label> Pitting edema extends less than 4 cm around wound </label>
  <br></br>

  <input type="radio" class="calc" name="QI" value="5" />
  <label> Crepitus and/or pitting edema extends greater than 4 cm around wound </label>

  <br></br>
  <br></br>

  <label for="QC">Peripheral Tissue Induration </label>
  <br></br>
  <input type="radio" class="calc" name="QL" value="1" checked/>
  <label> None present </label>
  <br></br>

  <input type="radio" class="calc" name="QL" value="2" />
  <label> Induration, lrss than 2 cm around wound </label>
  <br></br>
  <input type="radio" class="calc" name="QL" value="3" />
  <label> Induration 2-4 cm extending less than 50% around wound </label>
  <br></br>

  <input type="radio" class="calc" name="QL" value="4" />
  <label> Induration 2-4 cm extending greater than 50% around wound </label>
  <br></br>
  <input type="radio" class="calc" name="QL" value="5" />
  <label> Induration greater than 4 cm in any area around wound </label>

  <br></br>
  <br></br>


  <label for="QC">Granulation Tissue </label>
  <br></br>
  <input type="radio" class="calc" name="QJ" value="1" checked/>
  <label> Skin intact or partial thickness wound </label>
  <br></br>

  <input type="radio" class="calc" name="QJ" value="2" />
  <label> Bright, beefy red; 75% to 100% of wound filled /or tissue overgrowth </label>
  <br></br>
  <input type="radio" class="calc" name="QJ" value="3" />
  <label> Bright, beefy red; less than 75% and less 25% of wound filled </label>
  <br></br>

  <input type="radio" class="calc" name="QJ" value="4" />
  <label> Pink, and/or dull, dusky red and/or fills less than 25% of wound </label>
  <br></br>

  <input type="radio" class="calc" name="QJ" value="5" />
  <label> No granulation tissue present </label>
  <br></br>
  <br></br>

  <label for="QC">Epithelialization </label>
  <br></br>
  <input type="radio" class="calc" name="QK" value="1" checked/>
  <label> 100% wound covered, surface intact </label>
  <br></br>

  <input type="radio" class="calc" name="QK" value="2" />
  <label> 75% to less than 100% wound covered /or epithelial tissue extends greater than 0.5cm into wound bed </label>
  <br></br>
  <input type="radio" class="calc" name="QK" value="3" />
  <label> 50% to less than 75% wound covered or epithelial tissue extends to less than 0.5cm into wound bed </label>

  <br></br>

  <input type="radio" class="calc" name="QK" value="4" />
  <label> 25% to less than 50% wound covered </label>
  <br></br>

  <input type="radio" class="calc" name="QK" value="5" />
  <label> less than 25% wound covered </label>

  <br></br>

  <p id="insert">
  </p>

  <input type="submit" />
  <input type="text" name="result" id="textbox3" />
    </form>

    ); export default bates;
    

    {/* calculates total sum but does store it yet, order of additon is required
    < <script>

$("#submitt").on('change', function () {


    alert(parseInt($('input[name="QA"]:checked', '#bate').val())
        + parseInt($('input[name="QB"]:checked', '#bate').val())
        + parseInt($('input[name="QC"]:checked', '#bate').val())
        + parseInt($('input[name="QM"]:checked', '#bate').val())
        + parseInt($('input[name="QD"]:checked', '#bate').val())
        + parseInt($('input[name="QE"]:checked', '#bate').val())
        + parseInt($('input[name="QF"]:checked', '#bate').val())
        + parseInt($('input[name="QG"]:checked', '#bate').val())
        + parseInt($('input[name="QH"]:checked', '#bate').val())
        + parseInt($('input[name="QI"]:checked', '#bate').val())
        + parseInt($('input[name="QL"]:checked', '#bate').val())
        + parseInt($('input[name="QJ"]:checked', '#bate').val())
        + parseInt($('input[name="QK"]:checked', '#bate').val())


    )


});

 // </script > */}


