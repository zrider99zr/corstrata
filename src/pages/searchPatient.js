import React,{Component} from 'react';
import '../styling/home.css'
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
            Header: 'Last Name',
            accessor: 'lName',
            //accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: 'First Name',
            accessor: 'fName',
          },    
        ]

    return(


    <div className="containerl" >
        <div class="container">
        <form class="searchform"  >       
            
            <label id="Header" style={{marginLeft:"10em",border:"5px"}}> Search Patient</label>
            <input  type="text" id="input" />
            <div><button className="button" style={{marginLeft:"5em"}}>Search</button></div>
                    
         </form>
    </div >
    <ReactTable
            columns={columns}
            className="-highlight"
            
            />  
</div>
   
    ) ;
    };
}
export default searchPatient;
