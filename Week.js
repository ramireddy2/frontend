import React, { Component } from 'react';
import WeekTask from './WeekTask';
import WeekCard from './WeekCard';

class Week extends Component {
  state = {
    personData: []
  }
  weekTask = (props) => {
    console.log(props);
    let personData = [...this.state.personData, props];
    this.setState({
      personData
    })
  }
  render() {
    return (
      <div>
        <WeekTask weekTask={this.weekTask} />
        <WeekCard data={this.state.personData} />
      </div>
    )
  }
}
export default Week;