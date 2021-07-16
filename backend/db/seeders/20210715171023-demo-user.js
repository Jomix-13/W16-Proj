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
        {username: 'Demo',
        email: 'demo@email.com',
        hashedPassword: await bcrypt.hashSync('demo', 10)},
        {username: 'John',
        email: 'john@email.com',
        hashedPassword: await bcrypt.hashSync('john', 10)},
        {username: 'FakeUser1',
        email: faker.internet.email(),
        hashedPassword: await bcrypt.hashSync(faker.internet.password())}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo','John', 'FakeUser1'] }
    }, {});
  }
};
