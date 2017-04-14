'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Teachers', [{
        name: 'John Doe1',
        email: 'jhon1@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe2',
        email: 'jhon2@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe3',
        email: 'jhon3@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe4',
        email: 'jhon4@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe5',
        email: 'jhon5@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe6',
        email: 'jhon6@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe7',
        email: 'jhon7@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Doe8',
        email: 'jhon8@mail.com',
        phone: 0887881234,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Tsubasa Ozora9',
        email: 'tsu9@mail.com',
        phone: 0887881334,
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
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
