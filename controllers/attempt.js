
var db = require('../models/sequelize');
var _ = require('lodash');
const sequelize = require('sequelize');
const {Attempt, CompPart, Person, CompEvent} = db;

exports.getAttempts = function(req, res) {
  Attempt.findAll({
    attributes:['attempt_num', 'attempt_weight','attemptid'],
    include:[{
      model: CompPart,
      attributes: ['team' ],
      include: [{
          model: Person,
          attributes:['person_first_name','person_last_name'],
      }]
    },{
      model: CompEvent,
      attributes: ['comp_event_name'],
      where: {'comp_event_id':1},
    }]
  }).then(function(docs) {
  res.render('attempts', { 
    title: 'attempt',
    attempts: docs });
  });
};


/**
 * If you want to call this in react code, do this:
 * 
fetch('/attemptsJSON').then(res => {
  res.json();
}).then(data => {
  console.log(data);
});

In an async function, you would be able to do something like this:
async function myFun() {
  try {
    const res = await fetch('/attemptsJSON');
    const data = await res.json();
  } catch (err) {
    // Handle errors here
  }
}
 */
exports.getCheckIn = function(req, res) {
  db.sequelize.query(" select p.person_id, p.person_first_name || ' ' || p.person_last_name  as person_name, cp.flight, cp.team, cp.est_weight, cp.final_weight, cp.squat_rh, cp.bench_rh   from comp_participant cp   inner join person p on cp.person_id=p.person_id   order by cp.flight "
  ,  { type: sequelize.QueryTypes.SELECT})
  .then(function(docs) {
    res.json(docs);
  });
};

//rename this
exports.postAttempts = function(req, res) {
  // Handle stuff

  console.log(req);
  console.log(req.body);

  res.json({data: 'hi'});
};

exports.setAttempts = function (req,res){

};


// THIS IS WHAT I NEED TO WORK ON
exports.getRunMeet = function(req, res) {
  CompPart.findAll({
    attributes:['team','flight','comp_part_id'],
    include:[{
      model: Person,
      attributes: [ 'person_first_name','person_last_name'],
    },{
      model: Attempt,
      attributes:['attempt_num', 'attempt_weight','attemptid','comp_event_id' ],
      include: [{
        model: CompEvent,
        attributes:['comp_short_name'],
    }]
    }],
  }).then(function(docs) {
    
    //var jsondocs = docs.toJson();
    //console.log(jsondocs);
    /*var att = jsondocs.Attempts;
    var res = _.pick(jsondocs,['team','flight','comp_part_id','Person']);
    //res['person_name']=docs.Person.person_first_name.concat(docs.Person.person_last_name);

    for(var i=0; i<jsondocs.Attempts.length ; ++i){
        var event =att[i].CompEvent.comp_short_name.concat(att[i].attempt_num)
        res[event]=_.pick(att[i], ['attempt_num', 'attempt_weight', 'attemptid' ,'comp_event_id' ]);
    };*/
  res.json(docs)
  });
};

/*
exports.postAttempt = function (req,res){
  //query
  // .then(function(docs))
  // if post succesful, 
  //docs is just the attempt result 
  

  // .catch(// if the post fails, set error to true )
  
}; */
