import React from 'react';
import '../styling/searchPatient.css';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';



const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]





const searchPatient = () => (

    <div className="containerl" >
<div class="container">
        <form class="searchform"  >       
               <div id="top" >
            <label id="Header"> Search </label>
            <input  type="text" id="input" />
            <div><button>Create Patient</button></div>
            </div>             
            <ReactTable
            columns={columns}
                />
         </form>
    </div >  
</div>
    ) ;
export default searchPatient
