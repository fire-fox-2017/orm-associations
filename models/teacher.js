'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.belongsToMany(models.Student, {through:models.StudentsTeacher,foreignKey: 'teacher_id'})
      }
    }
  });
  return Teacher;
};