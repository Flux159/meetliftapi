
import React from 'react';
import ReactTable from "react-table";

class RunMeetTable extends React.Component{

    render() {
      
      return (
        <div>
         <ReactTable
            columns={ [
              {
                Header: "Name",
                accessor: "person_name" ,     
              },
              {
                Header: "Squat 1",
                accessor: "sqt1",
                Cell: this.renderEditable
              },
              {
                Header: "Squat 2",
                accessor: "sqt2",
                Cell: this.renderEditable
              },
              {
                Header: "Squat 3",
                accessor: "sqt3",
                Cell: this.renderEditable
              },
              {
                Header: "Press 1",
                accessor: "prs1",
                Cell: this.renderEditable
              },
              {
                Header: "Press 2",
                accessor: "prs2",
                Cell: this.renderEditable
              },
              {
                Header: "Press 3",
                accessor: "prs3",
                Cell: this.renderEditable
              },
              {
                Header: "Deadlift 1",
                accessor: "dl1",
                Cell: this.renderEditable
              },
              {
                Header: "Deadlift 2",
                accessor: "dl2",
                Cell: this.renderEditable
              },
              {
                Header: "Deadlift 3",
                accessor: "dl3",
                Cell: this.renderEditable
              },
            ]}
            data= {this.props.data}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          </div>
      );
    }
};

  export default RunMeetTable;