import React, { Component } from 'react';
//import '../styling/searchPatient.css';
//import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css'



const testPerson = () => {
    return {
        pID: "78",
        firstName: "John",
        lastName: "Doe",
    };
};

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr;
};

class testGraph extends Component {
    constructor() {
        super();
        this.state = {
            data: makeData()

        };

    }

    makeData(len = 10) {
        return range(len).map(d => {
            return {
                ...testPerson(),
            }
        });
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
                />
            </div>

        );
    };
}
export default testGraph;