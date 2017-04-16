'use strict';
module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define('Teacher', {
        name: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isUnique: function(value, next) {
                    if (value) {
                        Student
                            .find({
                                where: {
                                    email: value
                                }
                            })
                            .then((err) => {
                                if (err) {
                                    return next('Error')
                                } else {
                                    next()
                                }
                            })
                    }
                }
            }
        },
        phone: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // Teacher.hasMany(models.Student)

                Teacher.belongsToMany(models.Student, {
                    through: 'StudentTeacher',
                    foreignKey: 'TeacherId'
                })
            }
        }
    });
    return Teacher;
};
