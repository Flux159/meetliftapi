
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
exports.getCheckIn = function(req, res) {
  db.sequelize.query("  select p.person_id, p.person_first_name || ' ' || p.person_last_name  as person_name, cp.flight, cp.team, cp.est_weight, cp.final_weight, cp.squat_rh, cp.bench_rh   from comp_participant cp   inner join person p on cp.person_id=p.person_id   order by cp.flight ",  { type: sequelize.QueryTypes.SELECT}).then(function(docs) {
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
  db.sequelize.query(" select * from   crosstab($$  select p.person_first_name || ' ' || p.person_last_name as person_name, ce.comp_event_order || ce.comp_event_name ||  attempt_num, attempt_weight  from attempt a  inner join comp_participant cp on a.comp_part_id=cp.comp_part_id inner join comp_event ce on a.comp_event_id=ce.comp_event_id   inner join person p on cp.person_id=p.person_id  where ce.flight='B'  order by person_name,  ce.comp_event_order || ce.comp_event_name ||  attempt_num    $$) as ct(person_name text, sqt1 numeric(7,2), sqt2 numeric(7,2), sqt3 numeric(7,2), prs1 numeric(7,2), prs2 numeric(7,2),prs3 numeric(7,2),  dl1 numeric(7,2) , dl2 numeric(7,2) ,dl3 numeric(7,2))",
  { type: sequelize.QueryTypes.SELECT}).then(function(docs) {
    res.json(docs);
    //console.log(docs)
  });
};
