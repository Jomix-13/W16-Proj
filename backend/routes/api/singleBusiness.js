const express = require('express')
const router = express.Router();

const asyncHandler = require('express-async-handler');

const { Business } = require('../../db/models');
const { Review } = require('../../db/models');


router.get(
    '/',
    asyncHandler(
        async (req, res) => {
          const id = req.params.businessId
          const business = await Business.findByPk(id,{
              include:Review
          });
          return await res.json(business);
    })
);
router.get(
    '/:businessId',
    asyncHandler(
        async (req, res) => {
          const id = req.params.businessId
          const business = await Business.findByPk(id,{
              include:Review
            //   include: [{
            //       model: Review,
            //       attributes:['rating', 'answer'],
            //       through:{attributes:[]}
            //   }]
          });
          return await res.json(business);
    })
);
router.get(
    '/:reviewId',
    asyncHandler(
        async (req, res) => {
          const reviewId = req.params.reviewId
          const reviw = await Review.findByPk(reviewId);
          return await res.json(reviw);
    })
);


module.exports = router;