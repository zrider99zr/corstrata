import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import { Redirect } from 'react-router-dom'

class patientPage extends Component {
  constructor() {
      super();
      this.state = {
          loggedIn: false,
          date: "",
          patient: "test",
      };   
    }

  //sends user input to the backend for storage
  submitForm() {
      fetch('http://165.227.191.245/corstrata/api/index.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/.json',
          },
          body: JSON.stringify({
              request: 'changePassword',
              oldPassword: this.state.oldPass,
              newPassword: this.state.newPass,
              token: sessionStorage.getItem("token"),
          })
      })
          .then((response) => response.json())
          .then((res) => {
              alert(res.message);
          })
          .catch((error) => {
              alert(error.message);
          });
  }

  //validates user && jwt on the backend
  validateUser() {
      fetch('http://165.227.191.245/corstrata/api/index.php', {
          method: 'POST',
          headers: {
              'Accept': 'application/.json',
          },
          body: JSON.stringify({
              request: 'validateJWT',
              token: sessionStorage.getItem("token"),
          })
      })
          .then((response) => response.json())
          .then((res) => {

              if (res.status === 1) {
                  this.setState({ loggedIn: true });

              } else if (res.status === 0) {
                  this.setState({ loggedIn: false });
              }
          })
          .catch((error) => {
              alert(error.message);
          })
  }
  
  render() {
    const columns = [{
      Header: 'Date-Taken',
      accessor: 'date' // String-based value accessors!
    }, {
      Header: 'Patient',
      accessor: 'name',
      //accessor: d => d.friend.name // Custom value accessors!
    }, {
      Header: 'Tests-Type',
      accessor: 'test',
    },    
      ]

    if (this.state.loggedIn === false) {
        return (<Redirect to={'/loginPage'} />)
    }
    return (

      <div>
        <div>
            <button  id="changeButton" type="submit" >Create Test</button>
        </div>
        <div className="container">
                <div className="">
                    <label className="patientName" id="patient-name">{this.state.patient}</label>
            </div>  
            <ReactTable
            columns={columns}
            />
        </div>
    </div>
    );
};
}
export default patientPage;