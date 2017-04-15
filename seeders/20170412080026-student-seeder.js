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
    return queryInterface.bulkInsert('Students', [
    {
      first_name: 'John',
      last_name: 'Doe',
      birthdate: new Date('1989-03-25'),
      // birthdate: new Date('1989-03-25').toISOString().substring(0, 10),
      height: 170,
      phone: '1234567899',
      email: 'dow@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Wick',
      birthdate: new Date('1970-05-12'),
      height: 159,
      phone: '1234567899',
      email: 'wick@gmail.com',
      // birthdate: new Date('1970-05-12').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Bro',
      height: 165,
      phone: '1234567899',
      email: 'bro@gmail.com',
      birthdate: new Date('1965-11-08'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Join',
      height: 189,
      phone: '1234567899',
      email: 'join@gmail.com',
      birthdate: new Date('1912-10-04'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Lem',
      height: 178,
      phone: '1234567899',
      email: 'lem@gmail.com',
      birthdate: new Date('1978-09-13'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Rambutan',
      height: 175,
      phone: '1234567899',
      email: 'rambutan@gmail.com',
      birthdate: new Date('1989-04-12'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      first_name: 'John',
      last_name: 'Keriting',
      height: 188,
      phone: '1234567899',
      email: 'keriting@gmail.com',
      birthdate: new Date('1977-11-17'),
      // birthdate: new Date('1965-11-21').toISOString().substring(0, 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
