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

    /*
    fillTables() {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'patientSearch', 
                token: sessionStorage.getItem("token"),
                searchInput: this.state.search,

            })
        })
            .then((response) => response.json())
            .then((res) => {
                var rows = [];
                for(var i = 0; i < res.search.length;i++){
                    var row = {
                        pID: res.search[i].patientID,
                        fName: res.search[i].firstName,
                        lName: res.search[i].lastName,

                    }
                    rows.push(row)
                }
                this.setState({
                    data: rows,
                    loading: false,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    */

    constructor() {
        super();
        this.state = {
            data: [],
            search: "",
        };

    }

    getSearch(e) {
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'patientSearch', 
                token: sessionStorage.getItem("token"),
                searchInput: e.target.value,

            })
        })
            .then((response) => response.json())
            .then((res) => {
                var rows = [];
                for(var i = 0; i < res.search.length;i++){
                    var row = {
                        pID: res.search[i].patientID,
                        fName: res.search[i].firstName,
                        lName: res.search[i].lastName,

                    }
                    rows.push(row)
                }
                this.setState({
                    data: rows,
                    loading: false,
                })
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    render() {
        const columns = [
            {
                Header: 'Patient ID',
                accessor: 'pID', // String-based value accessors!
                Cell: props => <span className='number'>{props.value}</span>
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
                
                    <label id="Header"> Search Patient</label>
                    <input type="text" id="input" onInput={this.getSearch.bind(this)} />
                    <div><button onClick={this.fillTables.bind(this)}>Search </button></div>
                    
                </div >
                <ReactTable
                    columns={columns}
                    data={this.state.data}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                          onClick: (e, handleOriginal) => {
                            console.log('Row patient id',rowInfo.original.pID)
                    
                            // IMPORTANT! React-Table uses onClick internally to trigger
                            // events like expanding SubComponents and pivots.
                            // By default a custom 'onClick' handler will override this functionality.
                            // If you want to fire the original onClick handler, call the
                            // 'handleOriginal' function.
                            if (handleOriginal) {
                              handleOriginal()
                            }
                          }
                        }
                      }}

                />
            </div>

        );
    };
}
export default testGraph;