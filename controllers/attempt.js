
var db = require('../models/sequelize');
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
exports.getAttemptsJSON = function(req, res) {
  db.sequelize.query("select p.person_id, p.person_first_name, p.person_last_name, p.gender, cp.final_weight, cp.squat_rh, cp.bench_rh, cp.team, cp.flight from comp_participant cp   inner join person p on cp.person_id=p.person_id",
  { type: sequelize.QueryTypes.SELECT}).then(function(docs) {
    res.json(docs);
    //console.log(docs)
  });
};

exports.postAttempts = function(req, res) {
  // Handle stuff
  console.log(req);
  console.log(req.body);

  res.json({data: 'hi'});
};

exports.setAttempts = function (req,res){

};

exports.getRunMeet = function(req, res) {
  db.sequelize.query("select p.person_first_name ||' '|| p.person_last_name, ce.comp_event_name, a.attempt_num, a.attempt_weight from attempt a   inner join comp_participant cp on a.comp_part_id=cp.comp_part_id     inner join comp_event ce on a.comp_event_id=ce.comp_event_id     inner join person p on cp.person_id=p.person_id",
  { type: sequelize.QueryTypes.SELECT}).then(function(docs) {
    res.json(docs);
    //console.log(docs)
  });
};
