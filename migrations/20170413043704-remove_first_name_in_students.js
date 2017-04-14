'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // queryInterface.removeColumn('Students', 'last_name')
    return queryInterface.removeColumn('Students', 'first_name')


  },

  down: function (queryInterface, Sequelize) {
    // return queryInterface.addColumn('Students', 'last_name', Sequelize.STRING)
    return queryInterface.addColumn('Students', 'first_name', Sequelize.STRING)
  }
};
