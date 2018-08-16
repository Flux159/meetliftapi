
module.exports = function(db, DataTypes) {
    var Event = db.define('Event', {
      eventid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
 
      event_name: DataTypes.STRING,

    }, {
      tableName: 'event',
      timestamps: false,

      classMethods: {
        associate: (models) => {
          Event.hasMany(models.CompEvent, {foreignKey: 'eventid'});
        },
      },
    });
  
    return Event;
  };