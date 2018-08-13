
module.exports = function(db, DataTypes) {
    var CompEvent = db.define('CompEvent', {
      comp_event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
 
      compeventName: DataTypes.STRING,
      compeventOrder: DataTypes.INTEGER,
      no_of_events: DataTypes.INTEGER,
      flight: DataTypes.STRING,
    }, {
      tableName: 'comp_event',
/*
      classMethods: {
        associate: (models) => {
          Attempt.belongsTo(models.Comp, {
            foreignKey: 'compID',
          });
        },
        associate: (models) => {
            Attempt.belongsTo(models.Event, {
              foreignKey: 'eventID',
            });
          },
      },
*/
     
    });
  
    return CompEvent;
  };