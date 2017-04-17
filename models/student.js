'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined
        // Student.belongsTo(models.Teacher)
        Student.belongsToMany(models.Teacher, {through : 'StudentTeacher'})

      }
    }
  });
  return Student;
};