'use strict';
module.exports = function(sequelize, DataTypes) {
  var student_teacher = sequelize.define('student_teacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        student_teacher.belongsTo(models.Student)
        student_teacher.belongsTo(models.Teacher)
      }
    }
  });
  return student_teacher;
};
