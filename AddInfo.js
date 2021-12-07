import React, { Component } from "react";

class AddInfo extends Component {
    state = {
        firstname: "",
        age: "",
        dateofbirth: '',
        password: "",
        emailid: "",
        error: {
            firstnameError: "",
            ageError: "",
            dateofbirthError:"",
            passwordError: "",
            emailError: "",
        },
        formValid: false,
        errorSubmit: "",
    }

    handleChange = (e) => {
        console.log(e.target.id);
        console.log(e.target.value);

        if (e.target.id === "firstname") {
            this.validateName(e.target.value);
        }
        if (e.target.id === "age") {
            this.validateAge(e.target.value);
        }
        if (e.target.id === "dateofbirth") {
            this.validateDateOfBirth(e.target.value);
        } 
        if (e.target.id === "password") {
            this.validatePassword(e.target.value);
        }
        if (e.target.id === "emailid") {
            this.validateEmailId(e.target.value);
        }
    }

    validateName = (val) => {
        console.log(val);
        let firstnameError = this.state.error.firstnameError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === "") {
            firstnameError = "Please Enter Name";
            formValid = false;
        }

        else {
            firstnameError = "";
            formValid = true;
        }

        this.setState({
            firstname: val,
            error: { ...error, firstnameError },
            formValid,
        });
        return formValid;
    }

    validateAge = (val) => {
        console.log(val);
        let ageError = this.state.error.ageError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === "") {
            ageError = "Please Enter Age";
            formValid = false;
        } else {
            ageError = "";
            formValid = true;
        }

        this.setState({
            age: val,
            error: { ...error, ageError },
            formValid,
        })
        return formValid;
    }


    validateDateOfBirth = (val) => {
        console.log(val);
        let dateofbirthError = this.state.error.dateofbirthError;
        let formValid = this.state.formValid;
        let error = this.state.error;
    
        if (val.trim() === "") {
            dateofbirthError = "Please Enter date of birth";
            formValid = false;
        } else {
            dateofbirthError = "";
            formValid = true;
        }
    
        this.setState({
            designation: val,
            error: { ...error, dateofbirthError },
            formValid,
        })
        return formValid;
    }
    validatePassword = (val) => {
        console.log(val);
        let passwordError = this.state.error.passwordError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/; //regex

        if (val.trim() === "") {
            passwordError = "Please Enter a valid Password";
            formValid = false;
        } else if (pattern.test(val)) {
            passwordError = "Please Enter a strong Password";
            formValid = false;
        } else {
            passwordError = "";
            formValid = true;
        }

        this.setState({
            password: val,
            error: { ...error, passwordError },
            formValid,
        })
        return formValid;
    }

    validateEmailId = (val) => {
        console.log(val);
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[a-z]/; //regex

        if (val.trim() === "") {
            emailError = "Please Enter a valid Email Id ";
            formValid = false;
        } else if (pattern.test(val)) {
            emailError = "Please Enter a Email Id with all requirements";
            formValid = false;
        } else {
            emailError = "";
            formValid = true;
        }

        this.setState({
            emailid: val,
            error: { ...error, emailError },
            formValid,
        })
        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.formValid === true &&
            this.validateAge(this.state.age) &&
            this.validateName(this.state.firstname) &&
            this.validateDateOfBirth(this.state.dateofbirth) &&
            this.validatePassword(this.state.password) &&
            this.validateEmailId(this.state.emailid)
        ) {
            this.props.addInfo(this.state);
            this.setState({
                firstname: "",
                age: "",
                dateofbirth:"",
                password: "",
                emailid: "",
                errorSubmit: "",
            })
        } else {
            let errorSubmit = this.state.errorSubmit;
            errorSubmit = "enter all the details";

            this.setState({
                errorSubmit,
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.firstname} id="firstname" placeholder="Enter first name" />
                    <p>{this.state.error.firstnameError}</p>

                    <label>Age</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.age} id="age" placeholder="Enter Age" />
                    <p>{this.state.error.ageError}</p>

                    <label>Date Of Birth</label>
                    <input
                    type="date" onChange={this.handleChange} value={this.state.dateofbirth} id="dateofbirth" placeholder="Enter Date Of Birth" />
                    <p>{this.state.error.dateofbirthError}</p>

                    <label>Password</label>
                    <input
                        type="password" onChange={this.handleChange} value={this.state.password} id="password" placeholder="Enter password" />
                    <p>{this.state.error.passwordError}</p>

                    <label>Email Id</label>
                    <input
                        type="email" onChange={this.handleChange} value={this.state.emailid} id="emailid" placeholder="Enter Valid Email Id" />
                    <p>{this.state.error.emailError}</p>

                    <p>{this.state.errorSubmit}</p>
                    <button value="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}
export default AddInfo;

