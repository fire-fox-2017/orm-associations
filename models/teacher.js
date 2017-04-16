'use strict';
module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define('Teacher', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isUnique: (value, next) => {
                    Teacher.find({
                            where: {
                                email: value
                            }
                        })
                        .then((teacher) => {
                            if (teacher) {
                                next(`Email sudah digunakan`)
                            } else {
                                next()
                            }
                        })
                        .catch(err => {
                            console.log(err.message);
                        })
                }
            }
        },
        phone: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                /* Release 0 */
                // Teacher.hasMany(models.Student)

                /* Release 1 */
                Teacher.belongsToMany(models.Student, {
                    through: 'StudentTeacher',
                    foreignKey: 'teacher_id'
                })
            }
        }
    });
    return Teacher;
};