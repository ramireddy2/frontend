import React, { Component } from 'react';

class FormTaskOne extends Component {
    state = {
        username: '',
        password: '',
        emailid: '',
        error: {
            emailidError: '',
            passwordError: ''
        },
        pattern: '',
        formValid: false,
        errorSubmit: ''
    }

    handleChange = (e) => {
        /* console.log(e.target.id);

        this.setState({
            [e.target.id]: e.target.value
        }) */
        if (e.target.id === 'emailid') {
            this.validateEmail(e.target.value);
        }
        if (e.target.id === 'password') {
            this.validatePassword(e.target.value);
        }
    }

    validateEmail = (val) => {
        console.log(val);
        let emailidError = this.state.error.emailidError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern =this.state.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");//regex
        if (val.trim() === '') {
            emailidError = 'Please Enter emailid';
            formValid = false;
        }
        else if (pattern.test(val)) {
            emailidError = 'Please Enter correct emailid like';
        }
        else {
            emailidError = '';
            formValid = true;
        }

        this.setState({
            emailid: val,
            error: { ...error, emailidError },
            formValid
        });
        return formValid;
    }

    validatePassword = (val) => {
        console.log(val);
        let passwordError = this.state.error.passwordError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = this.state.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$");

        if (val.trim() === '') {
            passwordError = 'Please Enter Age';
            formValid = false;
        }else if (pattern.test(val)){
            passwordError ='please enter pasword must have 8 digits with lower ,upper,digits and special';

        }
        else {
            passwordError = '';
            formValid = true
        }

        this.setState({
            password: val,
            error: { ...error, passwordError },
            formValid
        });
        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.formValid === true && this.validateEmail(this.state.emailid) && this.validatePassword(this.state.password)) {
            this.props.addInfo(this.state);
            this.setState({
                firstname: '',
                age: '',
                designation: '',
                errorSubmit: ''
            })
        }
        else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = 'Enter credentials';
            this.setState ({
                errorSubmit
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User Name : </label>
                    <input type="text" onChange={this.handleChange} value={this.state.username} id="username" placeholder="Enter user name" /><br></br>

                    <label>password : </label>
                    <input type="password" onChange={this.handleChange} value={this.state.password} id="password" placeholder="Enter password" /><br></br>

                    <label>email id : </label>
                    <input type="email" onChange={this.handleChange} value={this.state.emailid} id="emailid" placeholder="Enter emailid" /><br></br>

                    <button value="submit">Sign Up</button>
                </form>
            </div>
        )
    }

}
export default FormTaskOne;