import React, { Component } from 'react'
import { Redirect, } from 'react-router-dom'

class pressureWoundTest2 extends Component {
    constructor() {
        super();
        this.state = {
            size: 0.0,
            depth: 0,
            edges: 0,
            undermining: 0,
            necroticTissType: 0,
            necroticTissAmount: 0,
            exudateType: 0,
            exudateAmount: 0,
            scsw: 0,
            preiphTissEdema: 0,
            periphTissInduration: 0,
            granulationTissue: 0,
            epithelialization: 0,
            loggedIn: true,

        };
    }

    test() {
        console.log(this.state);
    }

    updateText(e) {
        if (e.target.name === "size") {
            this.setState({ size: e.target.value });

        } else if (e.target.name === "depth") {
            this.setState({ depth: e.target.value });

        } else if (e.target.name === "edges") {
            this.setState({ edges: e.target.value });

        } else if (e.target.name === "edges") {
            this.setState({ undermining: e.target.value });

        } else if (e.target.name === "undermining") {
            this.setState({ udnermining: e.target.value });

        } else if (e.target.name === "necTissType") {
            this.setState({ necroticTissType: e.target.value });

        } else if (e.target.name === "necTissAmount") {
            this.setState({ exudateAmount: e.target.value });

        } else if (e.target.name === "exudateType") {
            this.setState({ exudateType: e.target.value });

        } else if (e.target.name === "exudateAmount") {
            this.setState({ exudateAmount: e.target.value });

        } else if (e.target.name === "surroundingWound") {
            this.setState({ scsw: e.target.value });

        } else if (e.target.name === "periphTissueEdema") {
            this.setState({ preiphTissEdema: e.target.value });

        } else if (e.target.name === "periphTissInduration") {
            this.setState({ periphTissInduration: e.target.value });

        } else if (e.target.name === "granulation") {
            this.setState({ granulationTissue: e.target.value });

        } else if (e.target.name === "epith") {
            this.setState({ epithelialization: e.target.value });

        }
    }

