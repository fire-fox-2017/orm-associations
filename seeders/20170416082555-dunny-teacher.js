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
                phone: '9578476573627',
                email: 'johndoe@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                name: 'Juhn Doe',
                phone: '9578476573627',
                email: 'juhndoe@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Jihn Doe',
                phone: '9578476573627',
                email: 'jihndoe@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Jehn Doe',
                phone: '9578476573627',
                email: 'jehndoe@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'Jahn Doe',
                phone: '9578476573627',
                email: 'jahndoe@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'John Dae',
                phone: '9578476573627',
                email: 'johndae@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'John Die',
                phone: '9578476573627',
                email: 'johndie@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'John Due',
                phone: '9578476573627',
                email: 'johndue@gmail.com',
                createdAt: new Date(),
                updatedAt: new Date()

            }, {
                name: 'John Dee',
                phone: '9578476573627',
                email: 'johndee@gmail.com',
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
