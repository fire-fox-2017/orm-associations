'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type:DataTypes.TEXT,
      validate:{
        isEmail:true,
        isunique:function(value, next){
          let self = this
          Student.find({
            where:{
              email:value
            }
          }).then(function(student){
            if(student){
              return next('Email sudah ada')
            }
            return next()
          }).catch(function(err){
            return next(err)
          })
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Teacher.hasMany(models.Student)

        Teacher.belongsToMany(models.Student, {through:'StudentTeacher'})
        Teacher.hasMany(models.StudentTeacher)
      }
    }
  });
  return Teacher;
};