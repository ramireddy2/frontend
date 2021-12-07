import React from 'react';

const FormTaskDisplay = (props) => {
    const { data } = props;
    console.log(data);

    return (
        <div>
            <h4>Data Display</h4>
            {data.map(info => {
                return (
                    <div>
                        <p>user name : {info.username}</p>
                        <p>password : {info.password}</p>
                        <p>email id : {info.emailid}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FormTaskDisplay;
