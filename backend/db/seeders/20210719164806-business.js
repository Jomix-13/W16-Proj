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
        {ownerId:1,title:"Bj's",image:"https://cloudfront.bjsrestaurants.com/img_5e4c2876037db2.00079846_517_Brentwood_2019.jpg",description:"Resturant",address:"683 Hamilton ct.",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:2,title:"In & In",image:"http://cdn.cnn.com/cnnnext/dam/assets/190710135245-12-waterfront-restaurants.jpg",description:"Resturant",address:"1537 Park Street",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:3,title:"favourit buffet",image:"https://www.contracostalive.com/blog/wp-content/uploads/2020/08/attra1.jpg",description:"Resturant",address:"2054 Park Street",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:4,title:"Marc",image:"https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg",description:"Resturant",address:"1258 Nelm Street",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:5,title:"out & out",image:"https://www.discoverlosangeles.com/sites/default/files/images/2019-01/laxbw-prime-1715-hor-wide.jpg?width=1600&height=1200&fit=crop&quality=78&auto=webp",description:"Resturant",address:"1505 Alexander Avenue",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:6,title:"food max",image:"https://image.cnbcfm.com/api/v1/image/105365450-1533059996128arnaudsmaindiningroom_overhead.jpg?v=1533060091&w=1600&h=900",description:"Resturant",address:"2700 EAST LELAND ROAD",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:7,title:"winco",image:"https://www.myrtlebeach.com/wp-content/uploads/2014/01/GregNormanAustralianGrille-exterior-960x480.jpg",description:"Resturant",address:"200 Griffith Ln.",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:8,title:"Hardiz",image:"https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/a/ad/aad3a0a0-5a91-5fce-9524-27cf6f819144/5e729e5c6b4f2.image.jpg?resize=1200%2C800",description:"Resturant",address:"855 Minnesota Ave",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:1,title:"Falafl",image:"https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://cf-images.us-east-1.prod.boltdns.net/v1/static/3281700261001/0f2d2cb0-b3bf-4b1b-a9bc-2c42fa9df42f/5f30bc92-252f-4c55-a98f-ef9b804f659a/1280x720/match/image.jpg&w=1280&h=720&q=90&c=cc",description:"Resturant",address:"140 Birch St.	",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:2,title:"yalla",image:"https://img.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6SYV7MQRYAI6ZOWKQ2YUJ7EKFU.jpg&w=1800",description:"Resturant",address:"6651 Lone Tree Way",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:3,title:"Harbor",image:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iS9YdetcwkPo/v0/1000x-1.jpg",description:"Resturant",address:"850 Second St.",city:"Brentwood",state:"CA",zipCode:94513,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:4,title:"Power up",image:"https://pd-stuytown-cd.stuytown.com/-/media/an-to-ba/backofgym-1380x600.jpg?h=600&iar=0&w=1380",description:"Gym",address:"100 Wilson Rd.	",city:"Alamo",state:"CA",zipCode:94507,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:5,title:"hey ya..",image:"https://toughmudder.co.uk/wp-content/uploads/2020/08/danielle-cerullo-CQfNt66ttZM-unsplash-scaled.jpg",description:"Gym",address:"180 Hemme Ave.",city:"Alamo",state:"CA",zipCode:94507,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:6,title:"build up",image:"https://d279m997dpfwgl.cloudfront.net/wp/2020/11/0706_healthworks-02-e1605816171743.jpg",description:"Gym",address:"3001 Miranda Ave.",city:"Alamo",state:"CA",zipCode:94507,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:7,title:"do it",image:"https://www.phillymag.com/wp-content/uploads/sites/3/2021/09/control-lab-900x600-1.jpg",description:"Gym",address:"603 MAIN ST",city:"Pleasenton",state:"CA",zipCode:94566,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:8,title:"Plaid Pantry",image:"https://images.wsj.net/im-57265?width=1280&size=1.33333333",description:"Grocery store",address:"400 OLD BERNAL AVE.",city:"Pleasenton",state:"CA",zipCode:94566,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:1,title:"247",image:"https://upload.wikimedia.org/wikipedia/commons/1/13/Supermarkt.jpg",description:"Grocery store",address:"218 Ray St",city:"Pleasenton",state:"CA",zipCode:94566,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:2,title:"welcome!",image:"https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvY2VyeSUyMHN0b3JlJTIwYWlzbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",description:"Grocery store",address:"2244 Water Street",city:"Pleasenton",state:"CA",zipCode:94566,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:3,title:"on the run",image:"https://www.supermarketnews.com/sites/supermarketnews.com/files/busyconsumers_0.jpg",description:"Grocery store",address:"1458 Logan Lane",city:"Hyward",state:"CA",zipCode:94540,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:4,title:"wallreds",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7UqDqqrm0ax3iWvyru2j3AKT2SsC10oQCuw&usqp=CAU",description:"Grocery store",address:"25800 Carlos Bee Blvd",city:"Hyward",state:"CA",zipCode:94542,createdAt:new Date(),updatedAt: new Date()},
        {ownerId:5,title:"vegii",image:"https://assets-us-01.kc-usercontent.com/0542d611-b6d8-4320-a4f4-35ac5cbf43a6/0a86cf3e-2ec3-4995-a651-4b0cff09c76d/grocery-store-insurance-header.jpg?w=1110&h=400&fit=crop",description:"Grocery store",address:"20103 Lake Chabot Rd",city:"Hyward",state:"CA",zipCode:94546,createdAt:new Date(),updatedAt: new Date()},
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
