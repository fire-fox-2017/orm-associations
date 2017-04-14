'use strict';
const db = require('../models')
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return new Promise(function(res,rej) {
      db.Student.findAll()
      .then(function(students) {
        var promises = students.map(function(student) {
          return new Promise(function(resolve, reject) {
            student.update(
              {name: `${student.first_name} ${student.last_name}`},
              {where: {id: student.id}}
            )
            .then(function(student_update) {
              resolve(student_update)
            })
            .catch(function(err) {
              reject(err)
            })
          })
        })
        Promise.all(promises)
        .then(function() {
          res()
        })
        .catch(function() {
          rej()
        })
      })
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
