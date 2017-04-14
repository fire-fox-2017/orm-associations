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
    return queryInterface.bulkInsert('student_teachers', [{
      StudentId: 1,
      TeacherId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      StudentId: 1,
      TeacherId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      StudentId: 1,
      TeacherId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      StudentId: 2,
      TeacherId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      StudentId: 2,
      TeacherId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      StudentId: 3,
      TeacherId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('student_teachers', null, {});
  }
};
