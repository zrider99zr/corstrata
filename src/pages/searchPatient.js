import React,{Component} from 'react';
//import '../styling/searchPatient.css';
//import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css'



class searchPatient extends Component {
    constructor() {
        super();
        this.state = {
        
  
        };
        
    }



    render() {

        const columns = [{
            Header: 'Patients',
            accessor: 'Patients', // String-based value accessors!
          },]
        
        

    return(


    <div className="containerl" >
        <div class="container">
        <form class="searchform"  >       
            
            <label id="Header"> Search Patient</label>
            <input  type="text" id="input" />
            <div><button>Search</button></div>
                    
         </form>
    </div >
    <ReactTable
            columns={columns}
                />  
</div>
   
    ) ;
    };
}
export default searchPatient;
