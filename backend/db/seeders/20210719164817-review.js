'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [
        {userId:1,businessId:2,rating:5,answer:'great service and delecious taset',createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:1,rating:1,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:2,rating:1,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:3,rating:1,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:4,rating:1,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:5,rating:1,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:6,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:7,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:8,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:9,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:10,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:11,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:12,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:13,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:14,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:15,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:16,rating:2,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:17,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:18,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:19,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:20,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:21,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:1,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:2,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:3,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:4,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:5,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:6,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:7,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:8,rating:3,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:9,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:10,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:11,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:12,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:13,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:14,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:15,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:16,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:17,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:18,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:19,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:20,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:21,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:1,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:2,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:3,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:4,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:5,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:6,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:7,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:8,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:9,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:10,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:11,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:12,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:13,rating:4,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:14,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:15,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:16,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:17,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:18,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:19,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:20,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:21,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:1,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:2,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:3,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:4,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:5,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:6,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:7,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:8,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:9,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:10,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:11,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:12,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:13,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:5,businessId:14,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:6,businessId:15,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:7,businessId:16,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:8,businessId:17,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:1,businessId:18,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:2,businessId:19,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:3,businessId:20,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
        {userId:4,businessId:21,rating:5,answer:faker.internet.review(),createdAt:new Date(),updatedAt: new Date()},
    ], {},);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Reviews', null, {},);
    */
  },
};
