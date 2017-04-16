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
    return queryInterface.bulkInsert('Students', [{
      name: 'Jon Doe',
      birthdate: '1995-01-02',
      createdAt: new Date,
      updatedAt: new Date,
      email: 'John@gmail.com',
      tinggi_badan: 160,
      phone: '08192929233',
      address: 'Jl matahari no3'
    }, {
      name: 'Luffy Mugiwara',
      birthdate: '1990-11-22',
      createdAt: new Date,
      updatedAt: new Date,
      email: 'Luffy@gmail.com',
      tinggi_badan: 162,
      phone: '081922311533',
      address: 'Jl matahari no4'
    }, {
      name: 'Konoha Maru',
      birthdate: '1999-07-20',
      createdAt: new Date,
      updatedAt: new Date,
      email: 'Nami@gmail.com',
      tinggi_badan: 155,
      phone: '08192115223',
      address: 'Jl matahari no5'
    }, {
      name: 'Boruto Ichina',
      birthdate: '1989-04-15',
      createdAt: new Date,
      updatedAt: new Date,
      email: 'Zoro@gmail.com',
      tinggi_badan: 165,
      phone: '0817563444',
      address: 'Jl matahari no6'
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
