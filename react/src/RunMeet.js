
import React from 'react';
import BarbellCalc from './BarbellCalc';
import LifterTable from './LifterTable.js';

import ReactCountdownClock from "react-countdown-clock";
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

class RunMeet extends React.Component {
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
    <LifterTable lifters={this.state.lifters}/>
    </div>
    </div>
  );
  }
} 

export default RunMeet;
