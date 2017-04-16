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
      {first_name:"Lani",last_name:"Rollins",email:"blandit@quam.com",phone:"16333897173",birth_date:"1971-12-01",height:170, createdAt: new Date(), updatedAt: new Date()},
      {first_name:"McKenzie",last_name:"Burris",email:"mauris.Morbi.non@nequeNullam.com",phone:"19062350832",birth_date:"1971-11-02",height:180, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Amethyst","last_name":"Morgan","email":"dui@magnis.ca","phone":"15483666273","birth_date":"1971-12-03",height:190, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Lamar","last_name":"Hardin","email":"pharetra.felis.eget@mattisInteger.com","phone":"15196938091","birth_date":"1971-10-04",height:177, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Keegan","last_name":"Coleman","email":"leo.Cras.vehicula@musProinvel.edu","phone":"19986268896","birth_date":"1971-09-05",height:172, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Marshall","last_name":"Griffith","email":"egestas.Aliquam@Proinvelnisl.edu","phone":"15543535053","birth_date":"1971-08-06",height:181, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Jonah","last_name":"Deleon","email":"Donec.tincidunt.Donec@dolor.org","phone":"17826712356","birth_date":"1971-07-07",height:185, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Jackson","last_name":"Howell","email":"eleifend@Nuncullamcorpervelit.ca","phone":"13237380807","birth_date":"1971-06-08",height:191, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Kieran","last_name":"Edwards","email":"a.enim@perinceptoshymenaeos.com","phone":"16958305757","birth_date":"1971-05-09",height:174, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Fiona","last_name":"Howard","email":"ut.quam@loremfringillaornare.org","phone":"14945852386","birth_date":"1971-04-10",height:175, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Jorden","last_name":"Ruiz","email":"iaculis.lacus.pede@temporerat.com","phone":"13148905249","birth_date":"1971-03-11",height:187, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Kendall","last_name":"Burt","email":"eu.eros@eutellus.org","phone":"11413798276","birth_date":"1971-02-12",height:190, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Blossom","last_name":"Cantrell","email":"Suspendisse.aliquet@estarcu.ca","phone":"13698937454","birth_date":"1971-01-13",height:168, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Latifah","last_name":"Barron","email":"est@mauris.edu","phone":"13211587603","birth_date":"1971-12-14",height:190, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Brenna","last_name":"Horton","email":"morbi@AliquamnislNulla.edu","phone":"15644097698","birth_date":"1971-12-15",height:180, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Ray","last_name":"Alexander","email":"ac@Duis.edu","phone":"14002705855","birth_date":"1971-12-16",height:179, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Tyler","last_name":"Daniels","email":"ac@morbitristiquesenectus.com","phone":"11928526320","birth_date":"1971-11-17",height:189, createdAt: new Date(), updatedAt: new Date()},
      {"first_name":"Hanae","last_name":"Kelly","email":"Mauris.magna@loremfringillaornare.org","phone":"11366211133","birth_date":"1971-10-18",height:190, createdAt: new Date(), updatedAt: new Date()}
    ]);
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
