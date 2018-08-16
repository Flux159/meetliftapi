/**
 * GET /books
 * List all books.
 */
var db = require('../models/sequelize');

exports.getAttempts = function(req, res) {
  db.Attempt.findAll({

    attributes:['attempt_num', 'attempt_weight'],
    include:[{
      model: db.CompPart,
      attributes: ['team' ],
      include: [{
          model:db.Person,
          attributes:['person_first_name','person_last_name'],
      }]
    },{
      model: db.CompEvent,
      attributes: ['comp_event_name'],
      where: {'comp_event_id':1},
    }]
  }).then(function(docs) {
  res.render('attempts', { 
    title: 'attempt',
    attempts: docs });
  });
};

exports.setAttempts = function (req,res){
  

};