
module.exports = function(db, DataTypes) {
    var Attempt = db.define('Attempt', {
      attemptid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
 
      attempt_num: DataTypes.INTEGER,
      attempt_weight: DataTypes.STRING,
      attempt_result: DataTypes.BOOLEAN,
    }, {
      tableName: 'attempt',
      timestamps: false,

      classMethods: {
        associate: (models) => {
          Attempt.belongsTo(models.CompPart, {
            foreignKey: 'comp_part_id',
          });
        },
        associate: (models) => {
          Attempt.belongsTo(models.CompEvent, {
            foreignKey: 'comp_event_id',
          });
        },
      },   
    })/*
    Attempt.associate = function (db) {
      CompPart.belongsTo(db.CompPart, { 
       foreignKey: 'comp_part_id'
      })
    }*/;
  
    return Attempt;
  };