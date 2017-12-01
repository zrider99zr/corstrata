import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../styling/home.css'
import ReactTable from 'react-table';
import 'react-table/react-table.css'
//import '../styling/un.css'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            data: [],
            accountName: "",
            showTable: false,
        };
        getAccountName();
    }

    //========================================================================================================
    testPerson = () => {
        return {
            data: [],
            loading: false,
        };
    };

    getAccountName(){
        fetch('http://165.227.191.245/corstrata/api/index.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/.json',
            },
            body: JSON.stringify({
                request: 'getAccountName',
                token: sessionStorage.getItem("token"),
            })
        })
            .then((response) => response.json())
            .then((res) => {
                if(res.status === 1){
                    this.setState({accountName: res.accountName});
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    getSearch(e) {
        if(e.target.value != ""){
            this.setState({showTable: true});
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
                    for (var i = 0; i < res.search.length; i++) {
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
        else{
            this.setState({showTable: false});
        }
        
    }
    //========================================================================================================
    componentDidMount() {
        console.log(sessionStorage.getItem("token"));
        if (sessionStorage.getItem("token") == null || sessionStorage.getItem("token") == "" ) {
            this.setState({ loggedIn: false });
        } else {
            this.validateUser();
        }
    }

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
        const columns = [
            {
                Header: 'First Name',
                accessor: 'fName',
            }, {
                Header: 'Last Name',
                accessor: 'lName',
            },
        ]
        if (this.state.login === false) {
            return (<Redirect to={'/loginPage'} />)
        }

        return (
            <div className='classContainer' >
                <h1>Welcome, {this.state.accountName}, to the Corstrata Website!</h1>
                <Link className='button' to='./createPatient'>Create Patient</Link>


                <div className="containerl" >
                    <div className="container">
                        <input type="text" id="input" onInput={this.getSearch.bind(this)} />
                    </div >
                    <ReactTable 
                        style={this.state.showTable ? {} : { display: 'none' }}
                        columns={columns}
                        data={this.state.data}
                        className="-highlight"
                        getTdProps={(state, rowInfo, column, instance) => {
                            return {
                                onClick: (e, handleOriginal) => {
                                    console.log('Row patient id', rowInfo.original.pID)

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
            </div>
        );
    };
}
export default Home;