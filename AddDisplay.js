import React from 'react';

const AddDisplay = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            <h4>Data Display</h4>
            {data.map(info => {
                return (
                    <div>
                        <p>Name: {info.firstname}</p>
                        <p>Age: {info.age}</p>
                        <p>Date Of Birth: {info.dateofbirth}</p>
                        <p>Email id: {info.emailid}</p>
                        <p>Password: {info.password}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AddDisplay;