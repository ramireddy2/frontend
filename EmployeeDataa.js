import React, { Component } from 'react';
import DisplayData from './DisplayData';
import { EmployeeDataaContext } from './EmployeeDataaContext';

class EmployeeDataa extends Component {
    static contextType = EmployeeDataaContext;
    render() {
        return(
            <React.Fragment>
                <DisplayData employeeList={this.context}></DisplayData>
            </React.Fragment>
        )
    }

}
export default EmployeeDataa;
