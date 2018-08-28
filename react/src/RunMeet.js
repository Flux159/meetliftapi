
import React from 'react';
import BarbellCalc from './BarbellCalc';
import RunMeetTable from './RunMeetTable.js';


import ReactCountdownClock from "react-countdown-clock";
import "react-table/react-table.css";


var data=[];


class RunMeet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
    };
    this.renderEditable = this.renderEditable.bind(this);
  }
  componentDidMount() {
    this.getAttempts();
  }

  async getAttempts() {
    const res = await fetch('/getRunMeet');
    const data = await res.json();
    this.setState({data});
    console.log(data)
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
}
  render() { 
    /*const attemptsElements = this.state.data.map((attempt) => {
      return <div key ={attempt.person_name}> {attempt.person_name}  {attempt.sqt1}  </div>;
    });*/


  return (
    <div >
      RUN MEET
      <RunMeetTable data={this.state.data} />

    </div>
  );
  }
} 

export default RunMeet;
