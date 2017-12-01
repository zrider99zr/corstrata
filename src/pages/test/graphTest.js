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
                    loading={this.state.loading}
                    data={this.state.data}
                    onFetchData={(state, instance) =>{
                        this.setState({loading: true})

                        fetch('http://165.227.191.245/corstrata/api/index.php', {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/.json',
                            },
                            body: JSON.stringify({
                                request: 'patientSearch', 
                                token: sessionStorage.getItem("token"),
                            })
                        })
                            .then((response) => response.json())
                            .then((res) => {
                                var rows = [];
                                for(var i = 0; i < res.search.length;i++){
                                    var row = {
                                        patientID: res.search[i].patientID,
                                        firstName = res.search[i].firstName,
                                        lastName = res.search[i].lastName,
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
                    }}
                />
            </div>

        );
    };
}
export default testGraph;