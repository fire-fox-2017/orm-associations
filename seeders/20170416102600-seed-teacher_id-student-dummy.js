'use strict';
let db = require("../models");
module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return new Promise((res, rej) => {
      db.Student.findAll()
        .then(students => {
          let promise = students.map(student => {
            return new Promise((res, rej) => {
              db.Student.update({
                  TeacherId: Math.floor((Math.random() * 10) + 1)
                }, {
                  where: {
                    id: student.id
                  }
                })
                .then(data => {
                  console.log(`Update row...`);
                  res(data)
                })
                .catch(err => {
                  console.log(err.message);
                  rej(err)
                })
            })
          })

        })
    })
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
