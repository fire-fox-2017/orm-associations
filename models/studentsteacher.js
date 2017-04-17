'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentsTeacher = sequelize.define('StudentsTeacher', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentsTeacher;
};