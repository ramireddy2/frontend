import React from 'react';

const DisplayData = (props) => {
    const {employeeData} = props;
    const employeeList = employeeData.map(info =>{
        return(
            <div key={info.id}>
                <p>{info.name}</p>
                <p>{info.salary}</p>
                <p>{info.designation}</p>
            </div>
        )
    })
    return(
        <React.Fragment>
            {employeeList}
        </React.Fragment>
    )
}
export default DisplayData;