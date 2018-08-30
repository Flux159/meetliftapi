import React from 'react';
import BarbellCalc from './BarbellCalc';
import ReactTable from "react-table";

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

  return (
    <div >
      RUN MEET

    <button > Good Lift </button> <br/> 
    <button> Bad Lift </button> <br/>

      <ReactTable
            columns={[{
              Header: "Lifter",
              columns: [{
                  Header: "Name",
                  accessor: "person_name"
                },]
              },{
              Header: "Squat",
              columns: [{
                  Header: "Squat 1",
                  accessor: "sqt1",
                  Cell: this.renderEditable
                },{
                  Header: "Squat 2",
                  accessor: "sqt2",
                  Cell: this.renderEditable
               },{
                Header: "Squat 3",
                accessor: "sqt3",
                Cell: this.renderEditable
             }]
            },{
              Header: "Press",
              columns: [{
                  Header: "Press 1",
                  accessor: "prs1",
                  Cell: this.renderEditable
                },{
                  Header: "Press 2",
                  accessor: "prs2",
                  Cell: this.renderEditable
               },{
                Header: "Press 3",
                accessor: "prs3",
                Cell: this.renderEditable
             }]
            },{
              Header: "Deadlift",
              columns: [{
                  Header: "Deadlift 1",
                  accessor: "dl1",
                  Cell: this.renderEditable
                },{
                  Header: "Deadlift 2",
                  accessor: "dl2",
                  Cell: this.renderEditable
               },{
                Header: "Deadlift 3",
                accessor: "dl3",
                Cell: this.renderEditable
             }]
            }
          ]
            }
            defaultSorted={[
              {
                id: "sqt1",
                desc: false
              }
            ]}
            data= {this.state.data}
            defaultPageSize={10}
            className="-striped -highlight"
          />

    </div>
  );
  }
} 

export default RunMeet;