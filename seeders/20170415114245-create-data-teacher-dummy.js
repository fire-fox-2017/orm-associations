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
                name: 'John Doe',
                email: 'john@gmail.com',
                phone: '082343442342',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Butet',
                email: 'butet@gmail.com',
                phone: '08229323342',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ucok',
                email: 'ucok@gmail.com',
                phone: '08928398342',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sintong',
                email: 'sintong@gmail.com',
                phone: '082109092342',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kirana',
                email: 'kirana@gmail.com',
                phone: '081234090442',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Luna',
                email: 'luna@gmail.com',
                phone: '08092123342',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Penjo',
                email: 'penjo@gmail.com',
                phone: '08329893942',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Wira',
                email: 'wira@gmail.com',
                phone: '08293828042',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
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