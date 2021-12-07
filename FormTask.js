import React, { Component } from 'react';
import FormTaskOne from './FormTaskOne';
import FormTaskDisplay from './FormTaskDisplay';

class FormTask extends Component {
    state = {
        personData: []
    }
    form = (props) => {
        console.log(props);
        // spread opeartor
        let personData = [...this.state.personData, props];
        this.setState({
            personData
        })
    }
    render() {
        return (
            <div>
                <p>Sign Up Form</p>
                <FormTaskOne form={this.form} />
                <FormTaskDisplay data={this.state.personData} />
            </div>
        )
    }

}
export default FormTask;