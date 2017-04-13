'use strict';

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
    return queryInterface.bulkInsert('StudentTeachers', [{
      StudentId: 1,
      TeacherId: 1
    },{
      StudentId: 2,
      TeacherId: 1
    },{
      StudentId: 3,
      TeacherId: 2
    },{
      StudentId: 1,
      TeacherId: 3
    },{
      StudentId: 2,
      TeacherId: 2
    },{
      StudentId: 3,
      TeacherId: 3
    }], {});
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
