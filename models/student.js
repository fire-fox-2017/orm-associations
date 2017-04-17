'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.BelongsToMany(models.Teacher,{
          through:'Teacher_students',
          foreignKey: '',
        })
      }
    }
  });
  return Student;
};
