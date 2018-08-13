/**
 * GET /books
 * List all books.
 */
var db = require('../models/sequelize');

exports.getAttempts = function(req, res) {
  db.Attempt.findAll({
      attributes:['attempt_num', 'attempt_weight', 'CompPart.team', 'CompPart.Person.person_last_name',
       'CompPart.Person.person_first_name'],
      include: {
          model: db.CompPart,
          include :[
              db.Person,
          ]
      },
    }
  ).then(function(docs) {
    res.render('attempts', { 
      title: 'attempt',
      attempts: docs });
  });
};