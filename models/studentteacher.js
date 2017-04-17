'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student, {
          foreignKey: 'StudentId'
        })
        StudentTeacher.belongsTo(models.Teacher, {
          foreignKey: 'TeacherId'
        })
      }
    }
  });
  return StudentTeacher;
};
