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
      name: 'Andri Santoso',
      email: 'andri@school.com',
      phone: '08124212234',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Brian Sutanto',
      email: 'brian@brian.com',
      phone: '0893575473857',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sukro Dino',
      email: 'sukro@dino.com',
      phone: '086543126354',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Yeni Suwesti',
      email: 'suwesti@gmail.com',
      phone: '081614913748',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Jono Semono',
      email: 'Jose@gmail.com',
      phone: '089458494588',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Adele Sumampau',
      email: 'AdeleSumampau@yahoo.com',
      phone: '0815181413653',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ben Wallace',
      email: 'Ben@bw.com',
      phone: '086793614544',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'John Cena',
      email: 'ucantseeme@wwe.com',
      phone: '084431276253',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Saptono',
      email: 'saptono@saptono.com',
      phone: '085197531596',
      createdAt: new Date(),
      updatedAt: new Date()
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
