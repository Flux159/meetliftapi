import React from "react";

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
        var remainder= this.props.lifters[this.props.currlifter].sqt1 - bar - collar*2;
        var bar_rhs ="";
        for (var i =0; i<loadedbar.length; i++){
            loadedbar[i][1]=Math.min(Math.floor(remainder/(2*loadedbar[i][0]),plateinv[i][1]));
            remainder= remainder - loadedbar[i][0]* loadedbar[i][1] *2;
            
            for(var j=0; j<loadedbar[i][1];j++){
                bar_rhs.concat('<span>' + loadedbar[i][0]+ '</span>')
            }
        }
  
        return(
            <span> 45 </span>
        )
    }
  
  };