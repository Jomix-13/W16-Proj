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
        {ownerId:2,title:'PARTO',image:'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',description:'Resturant',address:'999 Brentwood',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:3,title:"let's eat",image:'https://cdn.vox-cdn.com/thumbor/EgF_BhrdlBxoGvra6xnkxDlcdkg=/0x0:2250x1500/1200x900/filters:focal(945x570:1305x930)/cdn.vox-cdn.com/uploads/chorus_image/image/57022519/The_Rockaway_Hotel_Margie_s__Kyle_Knodell__3_.257.jpg',description:'Resturant',address:'999 WC',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:4,title:"yummy",image:'https://www.discoverlosangeles.com/sites/default/files/images/2019-01/laxbw-prime-1715-hor-wide.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp',description:'Resturant',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:5,title:"Build",image:'https://www.24hourfitness.com/content/dam/24-hour-fitness/club/club-slideshow/default-images/image9.jpg',description:'Gym',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:6,title:"neigbor",image:'https://media.npr.org/assets/img/2021/05/20/gettyimages-1257380452_wide-9095f1cb28f5271b3d30c58349b27746c6fcbac7.jpg?s=1400',description:'groccary store',address:'Brentwood Plaza',city:'Brentwood',state:'CA',zipCode:94599,createdAt:new Date(),updatedAt: new Date()},
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
