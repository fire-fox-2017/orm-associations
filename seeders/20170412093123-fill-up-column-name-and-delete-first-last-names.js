'use strict';

const db = require('../models');

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

    console.log("test");

    db.Student.findAll()
    .then ( students => {
      console.log("lalal")
      console.log(students);
      students.forEach (student => {
        console.log(JSON.stringify(student.toJSON()));
      })
    })

    // db.Student.getAllData( students => {
    //   console.log("haha")
    //   students.forEach (student => {
    //     console.log(JSON.stringify(student.toJSON()));
    //   })

    // })





    // return [
    //   queryInterface.removeColumn('students', 'first_name'),
    //   queryInterface.removeColumn('students', 'last_name')
    // ];




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
