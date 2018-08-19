
import React from 'react';

import twentyfivelbs from './barbellcalc/25lbs.png'
import fortyfivelbs from './barbellcalc/45lbs.png'
import tenlbs from './barbellcalc/10lbs.png'
import fivelbs from './barbellcalc/5lbs.png'
import twolbs from './barbellcalc/2lbs.png'
import onelbs from './barbellcalc/1lbs.png' 
import collarlink from './barbellcalc/collar.png' 

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
    [45,   0,<img key={0} src={fortyfivelbs} alt='45'/>],
    [25,   0,<img key={1} src={twentyfivelbs} alt='25'/>  ],
    [15,0,  <img key={2} src={fortyfivelbs} alt='15' /> ],
    [10,   0, <img key={3} src={tenlbs} alt='10'/>],
    [5,    0, <img key={4} src={fivelbs} alt='5' />],
    [2.5,  0, <img key={5} src={twolbs} alt='2.5'/>],
    [1.25, 0, <img key={6} src={onelbs} alt ='1.5'/>],
]
const collarimg =  <img key={7} src={collarlink} alt='collar'/>
  
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
            <span>{bar_rhs}</span>
        )
    }
};
  
export default BarbellCalc;
