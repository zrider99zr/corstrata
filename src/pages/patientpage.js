import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
//import '../styling/resetPassword.css';


class patientPage extends Component {
  constructor() {
      super();
      this.state = {
      

      };
      
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
  

    return (

      <form>
      <div>
      <button  id="changeButton" type="submit" >Create Test</button>
      
        </div>
     <div className="container">

        <div className="">
              <label className="patientName" id="patient-name">Andrew Allen</label>

        </div>  

             <ReactTable
           columns={columns}
          />

    </div>
    </form>
    );
};
}
export default patientPage;