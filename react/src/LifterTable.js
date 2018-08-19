
import React from 'react';
import ReactTable from "react-table";

class LifterTable extends React.Component{

    render() {
      var arrayofobj =[];
      for (var person=0; person < this.props.lifters[0][0].length; ++person){ // traverse through lifters 
        var lifterobject ={ name:     this.props.lifters[0][0][person][0],
                            sqt1:     this.props.lifters[0][0][person][1],
                            sqt1_res: this.props.lifters[0][0][person][2],
                            sqt2:     this.props.lifters[0][1][person][1],
                            sqt2_res: this.props.lifters[0][1][person][2],
                            sqt3:     this.props.lifters[0][2][person][1],
                            sqt3_res: this.props.lifters[0][2][person][2],
                            prs1:     this.props.lifters[1][0][person][1],
                            prs1_res: this.props.lifters[1][0][person][2],
                            prs2:     this.props.lifters[1][1][person][1],
                            prs2_res: this.props.lifters[1][1][person][2],
                            prs3:     this.props.lifters[1][2][person][1],
                            prs3_res: this.props.lifters[1][2][person][2]}
        arrayofobj.push(lifterobject)
       }
  
      return (
        <div>
          <ReactTable
            columns={ [
              {
                Header: "Name",
                accessor: "name" ,     
              },
              {
                Header: "Squat 1",
                accessor: "sqt1",
                Cell: ({row,original})   => (
                  <div style={{
                    backgroundColor: original.sqt1_res === true ? '#85cc00'
                      : original.sqt1_res === false? '#FF0000'
                      : '#ffffff',
                  }}> {row.sqt1} </div>
                )
              },
              {
                Header: "Squat 2",
                accessor: "sqt2",
                Cell: ({row,original})   => (
                  <div style={{
                    backgroundColor: original.sqt2_res === true ? '#85cc00'
                      : original.sqt2_res === false? '#FF0000'
                      : '#ffffff',
                  }}> {row.sqt2} </div>
                )
              },
              {
                Header: "Squat 3",
                accessor: "sqt3",Cell: ({row,original})   => (
                  <div style={{
                    backgroundColor: original.sqt3_res === true ? '#85cc00'
                      : original.sqt3_res === false? '#FF0000'
                      : '#ffffff',
                  }}> {row.sqt3} </div>
                )
              },
              {
                Header: "Press 1",
                accessor: "prs1",
                Cell: ({row,original})   => (
                  <div style={{
                    backgroundColor: original.prs1_res === true ? '#85cc00'
                      : original.prs1_res === false? '#FF0000'
                      : '#ffffff',
                  }}> {row.prs1} </div>
                )
              },
              {
                Header: "Press 2",
                accessor: "prs2",
                Cell: ({row,original})   => (
                  <div style={{
                    backgroundColor: original.prs2_res === true ? '#85cc00'
                      : original.prs2_res === false? '#FF0000'
                      : '#ffffff',
                  }}> {row.prs2} </div>
                )
              },
            ]}
            data= {arrayofobj}
            onFetchData={this.fetchData}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          </div>
      );
    }
};

  export default LifterTable;