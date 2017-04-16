'use strict';
module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        name: DataTypes.STRING,
        birth_date: DataTypes.STRING,
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
        height: {
            type: DataTypes.INTEGER,
            validate: {
                min: 150
            }
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [10, 13],
                    msg: `Phone length must be 10 - 13`
                },
                isNumeric: true,
                isAlphanumeric: {
                    msg: `Phone not allow alphanumeric`
                }
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                /* Release 0*/
                // Student.belongsTo(models.Teacher, {
                //     foreignKey: "teacher_id"
                // })

                /* Release 1 */
                Student.belongsToMany(models.Teacher, {
                    through: 'StudentTeacher',
                    foreignKey: 'student_id'
                })
            },
            // getAllData: function(callback) {
            //     Student.findAll()
            //         .then(rows => {
            //             callback(rows)
            //         })
            // }
        },
        instanceMethods: {
            // getAge: function() {
            //     let tempBirtdate = this.birth_date.split('-')
            //     let hasilPengurangan = 2017 - Number(tempBirtdate[0])
            //     return `${this.name}: ${hasilPengurangan} age`
            // }
        }
    });
    return Student;
};