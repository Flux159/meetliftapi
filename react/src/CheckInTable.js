
import React from 'react';
import ReactTable from "react-table";

class CheckInTable extends React.Component{

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
                Header: "Flight",
                accessor: "flight",
              },
              {
                Header: "Team",
                accessor: "team",
              },
              {
                Header: "Est. Weight",
                accessor: "est_weight",
              },
              {
                Header: "Final Weight",
                accessor: "final_weight",
                Cell: this.renderEditable
              },
              {
                Header: "Sqt RH",
                accessor: "squat_rh",
                Cell: this.renderEditable
              },
              {
                Header: "Press RH",
                accessor: "bench_rh",
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

  export default CheckInTable;