import React from 'react';
import '../styling/searchPatient.css';
import { Link } from 'react-router-dom';

const searchPatient = () => (
    <div className="container">

        <div className="logo"> LOGO </div>
        <div className="b">
            <label className="lab">Welcome,</label>
            <button type="button" className="b"><Link to='resetPassword'>Change Password</Link></button>
            <button type="button" className="b">Logout</button>
        </div>

        <div className="class">
                             {/*come back to replace the function here with the actual functionality*/}
            <input type="search" id="myInput" onKeyUp="myFunction()" placeholder="search for patient..." className="searchPatient" />

            <table className="blueTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>SSN</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="2">
                            <div className="links"><a href="#">&laquo;</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>cell1_1</td>
                            <td>cell2_1</td>
                        </tr>
                        <tr>
                            <td>cell1_2</td>
                            <td>cell2_2</td>
                        </tr>
                        <tr>
                            <td>cell1_3</td>
                            <td>cell2_3</td>
                        </tr>
                        <tr>
                            <td>cell1_4</td>
                            <td>cell2_4</td>
                        </tr>
                        <tr>
                            <td>cell1_5</td>
                            <td>cell2_5</td>
                        </tr>
                        <tr>
                            <td>cell1_6</td>
                            <td>cell2_6</td>
                        </tr>
                        <tr>
                            <td>cell1_7</td>
                            <td>cell2_7</td>
                        </tr>
                        <tr>
                            <td>cell1_8</td>
                            <td>cell2_8</td>
                        </tr>
                    </tbody>
                </table>
    
  </div>
</div>

    ) 

export default searchPatient