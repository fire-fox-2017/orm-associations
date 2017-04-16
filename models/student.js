'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth: DataTypes.DATE,
    email:{
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
        // Student.belongsTo(models.Teacher)

        Student.belongsToMany(models.Teacher, {through:'StudentTeacher'})
        Student.hasMany(models.StudentTeacher)
      }
    }
  });
  return Student;
};