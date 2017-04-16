'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next) {
          var self = this;
          Teacher.find({
              where: {
                name: value
              }
            })
            .then(function(user) {
              if (user && self.id !== user.id) {
                return next('Name already in use!');
              }
              return next();
            })
            .catch(function(err) {
              return next(err);
            });
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Email address harus mengandung '@ ' dan '.'`
        },
        isUnique: function(value, next) {
          var self = this;
          Teacher.find({
              where: {
                email: value
              }
            })
            .then(function(user) {
              if (user && self.id !== user.id) {
                return next('Email already in use!');
              }
              return next();
            })
            .catch(function(err) {
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
        //Teacher.hasMany(models.Student) Realease 1
        //Realease 2
        Teacher.belongsToMany(models.Student, {
          through: 'StudentTeacher',
          foreignKey: 'TeacherId'
        })

      },
      getAllData: function(callback) {
        Teacher.findAll().then(arrRow => {
          callback(arrRow);
        });
      }
    }
  });
  return Teacher;
};