    render() {
        return (
            <div>
                <div align="center">
                    <label>Wound location(click the column which corresponds to the affiliated side of the body)</label>
                    <input type="checkbox" />Left Sacrum & Coccyx <input type="checkbox" />Sacrum & Coccyx <br/>
                    <input type="checkbox" />Left Trochanter <input type="checkbox" />Right Trochanter <br />
                    <input type="checkbox" />Left Ischial Tuberosity <input type="checkbox" />Right Ischial Tuberosity <br />
                    <input type="checkbox" />Left Lateral Ankle <input type="checkbox" />Right Lateral Ankle <br />
                    <input type="checkbox" />Left Medial Ankle <input type="checkbox" />Right Medial Ankle <br />
                    <input type="checkbox" />Left Heel <input type="checkbox" />Right Heel <br /><br />
                </div>
                <div align="center">
                    <label>Wound Shape(Overall Wound Pattern; assess by observing perimeter and depth)</label>
                    <input type="checkbox" />Irregular <br />
                    <input type="checkbox" />Round/Oval <br />
                    <input type="checkbox" />Square/Rectangle <br />
                    <input type="checkbox" />Linear or Elongated <br />
                    <input type="checkbox" />Bowl/Boat <br />
                    <input type="checkbox" /> Butterfly <br />
                    <input type="checkbox" />Other <br /><br />
                </div>
                <div align="center">
                    <input type="input" name="size" onInput={this.updateText.bind(this)} /><br />Size: 0 = healed,resikved wound <br />
                    2 = Length x width less than 4sq cm <br />
                    3 = Length x width 4 to less than 16sq cm <br />
                    4 = Length x width 16.1 to less than 36sq cm <br />
                    5 = Length x width 36.1 to less than 80sq cm <br /><br /><br />

                    <input type="input" name="depth" onInput={this.updateText.bind(this)} /><br />Depth: 0 = healed, resolved wound <br />
                    1 = Non-blanchable erythema on intact skin <br />
                    2 = Partial thickness skin loss involving epidermins &/or dermis <br />
                    3 = Full thickness skin loss involving damage or necrosis of  <br />
                    subcutaneous tissue: may extend down to but not through underlying fascia; 
                    &/or mixed partial & full thickness &/or tissue layers obscured by granulation tissue. <br />
                    4 = Obscurred by necrosis. <br />
                    5 = Full thickness skin loss with extensive destruction, tissue necrosis or damage to muscle, bone or supporting structures. <br /><br /><br />

                    Edges<input type="input" name="edges" onInput={this.updateText.bind(this)} /><br />0 = healed, resolved wound <br />
                    1 = Indistinct, diffuse, none clearly visible. <br />
                    2 = Distinct, outline clearly visible, attached, even with wound base. <br />
                    3 = Well-defined, not attached to wound base. <br />
                    4 = Well-defined, noth to base, rolled under, thickend. <br />
                    5 = Well-defined, fibrotic, scarred or hyperkeratotic <br /><br /><br />
                    
                    Undermining<input type="input" name="undermining" onInput={this.updateText.bind(this)} /><br />0 = healed, resolved wound <br />
                    1 = None present. <br />
                    2 = Undermining less than 2cm in any area. <br />
                    3 = Undermining 2-4cm involving less than 50% of wound margins. <br />
                    4 = Undermining 2-4cm involving more than 50% of wound margins. <br />
                    5 = Undermining greater than 4cm or tunneling in any area. <br /><br /><br />

                    Necrotic Tissue Type<input type="text" name="necTissType" onInput={this.updateText.bind(this)} /><br />1 = None visible. <br />
                    2 = White/grey non-viable tissue &/or non-adherent yellow slough. <br />
                    3 = Loosely adherent yellow slough. <br />
                    4 = Adherent, soft, black eschar. <br />
                    5 = Firmly adherent, hard, black eschar. <br /><br /><br />

                    Necrotic Tissue Amount<input type="text" name="necTissAmount" onInput={this.updateText.bind(this)} /><br />1 = None visible
                    2 = less than 25% of wound bed covered. <br />
                    3 = 25% to 50% of wound covered. <br />
                    4 = 50% to 75% of wound covered. <br />
                    5 = 75% to 100% of wound covered. <br /><br /><br />

                    Exudate Type<input type="text" name="exudateType" onInput={this.updateText.bind(this)} /><br />1 = None. <br />
                    2 = Bloody. <br />
                    3 = Seronsanguineous: thin, watery, pale red/pink. <br />
                    4 = Serous: thin, watery, clear. <br />
                    5 = Purulent: thin or thick, opaque, tan/yellow, with or without odor. <br /><br /><br />

                    Exudate Amount<input type="text" name="exudateAmount" onInput={this.updateText.bind(this)} /><br />1 = None, dry wound.
                    2 = Scant, wound moist but no observable exudate. <br />
                    3 = Small. <br />
                    4 = Moderate. <br />
                    5 = Large. <br /><br /><br />

                    Skin color Surrounding Wound<input type="surroundingWound" onInput={this.updateText.bind(this)} /><br />1 = Pink or nomal for ethnic group. <br />
                    2 = Bright red &/or blanches to touch. <br />
                    3 = White or grey pallor or hypopigmented. <br />
                    4 = Dark red or purple &/or non-blanchable. <br />
                    5 = Black or hyperpigmented. <br /><br /><br />

                    Peripheral Tissue Edema<input type="text" name="periphTissueEdema" onInput={this.updateText.bind(this)} /><br />1 = No swelling or edema. <br />
                    2 = Non-pitting edema exteneds less than 4cm around wound. <br />
                    3 = greater than 4cm around wound. <br />
                    4 = Pitting edema extends less than 4cm around wound. <br />
                    5 = Crepitus and/or pitting edema extends greater than 4cm around. <br /><br /><br />

                    Peripheral Tissue Induration<input type="text" name="periphTissInduration" onInput={this.updateText.bind(this)} /><br />1 = none present. <br />
                    2 = Induration less than 2cm around wound. <br />
                    3 = Induration 2-4cm extending less than 50% around wound. <br />
                    4 = Induration 2-4cm extending more than 50% around wound. <br />
                    5 = Induration greater than 4cm in any area around wound. <br /><br /><br />

                    Granulation Tissue<input type="text" name="granulation" onInput={this.updateText.bind(this)} /><br />1 = Skin intact or partial thickness wound. <br />
                    2 = Bright, beefy red; 75% to 100% of wound filled &/or tissue overgrowth. <br />
                    3 = Bright, beefy red; less than 75% & greater tahn 25% of wound filled. <br />
                    4 = Pink, &/or dull, dusky red &/or fills less than or equal to 25% of wound. <br />
                    5 = No granulation tissue present. <br /><br /><br />

                    Epithelialization<input type="text" name="epith" onInput={this.updateText.bind(this)} /><br />1 = 100% wound covered, surface intact. <br />
                    2 = 75% to less than 100% wound covered &/or epithelial tissue. <br />
                    3 = 50% to less than 75% covered &/or epithelial. <br />
                    4 = 25% to less than 50% wound covered. <br />
                    5 = less than 25% wound covered. <br /><br /><br />

                    <input type="checkbox" />Is there external or internal hemorrhage from the wound? <br /><br />

                    <input type="checkbox" />Is there maceration present on or surrounding the wound?  <br /><br />

                    <input type="checkbox" />Do the edges of the wound appear to be contracting? <br /><br />

                    <input type="checkbox" />Has there been sustained contraction of the wound edges? <br /><br />

                    <button onClick={this.test.bind(this)} >Test</button>
                </div>
            </div>
        );
    };
}
export default pressureWoundTest2