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
    return queryInterface.bulkInsert('Teachers', [{
      name: 'Marmar Wati',
      gender: 'Perempuan',
      email: 'Marmar@mail.com'
    },{
      name: 'John Tra',
      gender: 'Laki',
      email: 'john@mail.com'
    },{
      name: 'Luka Banget',
      gender: 'Laki',
      email: 'Lukba@mail.com'
    },], {});
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
