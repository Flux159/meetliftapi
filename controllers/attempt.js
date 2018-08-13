/**
 * GET /books
 * List all books.
 */
var db = require('../models/sequelize');

exports.getAttempts = function(req, res) {
  db.Attempt.findAll({
      include: {
          model: db.CompPart
      }}
  ).then(function(docs) {
    res.render('attempts', { 
      title: 'attempt',
      attempts: docs });
  });
};