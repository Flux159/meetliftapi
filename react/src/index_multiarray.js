import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from "react-table";
import ReactCountdownClock from "react-countdown-clock";

import "react-table/react-table.css";

var lifters =[
    [ // event level
      [ // squat; event 0, attempt 0
        ['Adam', 86, null],
        ['Bob', 173, null],
        ['Charlie', 100, null],
      ],
      [  // squat; event 0, attempt 1      
        ['Adam', 95, null],
        ['Bob', 184, null],      
        ['Charlie', 110, null],
      ],
      [  // squat; event 0, attempt 2      
        ['Adam', 102, null],
        ['Bob', 193, null],
        ['Charlie', 120, null]
      ], [ // press; event 1, attempt 0
        ['Adam', 60, null],
        ['Bob', 84, null],
        ['Charlie', 35, null],
      ],
      [  // press; event 1, attempt 1      
        ['Adam', 66, null],
        ['Bob', 89, null],      
        ['Charlie', 35, null],
      ],
      [  //press; event 1, attempt 2      
        ['Adam', 70, null],
        ['Bob', 89, null],
        ['Charlie', 40, null]
      ]
    ]
  ]; 


function sortlift(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

var initialsort = lifters.sort()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifters: initialsort,
      currevent :0,
      currattempt:0,
      currlifter :0,
      timerpaused: true,
      time:60
    };
  }
  nextlift(res){ 
    // set the result of the lift 
    let updatelifter =[...this.state.lifters]
    updatelifter[this.state.currevent][this.state.currattempt][this.state.currlifter][2]=res

    var newtime = this.state.time + 0.0000001;

    var nextlifter =  (this.state.currlifter +1) % this.state.lifters[this.state.currevent][this.state.currattempt].length ;
    var nextattempt = this.state.currattempt;

    if (this.state.currlifter === lifters[this.state.currevent][this.state.currattempt].length-1) { //reached end of attempt; move to next
      nextattempt= this.state.currattempt + 1 % lifters[this.state.currattempt].length ;
      updatelifter = updatelifter.sort(function(a, b){return a[this.state.currevent][nextattempt][0][1]-b[this.state.currevent][nextattempt][0][1]}); 
    }
    this.setState({
      currlifter: nextlifter,
      currattempt: nextattempt,
      lifters: updatelifter,
      timerpaused: true,
      time:newtime
    });
  }
  starttimer(){
    var updatetimepause=false;
    this.setState({
      timerpaused: updatetimepause
    });
  }
  render() { 
  
  var currlift=this.state.lifters[this.state.currevent][this.state.currattempt][this.state.currlifter][1]
  
  console.log("event", this.state.currevent, "attempt", this.state.currattempt,"lift", this.state.currlifter, this.state.lifters);

    return (
      <div >
      <div >
        Current Lifter: {this.state.lifters[this.state.currevent][this.state.currattempt][this.state.currlifter][0]} <br /> 
        Current Squat : {currlift} <br />
        Attempt: {this.state.currattempt+1} <br />
      <button onClick={() => this.starttimer() }> Bar is Loaded </button> <br/> <br/>
      <button onClick={() => this.nextlift(true)}> Good Lift </button> 
      <button onClick={() => this.nextlift(false) }> Bad Lift </button> <br/>
      <button onClick={() => this.nextlift(null) }> Next lifter </button>
      <button> Previous lifter </button>
      

      <ReactCountdownClock seconds={this.state.time}
        color="#000"
        alpha={1}
        size={100}
        paused ={this.state.timerpaused} />
 
      </div>
      <div>
      <Liftertable lifters={this.state.lifters}/>
      </div>
      </div>
    );
  }
}

//     <BarbellCalc lifters={this.state.lifters} currlifter={this.state.currlifter}/>

class Liftertable extends React.Component{

  render() {
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
          ]}
          data= {this.props.lifters}
          onFetchData={this.fetchData}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        </div>
    );
  }
}

const plateinv = [ 
  [25,   6],
  [20,   2],
  [15,   2],
  [10,   2],
  [5,    2],
  [2.5,  2],
  [1.25, 2],
  [.5,   2],
  [.25,  2],
]
const bar = 20; 
const collar = 2.5; 

var loadedbar = [ 
  [25, 0],
  [20, 0],
  [15, 0],
  [10, 0],
  [5, 0],
  [2.5, 0],
  [1.25, 0],
  [.5, 0],
  [.25, 0],
]
class BarbellCalc extends React.Component{
  
  render() {
      var remainder= this.props.lifters[this.props.currevent][this.props.currattempt][this.props.currlifter][1] - bar - collar*2;
      var bar_rhs =[];
      for (var i =0; i<loadedbar.length; i++){
          loadedbar[i][1]=Math.min(Math.floor(remainder/(2*loadedbar[i][0]),plateinv[i][1]));
          remainder= remainder - loadedbar[i][0]* loadedbar[i][1] *2;
          
          for(var j=0; j<loadedbar[i][1];j++){
              bar_rhs.push( loadedbar[i][0] + " ")
          };
      };
      bar_rhs.push("Collar")
      console.log(bar_rhs)

      return(
          <div>{bar_rhs} </div>
      )
  }

};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);