'use strict';

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
    return queryInterface.bulkInsert('Teachers', [{
      name: 'Joko Tanto',
      email: 'Joko@gmail.com',
      phone: '081929382',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Susan Kulama',
      email: 'Susan@gmail.com',
      phone: '0819233382',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Mikel Hadson',
      email: 'Mikel@gmail.com',
      phone: '0819233222',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Wisni Wus',
      email: 'Wisni@gmail.com',
      phone: '0819555332',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Lala Liar',
      email: 'Lala@gmail.com',
      phone: '081925282',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Uzummaki Naruto',
      email: 'Uzummaki@gmail.com',
      phone: '081555382',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Rani Roma',
      email: 'Rani@gmail.com',
      phone: '081929282',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Lukas Kaku',
      email: 'Lukas@gmail.com',
      phone: '0819294882',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Tita Tarun',
      email: 'Tita@gmail.com',
      phone: '0819228982',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Roma irama',
      email: 'Roma@gmail.com',
      phone: '0811230482',
      createdAt: new Date,
      updatedAt: new Date
    }, {
      name: 'Rian Jaya',
      email: 'Rian@gmail.com',
      phone: '081929382',
      createdAt: new Date,
      updatedAt: new Date
    }], {});
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
