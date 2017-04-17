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
    return queryInterface.bulkInsert('Students', [{
      name: 'John Doe',
      gender: 'Laki',
      birthday: '1991-02-03',
      TeacherId: 1
    },{
      name: 'Master Low',
      gender: 'Laki',
      birthday: '1989-12-13',
      TeacherId: 2
    },{
      name: 'Perti Lomb',
      gender: 'Laki',
      birthday: '1996-04-23',
      TeacherId: 3
    },{
      name: 'Sandra Dom',
      gender: 'Perempuan',
      birthday: '1996-05-17',
      TeacherId: 2
    },{
      name: 'Juan Liat',
      gender: 'Laki',
      birthday: '1985-12-13',
      TeacherId: 1
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
