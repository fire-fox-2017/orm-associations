'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: {
      type: DataTypes.STRING,
      validate: {
        isUnique: function(value, next) {
          Teacher.find({where: {name: value}})
            .then((value) => {
              if(value) {
                return next(new Error("Name is already taken."));
              } else {
                return next();
              }
            });
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique: function(value, next) {
          Teacher.find({where: {email: value}})
            .then((value) => {
              if(value) {
                return next(new Error("Email is already taken."));
              } else {
                return next();
              }
            });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Validation error: Phone length must be 10-13 digits."
        },
        isAlpha: function(value) {
          let val = String(value);
          if(!(/^[0-9]+$/g.test(val))) {
            throw new Error("Validation error: Phone cannot be alphanumeric.")
          }
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student, {through: models.StudentTeacher, foreignKey: "teacher_id"});
      },
      getAllData: function(callback) {
        Teacher.findAll()
          .then((teachers) => {
            callback(teachers);
          })
          .catch((err) => {
            callback(err);
          });
        },
        delete: function(id) {
          Teacher.destroy({where : {"id": id}})
            .then((destroyed) => {
              if(destroyed > 0) {
                console.log(`Removed Teacher with id ${id} from table, ${destroyed} data deleted`);
              } else {
                console.log(`ID is not found`);
              }
            })
            .catch((err) => {
              return err;
            });
          }
    }
  });
  return Teacher;
};

/* Test Code
addTeacher("Dien", "aiueo@abjad.com", "987987987987");
// Error: SequelizeValidationError: Validation error: Name is already taken.
addTeacher("Budi", "flyboy@yeager.com", "111222333456");
// Error: SequelizeValidationError: Validation error: Email is already taken.
addTeacher("Budi", "flyboy@yeager@com", "111222333456");
// Error: SequelizeValidationError: Validation error: Validation isEmail failed
*/
