
module.exports = function(db, DataTypes) {
    var CompPart = db.define('CompPart', {
      comp_part_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      person_id: DataTypes.INTEGER,
      flight: DataTypes.STRING,
      team: DataTypes.STRING,
      est_weight: DataTypes.DOUBLE,
      final_weight: DataTypes.DOUBLE,
      squat_rh: DataTypes.INTEGER,
      bench_rh: DataTypes.INTEGER,
    }, {
      tableName: 'comp_participant',
      timestamps: false,

      classMethods: {
        associate: (models) => {
          CompPart.hasMany(models.Attempt,{foreignKey: 'comp_part_id',} );
          CompPart.belongsTo(models.Person,{foreignKey: 'person_id',} );
        },

      },
  
    });
    return CompPart;
  };