'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher_student = sequelize.define('Teacher_student', {
    teacher_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher_student.BelongsTo(models.Student,{
          foreignKey:'student_id'
        })
        Teacher_student.BelongsTo(models.Teacher,{
          foreignKey:'teacher_id'
        })
      }
    }
  });
  return Teacher_student;
};
