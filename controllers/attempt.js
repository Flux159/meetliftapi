/**
 * GET /books
 * List all books.
 */
var db = require('../models/sequelize');

const {Attempt, CompPart, Person, CompEvent} = db;

exports.getAttempts = function(req, res) {
  Attempt.findAll({

    attributes:['attempt_num', 'attempt_weight'],
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
  Attempt.findAll({
    attributes:['attempt_num', 'attempt_weight'],
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
    res.json(docs);
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