import React, { Component, useContext} from "react";

export const employeeContext = useContext(employeeDataaContext);

export class Data extends Component {
    state = {
        employeeData: [{ name: "ram", salary: 25000, id: 1, designation: "tester" },
        { name: "ramu", salary: 15000, id: 2, designation: "engineer" },
        { name: "raju", salary: 35000, id: 3, designation: "developer" },
        { name: "vinod", salary: 19000, id: 1, designation: "developer" }]
    }
    render() {
        return (
            <div>
                <employeeContext.Data value={this.state.employeeData}>
                {this.props.children}
                </employeeContext.Data>
            </div>
        )
    }
}
