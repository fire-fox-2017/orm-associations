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
    return queryInterface.bulkInsert('Teachers', [
      {
        name: 'Robert Pires',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alek Sumer',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dapit Bekam',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ronaldono',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Zinedien Zidan',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Samir Nasri',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Steven Gerrard',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'John Doe',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ahmad Dhani',
        email: 'pires@gmail.com',
        phone: 0812123123,
        createdAt: new Date(),
        updatedAt: new Date()
      }


      ], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
