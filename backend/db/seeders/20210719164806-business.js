'use strict';
const faker = require('faker');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Businesses', [
        {ownerId:2,title:'PARTO',description:'Resturant',address:'999 Brentwood',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:3,title:"let's eat",description:'Resturant',address:'999 WC',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:4,title:"yummy",description:'Resturant',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:5,title:"Build",description:'Gym',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:6,title:"neigbor",description:'groccary store',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Businesses', null, {});
    */
  }
};
