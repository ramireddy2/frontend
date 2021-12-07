import React, { Component } from "react";

class TaskInfo extends Component {
    state = {
        firstname: "",
        //dateofbirth: '',
        emailid: "",
        contactnumber: "",
        tellmeaboutyourself: "",
        designation: "",
        error: {
            firstnameError: "",
            //dateofbirthError: "",
            emailError: "",
            contactnumberError: "",
            tellmeaboutyourselfError: "",
            designationError: ""
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

        /* if (e.target.id === "dateofbirth") {
            this.validateDateOfBirth(e.target.value);
        } */

        if (e.target.id === "emailid") {
            this.validateEmailId(e.target.value);
        }
        if (e.target.id === "contactnumber") {
            this.validateContactNumber(e.target.value);
        }
        if (e.target.id === "tellmeaboutyourself") {
            this.validateTellMeAboutYourSelf(e.target.value);
        }
        if (e.target.id === "designation") {
            this.validateDesignation(e.target.value);
        }
    }

    validateName = (val) => {
        console.log(val);
        let firstnameError = this.state.error.firstnameError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern= /^[a-zA-Z\s]*$/;

        if (val.trim() === "") {
            firstnameError = "Please Enter Name";
            formValid = false;
        }else if(!(pattern.test(val))){
            firstnameError = "please enter name in alphabats";
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

    /* validateDateOfBirth = (val) => {
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
    } */

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

    validateContactNumber = (val) => {
        console.log(val);
        let contactnumberError = this.state.error.contactnumberError;
        let formValid = this.state.formValid;
        let error = this.state.error;
        let pattern =/^\d{10}$/;

        if (val.trim() === "") {
            contactnumberError = "Please Enter contact number";
            formValid = false;
        }else if(!(pattern.test(val))){
            contactnumberError = "Please Enter numbers only";
            formValid =false;
        } else {
            contactnumberError = "";
            formValid = true;
        }

        this.setState({
            contactnumber: val,
            error: { ...error, contactnumberError },
            formValid,
        })
        return formValid;
    }

    validateTellMeAboutYourSelf = (val) => {
        console.log(val);
        let tellmeaboutyourself = this.state.error.tellmeaboutyourselfError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === "") {
            tellmeaboutyourself = "Please  tell me about yourself";
            formValid = false;
        } else {
            tellmeaboutyourself = "";
            formValid = true;
        }

        this.setState({
            tellmeaboutyourself: val,
            error: { ...error, tellmeaboutyourself },
            formValid,
        })
        return formValid;
    }

    validateDesignation = (val) => {
        console.log(val);
        let designationError = this.state.error.designationError;
        let formValid = this.state.formValid;
        let error = this.state.error;

        if (val.trim() === "") {
            designationError = "Please Enter designation";
            formValid = false;
        } else {
            designationError = "";
            formValid = true;
        }

        this.setState({
            designation: val,
            error: { ...error, designationError },
            formValid,
        })
        return formValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (
            this.state.formValid === true &&
            this.validateContactNumber(this.state.contactnumber) &&
            this.validateName(this.state.firstname) &&
            //this.validateDateOfBirth(this.state.dateofbirth) &&
            this.validateDesignation(this.state.designation) &&
            this.validateEmailId(this.state.emailid) &&
            this.validateTellMeAboutYourSelf(this.state.tellmeaboutyourself)
        ) {
            this.props.taskInfo(this.state);
            this.setState({
                firstname: "",
                //dateofbirth: "",
                emailid: "",
                contactnumber: "",
                tellmeaboutyourself: "",
                designation: "",
                errorSubmit: ""
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

                    {/* <label>Date Of Birth</label>
                    <input
                        type="date" onChange={this.handleChange} value={this.state.dateofbirth} id="dateofbirth" placeholder="Enter Date Of Birth" />
                    <p>{this.state.error.dateofbirthError}</p> */}

                    <label>Email Id</label>
                    <input
                        type="email" onChange={this.handleChange} value={this.state.emailid} id="emailid" placeholder="Enter Valid Email Id" />
                    <p>{this.state.error.emailError}</p>

                    <label>contactnumber</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.contactnumber} id="contactnumber" placeholder="Enter your contact number" />
                    <p>{this.state.error.contactnumberError}</p>

                    <label>tell me about yourself</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.tellmeaboutyourself} id="tellmeaboutyourself" placeholder="Enter about yourself" />
                    <p>{this.state.error.tellmeaboutyourselfError}</p>

                    <label>Designation</label>
                    <input
                        type="text" onChange={this.handleChange} value={this.state.designation} id="designation" placeholder="Enter your designation" />
                    <p>{this.state.error.designationError}</p>

                    <p>{this.state.errorSubmit}</p>
                    <button value="submit">Sign Up</button>
                </form>
            </div>
        );
    }
}
export default TaskInfo;