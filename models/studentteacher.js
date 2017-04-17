'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student)
        StudentTeacher.belongsTo(models.Teacher)
      }
    }
  });
  return StudentTeacher;
<<<<<<< HEAD
};
=======
};
>>>>>>> 4450d009c9e41d607fe74bedb10fa5a32dd35b8a
