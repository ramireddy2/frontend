import React, { Component } from 'react';
import TaskInfo from './TaskInfo';
import TaskCard from './TaskCard';

class Task extends Component {
  state = {
    personData: []
  }

  taskInfo = (props) => {
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
        
        <TaskInfo taskInfo={this.taskInfo} />
        <TaskCard data={this.state.personData}/>
      </div>
    )
  }
}

export default Task;