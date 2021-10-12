'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.
    
    Example:
    */
      return queryInterface.bulkInsert('Users', [
        {username:"Demo",email:"Demo@email.com", hashedPassword:await bcrypt.hashSync("Demo", 10)},
        {username:"John",email:"John@email.com", hashedPassword:await bcrypt.hashSync("John", 10)},
        {username:"Vero",email:"Vero@email.com", hashedPassword:await bcrypt.hashSync("Vero", 10)},
        {username:"Christo",email:"Christo@email.com", hashedPassword:await bcrypt.hashSync("Christo", 10)},
        {username:"Parthy",email:"Parthy@email.com", hashedPassword:await bcrypt.hashSync("Parthy", 10)},
        {username:"parto",email:"parto@email.com", hashedPassword:await bcrypt.hashSync("parto", 10)},
        {username:"Youssef",email:"Youssef@email.com", hashedPassword:await bcrypt.hashSync("Youssef", 10)},
        {username:"David",email:"David@email.com", hashedPassword:await bcrypt.hashSync("David", 10)},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    // const Op = Sequelize.Op;
    // return queryInterface.bulkDelete('Users', {
    //   username: { [Op.in]: ['Demo','John', 'FakeUser1'] }
    // }, {});
  }
};
