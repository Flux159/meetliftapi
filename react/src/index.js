import React from 'react';
import ReactDOM from 'react-dom';

import ReactTable from "react-table";
import ReactCountdownClock from "react-countdown-clock";
import twentyfivelbs from './barbellcalc/25lbs.png'
import fortyfivelbs from './barbellcalc/45lbs.png'
import tenlbs from './barbellcalc/10lbs.png'
import fivelbs from './barbellcalc/5lbs.png'
import twolbs from './barbellcalc/2lbs.png'
import onelbs from './barbellcalc/1lbs.png' 
import collarlink from './barbellcalc/collar.png' 
import "react-table/react-table.css";

var lifters =[ 
    [// squat;
      [ //  squat attempt 0
        ['Adam', 220, null],
        ['Bob', 145, null],
        ['Charlie', 245, null],
        ['David',305,null]
      ],
      [ //  squat attempt 1   
        ['Adam', 230, null],
        ['Bob', 155, null],      
        ['Charlie', 265, null],
        ['David',315,null]
      ],
      [ //squat attempt 2    
        ['Adam', 230, null],
        ['Bob', 165, null],
        ['Charlie', 275, null],
        ['David',335,null]
      ]
    ],
    [// press
      [  // press; event 1, attempt 0
        ['Adam', 105, null],
        ['Bob', 80, null],
        ['Charlie', 135, null],
        ['David',135, null]
      ],
      [  // press; event 1, attempt 1      
        ['Adam', 110, null],
        ['Bob', 87.5, null],      
        ['Charlie', 145, null],
        ['David',150,null]
      ],
      [  //press; event 1, attempt 2      
        ['Adam', 112.5, null],
        ['Bob', 92.5, null],
        ['Charlie', 152.5, null],
        ['David', 155, null]
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifters: lifters,
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
    // update time
    var newtime = this.state.time + 0.0000001;

    var nextlifter =  (this.state.currlifter +1) % updatelifter[this.state.currevent][this.state.currattempt].length ;
    var nextattempt = this.state.currattempt;
    var nextevent= this.state.currevent;

    if (this.state.currattempt === updatelifter[this.state.currevent].length-1 && this.state.currlifter ===updatelifter[this.state.currevent][this.state.currattempt].length-1){ // finish event; move to next  event
      nextevent = this.state.currevent + 1 % updatelifter.length;
      nextattempt = 0 ;// (this.state.currattempt + 1) % updatelifter[nextevent].length  
      nextlifter = 0 ;//  (this.state.currlifter + 1) % updatelifter[nextevent][nextattempt].length 

    } else if (this.state.currlifter === updatelifter[this.state.currevent][this.state.currattempt].length-1) { //finished attempt; move to next attempt
      nextattempt= this.state.currattempt + 1 % updatelifter[this.state.currevent].length ;
    }
    this.setState({
      currevent: nextevent,
      currattempt: nextattempt,
      currlifter: nextlifter,      
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
    
  // pull out subset and sort it
  var eventattempt = this.state.lifters[this.state.currevent][this.state.currattempt].sort(sortlift)
  var currlift=eventattempt[this.state.currlifter][1]
  
  return (
    <div >

    <span >
      Current Lifter: {eventattempt[this.state.currlifter][0]} <br /> 
      Attempt Weight : {currlift} <br />
      Attempt: {this.state.currattempt+1} <br />
    <button onClick={() => this.starttimer() }> Bar is Loaded </button> <br/> <br/>
    <button onClick={() => this.nextlift(true)}> Good Lift </button> 
    <button onClick={() => this.nextlift(false) }> Bad Lift </button> <br/>
    <button onClick={() => this.nextlift(null) }> Next lifter </button>
    <button> Previous lifter not built yet </button>
   

    <ReactCountdownClock seconds={this.state.time}
      color="#000"
      alpha={1}
      size={100}
      paused ={this.state.timerpaused} />

    </span>
    <span >
    <BarbellCalc lifters={this.state.lifters} currevent={this.state.currevent} currattempt={this.state.currattempt} 
    currlifter={this.state.currlifter}/>
    </span>

    <div>
    <Liftertable lifters={this.state.lifters}/>
    </div>
    </div>
  );
  }
} 

class Liftertable extends React.Component{

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
}

const plateinv = [ 
  [45,   6],
  [25,   2],
  [15,   0  ],
  [10,   2],
  [5,    2],
  [2.5,  2],
  [1.25, 2],
]
const bar = 45; // pounds
const collar = 5; // pounds

var loadedbar = [ 
  [45,   0,<img src={fortyfivelbs} alt='45'/>],
  [25,   0,<img src={twentyfivelbs} alt='25'/>  ],
  [15,0,  <img src={fortyfivelbs} alt='15' /> ],
  [10,   0, <img src={tenlbs} alt='10'/>],
  [5,    0, <img src={fivelbs} alt='5' />],
  [2.5,  0, <img src={twolbs} alt='2.5'/>],
  [1.25, 0, <img src={onelbs} alt ='1.5'/>],
]
const collarimg =  <img src={collarlink} alt='collar'/>

class BarbellCalc extends React.Component{
  render() {
      var remainder= this.props.lifters[this.props.currevent][this.props.currattempt][this.props.currlifter][1] - bar - collar*2;
      var bar_rhs =[];
      for (var i =0; i<loadedbar.length; i++){
          loadedbar[i][1]=Math.min(Math.floor(remainder/(2*loadedbar[i][0])) , plateinv[i][1] );
          remainder= remainder - loadedbar[i][0]* loadedbar[i][1] *2;
          
          for(var j=0; j<loadedbar[i][1];j++){
            bar_rhs.push(loadedbar[i][2])
          };
      };
      bar_rhs.push(collarimg)
      console.log(loadedbar)
      return(
          <span> {bar_rhs}    </span>
      )
  }

};


ReactDOM.render(
  <App />,
  document.getElementById('root')
);