
module.exports = function(db, DataTypes) {
    var Person = db.define('Person', {
      person_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
 
      person_first_name: DataTypes.STRING,
      person_last_name: DataTypes.STRING,
      person_dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      email : DataTypes.STRING,

    }, {
      tableName: 'person',
      timestamps: false,
      
      classMethods: {
        associate: (models) => {
          Person.hasMany(models.CompPart,{foreignKey: 'person_id',} );
        },
       
      },

     
    });
  
    return Person;
  };