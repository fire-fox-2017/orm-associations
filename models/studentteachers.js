'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeacher.belongsTo(models.Student, {foreignKey: "student_id"});
        StudentTeacher.belongsTo(models.Teacher, {foreignKey: "teacher_id"});
      },
      getAllData: function(callback) {
        StudentTeacher.findAll()
          .then((rows) => {
            callback(rows);
          })
          .catch((err) => {
            callback(err);
          });
        },
        delete: function(id) {
          StudentTeacher.destroy({where : {"id": id}})
            .then((destroyed) => {
              if(destroyed > 0) {
                console.log(`Removed Student-Teacher assignment with id ${id} from table, ${destroyed} data deleted`);
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
  return StudentTeacher;
};
