'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : true,
        isUnique : (value, next)=>{
          Teacher.find({
            where: {
              email : value
            }
          })
          .then((value) => {
            if(value){
              return next(new Error("Email Sudah Dipakai"));
            } else {
              return next();
            }
          })
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        //Release 1
        //Teacher.hasMany(models.Student)

        //Realease 2
        Teacher.belongsToMany(models.Student, {
          through: 'StudentTeacher',
          foreignKey: 'TeacherId'
        })
      }
    }
  });
  return Teacher;
};
