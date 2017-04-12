'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
        isUnique: function (value, next) {
                    var self = this;
                    Teacher.find({where: {email: value}})
                        .then(function (teacher) {
                            // reject if a different teacher wants to use the same email
                            if (teacher && self.id !== teacher.id) {
                                return next('Email already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }

      }

    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Student, { foreignKey: 'teacher_id' })
      }
    }
  });
  return Teacher;
};