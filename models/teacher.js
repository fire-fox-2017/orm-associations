'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
        isUnique: function(current, next) {
          let obj = this;
          Teacher.find({
            where: {email:current}
          })
          .then((teacher) => {
            // if another teacher want to use the same email, reject
            if (teacher && obj.id !== teacher.id) {
              return next('Email already in use!');
            }
            return next();
          })
          .catch((err) => {
            return next(err);
          });
        }
      }
    },
    phone: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Teacher.hasMany(models.Student, { foreignKey: 'teacher_id' });
        Teacher.belongsToMany(models.Student, {through: 'StudentTeacher'})
      }
    }
  });
  return Teacher;
};