'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //Release 1
        // Student.belongsTo(models.Teacher, {
        //   foreignKey: "TeacherId"
        // })
        //Release 2
        Student.belongsToMany(models.Teacher, {
          through: 'StudentTeacher',
          foreignKey: 'StudentId'
        })
      }
    }
  });
  return Student;
};
