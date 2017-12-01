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

export function makeData(len = 400) {
    return range(len).map(d => {
        return {

            ...testPerson(),
            children: range(4).map(testPerson)
        };
    });
}

<<<<<<< HEAD
=======
    makeData() {
        var rows = this.state.data
        var row = {
            pID: 2,
            fName: "Abe",
            lName: "Bee",
        }
        rows.push(row)
        this.setState({
            data: rows,
        })
    };

    testAddGraph(){
        
    };

    fillTables() {
        /*
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
            */
    };
>>>>>>> 3fc0dcd0358d3386bfb18f6815ad3c066cacbd71

class testGraph extends Component {
    constructor() {
        super();
        this.state = {
<<<<<<< HEAD
            data: makeData()
=======
            data: [],
>>>>>>> 3fc0dcd0358d3386bfb18f6815ad3c066cacbd71
        };
    }

    render() {
        const { data } = this.state
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
                    <form className="searchform"  >

                        <label id="Header"> Search Patient</label>
                        <input type="text" id="input" />
                        <div><button>Search onClick={this.makeData.bind(this)}</button></div>

                    </form>
                </div >
                <ReactTable
                    data={data}
                    columns={columns}
<<<<<<< HEAD
=======
                    data={this.state.data}
            
>>>>>>> 3fc0dcd0358d3386bfb18f6815ad3c066cacbd71
                />
            </div>

        );
    };
}
export default testGraph;