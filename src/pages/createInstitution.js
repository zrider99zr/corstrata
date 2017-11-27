import React, { Component } from 'react'

class createInstitution extends Component{
    render() {
        return (
            <div>
                <form id="accountForm" action="#" method="POST" encType="multipart/form-data">
                    <br />
                    <div className="row">
                        <input type="text" onInput={this.updateText.bind(this)} name="email" placeholder="email@gmail.com" />Email <br />
                        <input type="text" onInput={this.updateText.bind(this)} name="fname" placeholder="First Name" />First Name <br />
                    </div>
                </form>
           </div>
        );
    };
}
export default createInstitution