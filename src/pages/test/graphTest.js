import React, { Component } from 'react';
//import '../styling/searchPatient.css';
//import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css'




class testGraph extends Component {
    testPerson = () => {
        return {
            data: [],
            loading: false,
        };
    };

    makeData() {
        
    };

    testAddGraph(){

    };

    fillTables() {

    };

    constructor() {
        super();
        this.state = {
            data: [],
        };

    }

    render() {
        //data={data}
        const columns = [
            {
                Header: 'Patient ID',
                accessor: 'pID', // String-based value accessors!
            }, {
                Header: 'First Name',
                accessor: 'fName',
            }, {
                Header: 'Last Name',
                accessor: 'lName',
            },
        ]

        return (


            <div className="containerl" >
                <div className="container">
                    <form className="searchform"  >

                        <label id="Header"> Search Patient</label>
                        <input type="text" id="input" />
                        <div><button>Search</button></div>

                    </form>
                </div >
                <ReactTable
                    columns={columns}
                    data={this.state.data}
            
                />
            </div>

        );
    };
}
export default testGraph;