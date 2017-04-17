'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.BelongsToMany(models.Student,{
          through:'Teacher_students',
          foreignKey:'teacher_id',
        })
      }
    }
  });
  return Teacher;
};
