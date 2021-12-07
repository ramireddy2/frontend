import React from 'react';

const TaskDisplay = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            {data.map(info => {
                return (
                    <div>
                        <p>Name: {info.firstname}</p>
                        <p>Date Of Birth: {info.dateofbirth}</p>
                        <p>Email id: {info.emailid}</p>
                        <p>Contact Number: {info.contactnumber}</p>
                        <p>Tell me  about yourself: {info.tellmeaboutyourself}</p>
                        <p>Designation: {info.designation}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskDisplay;