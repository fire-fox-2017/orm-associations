'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.TEXT,
      validate: {
        isEmail: true,
        isUnique: (value, next) => {
          // let self = this
          Student.find({
            where : { email : value }
          }).then((student) => {
            if(student) {
              return next('Email sudah digunakan !')
            } else{
              return next()
            }
          }).catch((err) => {
            return next(err.message)
          })
        }
      }
    },
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // TEACHER HAS MANY STUDENTS
        Teacher.belongsToMany(models.Student, {through : 'student_teachers'})
      }
    }
  });
  return Teacher;
};
