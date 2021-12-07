import React, { Component } from 'react';
import AddInfo from './AddInfo';
import AddDisplay from './AddDisplay';

class Add extends Component {
  state = {
    formData: []
  }
  addInfo = (props) => {
    console.log(props);
    // spread opeartor
    let formData = [...this.state.formData, props];
    this.setState({
      formData
    })
  }

  render() {
    return (
      <div>
        <h3>Hello</h3>
        <AddInfo addInfo={this.addInfo} />
        <AddDisplay data={this.state.formData} />
      </div>
    )
  }
}
export default Add;