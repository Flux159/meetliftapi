
module.exports = function(db, DataTypes) {
    var CompEvent = db.define('CompEvent', {
      comp_event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      comp_id: DataTypes.INTEGER,
      event_id: DataTypes.INTEGER,
      comp_event_name: DataTypes.STRING,
      comp_event_order: DataTypes.INTEGER,
      no_of_attempts: DataTypes.INTEGER,
      flight: DataTypes.STRING,
    }, {
      tableName: 'comp_event',
      timestamps: false,

      classMethods: {
        associate: (models) => {
          CompEvent.hasMany(models.Attempt, {foreignKey: 'comp_event_id',});
          CompEvent.belongsTo(models.Event, {foreignKey: 'eventid',})
        },
      },

     
    });
  
    return CompEvent;
  };