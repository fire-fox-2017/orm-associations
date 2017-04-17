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
      name: 'Dolly S. Jewell',
      email: 'DollySJewell@rhyta.com',
      phone: '562-289-7099',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Michael H. Chee',
      email: 'MichaelHChee@armyspy.com',
      phone: '563-557-6964',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'James E. Capps',
      email: 'JamesECapps@teleworm.com',
      phone: '320-266-4761',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Jon N. Tisdale',
      email: 'JonNTisdale@jourrapide.com',
      phone: '713-635-3062',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Sonya B. Mattie',
      email: 'SonyaBMattie@rhyta.com',
      phone: '530-398-7601',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anna C. Bollinger',
      email: 'AnnaCBollinger@armyspy.com',
      phone: '469-327-8897',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Nick E. Zenon',
      email: 'NickEZenon@rhyta.com',
      phone: '323-547-2401',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anna K. Peterson',
      email: 'AnnaKPeterson@dayrep.com',
      phone: '937-332-6308',
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
